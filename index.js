import express from 'express'
import bodyParser from 'body-parser'
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res)=>{
    return res.json({
        msg: "healthy server"
    })
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
