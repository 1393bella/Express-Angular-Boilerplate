let mongoose = require('mongoose');

// <*> Basic structure for database schemas with a one-to-many relationship
let SampleDependentSchema = new mongoose.Schema({
    sampleField:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50,
        default:"Sample Field Default Value",
    },
},{timestamps:true});

let SamplePrimarySchema = new mongoose.Schema({
    sampleName:{
        type:String,
        required:[true,"Must have a name"],
        minlength:[5,"The name is too short"],unique:true
    },
    sampleURL:{
        type:String,
        required:true,
        validate:{
            validator:function(val){
                let re = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
                return re.test(String(val).toLowerCase());
            }
        }
    },
    dependents:[SampleDependentSchema],
    //alternatively:
    //dependents:[{ type: Schema.Types.ObjectId, ref: 'SampleDependent' }]
},{timestamps:true});

mongoose.model('SamplePrimary',SamplePrimarySchema);
mongoose.model('SampleDependent',SampleDependentSchema);