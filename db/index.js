import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const DATABASE_URL = process.env.DATABASE_URL
console.log(DATABASE_URL)

mongoose.connect(DATABASE_URL)

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
}, { timestamps: true })

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
}, { timestamps: true })


const Doctor = mongoose.model('Doctor', DoctorSchema)
const Patient = mongoose.model('Patient', PatientSchema)

export { Doctor, Patient }