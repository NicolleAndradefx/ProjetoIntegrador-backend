import express from "express";
import cors from "cors";
import mysql from "mysql";
import session from "express-session";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import db from "./db.js";


dotenv.config();

const app = express();
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ["POST", "GET"],
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 *60 * 24
    } //tempo de cookie
}));

//create do banco
app.post("/cadastrousuario", (req, res) => {
    const sql = "INSERT INTO ateatampa(id, nomeadm, email, senha, confirmarsenha, criado_em, atualizado_em) VALUES(?)";
    const valores = [
        req.body.id,
        req.body.nomeadm,
        req.body.email,
        req.body.senha,
        req.body.confirmarsenha,
        req.body.criado_em,
        req.body.atualizado_em
    ];

    db.query(sql, [valores], (err, data) => {
        if(err) {
            console.log(err);
            return res.status(500).json({ error: "Erro ao cadastrar"})
        }

        return res.json(data);
    });
});

app.post("/cadastroadm", (req, res) => {
    const sql = "INSERT INTO ateatampa(id, nomeadm, email, senha, confirmarsenha, criado_em, atualizado_em) VALUES(?)";
    const valores = [
        req.body.id,
        req.body.nomeadm,
        req.body.email,
        req.body.senha,
        req.body.confirmarsenha,
        req.body.criado_em,
        req.body.atualizado_em
    ];

    db.query(sql, [valores], (err, data) => {
        if(err) {
            console.log(err);
            return res.status(500).json({ error: "Erro ao cadastrar"})
        }

        return res.json(data);
    });
});


app.post("/loginusuario", (req, res) => {
    const sql = "SELECT * FROM cadasrousuario WHERE email = ? AND senha = ?";
    
    db.query(sql, [req.body.email, req.body.senha], (err, data) => {
        if(err) {
            console.log(err);
            return res.status(500).json({ error: "Erro ao lagor"})
        }

        if(data.length > 0){
            req.session.username = data[0].nameusuario;
            return res.json("Login realizado com sucesso");
        } else{
            return res.json("Falha no login")
        }
    });
});


app.post("/loginadm", (req, res) => {
    const sql = "SELECT * FROM cadasroadm WHERE email = ? AND senha = ?";
    
    db.query(sql, [req.body.email, req.body.senha], (err, data) => {
        if(err) {
            console.log(err);
            return res.status(500).json({ error: "Erro ao lagor"})
        }

        if(data.length > 0){
            req.session.username = data[0].nameadm;
            return res.json("Login realizado com sucesso");
        } else{
            return res.json("Falha no login")
        }
    });
});

//caso o login não entre
app.get("/", (req, res) => {
    if (req.session.username){
        return res.json({
            valid: true,
            name: req.session.username
        });
    } else {
        return res.json({
            valid: false
        })
    }
});


app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
})