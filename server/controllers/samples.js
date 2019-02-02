const mongoose = require('mongoose');

// <*> Model links, adjust path as needed
const Sample = mongoose.model('SamplePrimary');
const Dependent = mongoose.model('SampleDependent');

module.exports = {
    readAllSamples:(req,res)=>{
        // console.log('Requesting all');
        Sample.find({},function(error,sample){
            //error handling just pushes
            //the error to the front end
            //adjust if necessary
            if (error){res.json(error);}
            else {res.json(sample);}
        });
    },

    //ReturnOne requires an id, 
    //passed through the route
    readOneSample:(req,res)=>{
        // console.log('Requesting one');
        Sample.findOne({_id:req.params.id},function(error,sample){
            if (error){res.json(error);}
            else {
        //if any aditional logic is required before
        //passing the object along, this is a good 
        //place to implement it. Adjust the json
        //response, to include additional data
                res.json(sample);
            }
        });
    },

    createNewSample:(req,res)=>{
        // console.log('Creating a new one');
        Sample.find({sampleName:req.body.sampleName},(err,result)=>{
            if (result.length){
                console.log(result);
                res.json({error:"An object with this name already exists"})
            }
            else {
                let sample = new Sample(req.body);
                sample.save((err)=>{
                    if (err){res.json(err);}
                    //The message is optional, but helps
                    //maintain consistency. This way,
                    //all API calls return JSON
                    else {res.json({message:"Success"});}
                })
            }

        })
    },

    updateOneSample:(req,res)=>{
        // console.log('Updating an existing one');
        Sample.updateOne({_id:req.params.id},req.body,(err,raw)=>{
            if (err){res.json(err);}
            else {res.json(raw);}
        });
    },

    destroyOneSample:(req,res)=>{
        // console.log('Destroying one');
        Sample.findOneAndDelete({_id:req.params.id},(err,result)=>{
            if (err){res.json(err);}
            else {
                // console.log(result);
                res.json({message:"Success"});
            }
        });
    },

    postNewDependent:(req,res)=>{
        Dependent.create(req.body,(error,dependent)=>{
            if (error) {
                res.json(error);
            }
            else {
            //Linking the newly created dependent
            //to the sample's field of the same name
                Sample.findByIdAndUpdate(req.params.id,{$push:{dependents:dependent}},(err,result)=>{
                    if (err) {
                        res.json(err);
                    }
                    else {
                        // console.log(result);
                        res.json({message:"Success"});
                    }
                });
            }
        });
    },

    getAllDependents:(req,res)=>{
        //Finds and returns all dependents 
        //of a particular sample object
        Sample.findById(req.params.id).populate('dependents').exec((err,sample)=>{
            if (err){res.json(err)}
            else {
                //since sample.dependents is an array
                //wrap it in an object for the response
                res.json({dependents:sample.dependents});
            }
        });
    },

    searchDependents:(req,res)=>{
        Sample
        .findById(req.params.sampleID)
        .populate( {
            path:'dependents',
            //'match' does nothing
        })
        .exec((err,sample)=>{
            if (err){
                res.json(err);
            }
            else {
                let para = req.params.dependentParam.toLowerCase();
                for (let i=0; i<sample.dependents.length; i++){
                    let label=sample.dependents[i].sampleField.toLowerCase()
                    if ( !(label.includes(para)) ) {
                        for (let j = i; j<sample.dependents.length-1;j++){
                            sample.dependents[j]=sample.dependents[j+1]
                        }
                        sample.dependents.pop();
                    }
                }
                res.json({dependents:sample.dependents});
            }
        });
    }

}