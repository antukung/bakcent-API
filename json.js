import { Express } from "express";
import { cors } from "cors";

const app = express();

app.post("contrasenia",(req,res)=>{
    console.log(req.body)
    res.status(201).send(`<h1>POST ${req.body[0]}</h1>`)
});

app.post("usuario",(req,res)=>{
    console.log(req.body)
    res.status(201).send(`<h1>POST ${req.body[0]}</h1>`)
});

app.post("puntaje",(req,res)=>{
    console.log(req.body)
    res.status(201).send(`<h1>POST ${req.body[0]}</h1>`)
});

app.get("/contrasenia/:id",(req,res)=>{
    console.log(req.params);
    res.send(`<h1>No se si te va a gustas  ${req.params.id}</h1>`);
});

app.get("/usuario/:id",(req,res)=>{
    console.log(req.params);
    res.send(`<h1>No se si te va a gustas  ${req.params.id}</h1>`);
});








