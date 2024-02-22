
const path = require("path");
const express = require("express");

const app = express();

console.log("dossier des vues = ", path.join(__dirname, 'views'));
// Configurer Express pour servir des fichiers statiques depuis le dossier 'img'
app.use("/img", express.static(path.join(__dirname, "img")));
// Montrer à Express.js où se trouvent les vues
app.set('views', path.join(__dirname, 'views'));

// Demander à express d'utiliser pug comme engin de template
app.set('view engine', 'pug');

app.get("/", (req, res) => {
    // res.send("<h1>Hello world</h1>");
    res.render("index")
});

app.listen(3300, () => {
    console.log("Serveur en cours...");
})