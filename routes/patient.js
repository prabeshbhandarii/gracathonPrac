import { Router } from "express";
const router = Router()
import { createPatient } from '../controllers/PatientController.js'
import { patientMiddleware } from '../middlewares/patient.js'

router.post('/signup', patientMiddleware, createPatient)

export default router