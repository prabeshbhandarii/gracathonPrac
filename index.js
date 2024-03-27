import express from 'express'
import bodyParser from 'body-parser'
const app = express();
import doctorRouter from './routes/doctor.js' 
import patientRouter from './routes/patient.js'

app.use(bodyParser.json());

app.get('/', (req, res)=>{
    return res.json({
        msg: "healthy server"
    })
})

app.use('/doctor', doctorRouter)

app.use('/patient', patientRouter)


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
