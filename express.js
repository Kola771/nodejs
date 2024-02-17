const express = require('express'); // Importation du module express
const app = express(); // création d'une instance d'application Express

// Middleware express. s'appelle avant toutes les requêtes
app.use((req, res, next) => {
    //Paramétrer les en-têtes de la réponse à renvoyer
    res.setHeader("Content-Type", "application/json"); // le type de réponse
    res.setHeader("Access-Control-Allow-Origin", "*"); // sites autorisés à faire des requêtes sur l'api
    res.setHeader("Access-Control-Allow-Methods", "GET, POST"); // Méthodes HTTP autorisées GET & POST

    next(); // autoriser la suite de la requête
});

const users = [
    {
        id: 1,
        login: "ABOUDOU Koladé",
    },
    {
        id: 2,
        login: "MEDENOU Marcos",
    },
    {
        id: 3,
        login: "OTEGBEYE Akanni Geoffroy",
    }
];
app.get("/", (req, res) => {
    res.json({ message: "Welcome !" })
})

app.get("/api/users", (req, res) => {
    res.json({ users: users })
})


app.get("/api/user/:message([a-zA-Z]+)", (req, res) => {
        res.json(req.params.message);
})
app.get("/api/user/:id(\\d+)", (req, res) => {
    const id = Number(req.params.id);
    if(id < users.length)
    {
        res.json(users[id]);
    } else {
        res.json({error: "L'utilisateur n'existe pas !"});
    }
    // const user =
    // {
    //     id: 4,
    //     login: "Alec Benjamin",
    // };
    // res.json(user)
})

// C'est un middleware qui va s'exécuter à la fin si aucune des routes précédentes ne correspondent
app.use((req, res) => {
    res.status(404).json({ error: "Route non trouvée !" });
})

app.listen(3000, () => {
    console.log("Le serveur vient de démarrer...");
})