import { Router } from "express";
const router = Router()
import { createDoctor } from '../controllers/DoctorController.js'
import { doctorMiddleware } from '../middlewares/doctor.js'

router.post('/signup', doctorMiddleware, createDoctor)

export default router