import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://prabeshbhandari842:eyHb3RbfU8Ymi3rt@cluster0.jvd7wuw.mongodb.net/gracathon')

const DoctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    nmc_no: {
        type: String,
        required: true,
    },
    availability: {
        type: Boolean,
        default: false,
    },
    speciality: {
        type: String,
        required: true,
    },
    hospitals: {
        type: [String],
        required: true,
    },
    currently_at: {
        type: String,
        required: false,
    }
})

const PatientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    medical_history: {
        type: [String],
        required: false,
    }
})


const Doctor = mongoose.model('Doctor', DoctorSchema)
const Patient = mongoose.model('Patient', PatientSchema)

module.exports = {
    Doctor, 
    Patient
}