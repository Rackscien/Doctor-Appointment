const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    userId : {
        type: String
    },
    firstName: {
        type: String,
        required: [true, 'first name is require']
    },
    lastName: {
        type: String,
        required: [true, 'last name is require']
    },
    phone: {
        type : String,
        required: [true, 'phone number is required']
    },
    email : {
        type : String,
        required :[true, 'Email is require']
    },
    website : {
        type : String
    },
    address : {
        type : String,
        required : [true, 'address is require']
    },
    specialization: {
        type : String,
        required : [true, 'specialization is require']
    },
    experience: {
        type: String,
        required : [true,'Experience is require']
    },
    feesPerCunsaltation :{
        type : Number,
        required : [true, 'Fee is require']
    },
    status :{
        type : String,
        default: 'pending'
    },

    timings :{
        type: Object,
        required : [true, 'Work timing is require']
    },
},
{timestamps : true}
);

const doctorModel = mongoose.model('doctors', doctorSchema);

module.exports = doctorModel;