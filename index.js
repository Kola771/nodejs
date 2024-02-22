// // console.log("hello world ! 👌🤣🤣")

// const http = require('http');
// const port = 9000;
// const hostname = '127.0.0.1';

// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     res.statusCode = 200;
//     res.end('<h1>Hello highfive ! 👌</h1>');
// })

// // server.listen(port, hostname, () => {
// //     console.log("Server prêt sur", hostname, ":", port)
// // });

// server.listen(port, hostname, () => {
//     console.log(`Server prêt sur le http://${hostname}:${port}`)
// });

// console.log(process.env("NODE_ENV"))
// console.log(__filename)
// console.log(__dirname)

// const http = require('http');
// const port = 9000;

// const server = http.createServer((req, res) => {
//     // res.end("Hello world")
//     res.setHeader('Content-Type', 'text/html')
//     // res.setHeader('Content-Type', 'text/plain')
//     res.write("<!DOCTYPE html>");
//     res.write("<html>");
//     res.write("<strong>Hello worlds</strong>");
//     res.write("</html>");
//     // res.end("Hello worlds")
//     res.end()
// });


// server.listen(port, () => {
//     console.log(`http://localhost:${port}`)
// })

// const http = require('http');
// const port = 9000;

// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'application/json')
//     res.end(JSON.stringify({message: "Hello World !"}));
// });


// server.listen(port, () => {
//     console.log(`http://localhost:${port}`)
// })


const http = require('http'); // Importation du module http pour le serveur

const url = require('url'); // importation du module url pour avoir accès à l'url

const server = http.createServer((request, response) => {
    //Paramétrer les en-têtes de la réponse à renvoyer
    response.setHeader("Content-Type", "application/json"); // le type de réponse
    response.setHeader("Access-Control-Allow-Origin", "*"); // sites autorisés à faire des requêtes sur l'api
    response.setHeader("Access-Control-Allow-Methods", "GET, POST"); // Méthodes HTTP autorisées GET & POST

    // Récupérer les informations sur la route requetée

    // const urlPath = url.parse("https://monsite.fr/users?id=23&uuid=abc-123", true);

    const urlPath = url.parse(request.url, true).pathname;
    // console.log("url : ", urlPath);
    // console.log("methode : ", request.method)

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

    const userRegex = /^\/api\/user\/(\d+)$/;
    const match = (urlPath.match(userRegex));
    let id = undefined;

    if(match)
    {
        id = Number(match[1]);
    }
    
    // Gérer les différentes routes de notre api
    if (request.method === "GET") {
        if (urlPath === "/") {
            response.end(JSON.stringify({ message: "Welcome !" }))
        } else if (urlPath === "/api/users") {
            response.end(JSON.stringify({ users: JSON.stringify(users) }))
        } else if (urlPath === "/api/user") {
            const user =
            {
                id: 4,
                login: "Alec Benjamin",
            };
            response.end(JSON.stringify(user))
        } else if (match) {
            if(id < users.length)
            {
                response.end(JSON.stringify(users[id]))
            } else {
                
                response.end(JSON.stringify({error: "L'utilisateur n'existe pas !"}))
            }
        } else {
            response.statusCode = 404;
            response.end(JSON.stringify({ error: "Route non trouvé !!!" }))
        }
    } else {
        response.end(JSON.stringify({ error: "Méthodes non supportée !!!" }))
    }
    // response.end(JSON.stringify({message: "hello world !!!"}))

});

server.listen(3000, () => {
    console.log("Le serveur vient de démarrer...");
})