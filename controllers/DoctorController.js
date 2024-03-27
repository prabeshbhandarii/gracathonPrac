import {Doctor}  from '../db/index.js'
import jwt from 'jsonwebtoken'
import { z } from 'zod'

const signupSchema = z.object({
    name: z.string(),
    email: z.string().email()
})
export const createDoctor = async ()=>{
    const body = await req.body

}