const express = require("express");
const app = express();
const db = require("./db/conection")
const bodyParser = require("body-parser");

const PORT = 3000;

app.listen(PORT, function() {
    console.log(`O express está rodando na porta ${PORT}`);
});

// body parser 

app.use(bodyParser.urlencoded({ extended: false}));

// db conection
db.authenticate()
.then(() =>{
    console.log("Conectou ao banco com sucesso");
})
.catch(err => {
    console.log("Ocorreu um erro ao conectar", err);
})

// routes 
app.get("/", (req,res) => {
    res.send("Está funcionando!");
});

// job routes 

app.use("/jobs", require("./routes/jobs"));