// <*> import models as necessary
const samples=require('../controllers/samples.js')

// <*> RESTful API routes for two database schemas
//Main Sample schema gets full five RESTful routes
//Secondary Dependent schema is created, read,
//updated, and destroyed from the link
//with the primary database object

// <*> Don't forget to replace ALL names!
module.exports = function(app){

// <*> for this route to function properly
//angular output must already be compiled with
//ng build --watch

    
    app.get('/api/samples',function(req,res){
        samples.readAllSamples(req,res);
    });

    app.get('/api/samples/:id',function(req,res){
        samples.readOneSample(req,res);
    });

    app.post('/api/samples',function(req,res){
        samples.createNewSample(req,res);
    });

    app.put('/api/samples/:id',function(req,res){
        samples.updateOneSample(req,res);
    });

    app.delete('/api/samples/:id',function(req,res){
        samples.destroyOneSample(req,res);
    });

    // <*> The ID here is of a main Sample, to which 
    //the dependent will be attached
    app.post('/api/dependents/:id',function(req,res){
        samples.postNewDependent(req,res);
    });

    app.get('/api/dependents/:id',function(req,res){
        samples.getAllDependents(req,res);
    });

    app.get('/api/dependents/:sampleID/:dependentParam',function(req,res){
        samples.searchDependents(req,res);
    });

    
}