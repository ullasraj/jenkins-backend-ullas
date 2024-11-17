import express, { Request, Response } from 'express'

const app = express()


app.get("/hello",(req:Request,res:Response)=>{
    res.send("Hello ULLAS")
})
app.listen(3000, () => {
    console.log("Server listern on port 3000")
})