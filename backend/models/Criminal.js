import mongoose from 'mongoose';

const Criminalschema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    inmateid : {
        type: Number,
        required: true,
        unique: true
    },
    adress : {
        type: String,
        required: true,
        unique: false
    },
    age : {
        type: String,
        required: true,
        unique: false
    },
    mobile : {
        type: Number,
        required: true,
        unique: true
    },
    datearrested : {
        type: Date,
        required: true,
        unique: false
    },
    daterelease : {
        type: Date,
        required: true,
        unique: false
    },
    previousconviction : {
        type: Number,
        required: true,
        unique: false
    }
})

const criminals = mongoose.model('Criminals', Criminalschema);

export default criminals;