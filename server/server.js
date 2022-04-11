const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const res = require('express/lib/response');

const bcrypt = require('bcrypt');
const { hash } = require('bcrypt');
const { send } = require('express/lib/response');
const saltRounds = 10

app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'auditoria',
});


/* Query POST para criar um novo trabalho  */
app.post('/criaTrabalho', (req, res) => {
    const tipoTrabalho = req.body.tipoTrabalho
    const empresa = req.body.empresa
    const nomeTrabalho = req.body.nomeTrabalho
    const mesTrabalho = req.body.mesTrabalho
    const anoTrabalho = req.body.anoTrabalho

    db.query('INSERT INTO auditoria.trabalho (tipoTrabalho, empresa, nomeTrabalho, mesTrabalho, anoTrabalho) VALUES(?, ?, ?, ?, ?);',
        [tipoTrabalho, empresa, nomeTrabalho, mesTrabalho, anoTrabalho],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("Cadastro efetuado")
            }
        }
    )
});

/* Query GET para pegar listagem de trabalhos  */
app.get('/getTrabalhos', (req, res) => {
    db.query('SELECT * FROM auditoria.trabalho order by id_trabalho desc;',
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    )
})


/* Query POST para cadastro de usuário e senha */
app.post('/criaUsuario', (req, res) => {

    const tipo_usuario = req.body.tipo_usuario
    const empresa = req.body.empresa
    const email = req.body.email
    const senha = req.body.senha
    const nome = req.body.nome
    const area = req.body.area

    /* bcrypt para encriptografar senha enviada para o banco de dados*/
    bcrypt.hash(senha, saltRounds, (err, hash) => {

        if (err) {
            console.log(err)
        } else {
            db.query('INSERT INTO auditoria.usuarios (email, nome, senha, tipo_usuario, area, empresa, data_cadastro) VALUES(?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP());',
                [email, nome, hash, tipo_usuario, area, empresa],
                (err, result) => {
                    if (err) {
                        console.log(err)
                    } else {
                        res.send("Cadastro efetuado")
                    }
                }
            )
        }

    })



})

/* Query GET para apresentar listagem de usuarios*/
app.get('/getUsuarios', (req, res) => {
    db.query('SELECT * FROM auditoria.usuarios order by nome desc;',
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    )
})

/* Query POST para validar login*/
app.post('/login', (req, res) => {
    const email = req.body.email
    const senha = req.body.senha

    db.query('SELECT * FROM auditoria.usuarios WHERE email = ?;',
        email,
        (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                if (result.length > 0) {
                    bcrypt.compare(senha,result[0].password, (error, response) => {
                        if(response){
                            res.send(result)
                        } else {
                            res.send({ message: "Combinação incorreta de usuário e senha" })
                        }
                    })
               } else {
                    res.send({ message: " Usuário inexistente" })
                }
            }
        })
})






app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
});

