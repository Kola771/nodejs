# Les méthodes utiles dans les différents modules

1. os:

`os.platform()`: Renvoie la plateforme du système d'exploitation.   
`os.arch()`: Renvoie l'architecture du processeur.  
`os.cpus()`: Renvoie un tableau des informations sur les CPU.   
`os.totalmem()`: Renvoie la quantité totale de mémoire système en octets.   

2. path:

`path.join()`: Joindre des segments de chemin.   
`path.resolve()`: Résoudre une séquence de segments de chemin en une absolue.   
`path.basename()`: Renvoie la dernière partie d'un chemin. 
`path.dirname()`: Renvoie le répertoire du chemin.   
`path.extname()`: Renvoie l'extension du chemin d'un fichier.

3. fs (système de fichiers):

`fs.readFile()`: Lire le contenu d'un fichier.   
`fs.writeFile()`: Écrire dans un fichier.   
`fs.appendFile()`: Ajouter du contenu à un fichier.   
`fs.readdir()`: Lister le contenu d'un répertoire.   

4. http (serveur HTTP):

`http.createServer()`: Créer un serveur HTTP.   
`server.listen()`: Écouter les connexions sur un port.   
`request` et `response` (objets): Utilisés pour traiter les requêtes et les réponses HTTP.   
`response.writeHead()`: Écrire les en-têtes de la réponse.   
`response.end()`: Terminer la réponse.   
Voici un exemple minimal d'utilisation du module HTTP dans Node.js :

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  `res.writeHead(200, {'Content-Type': 'text/plain'});`
  `res.end('Hello, World!\n');`
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
```

Pour travailler avec les objets request et response dans le contexte d'un serveur HTTP Node.js, il est utile de connaître certaines méthodes couramment utilisées. Voici quelques-unes des méthodes importantes pour ces objets :

## Objet Request (req):
`req.url`:Renvoie l'URL de la requête.   
`req.method`: Renvoie la méthode HTTP de la requête (GET, POST, etc.).    
`req.headers`:Renvoie les en-têtes de la requête sous forme d'objet.    
`req.params` (pour les routes paramétrées) : Contient les paramètres de la route extraits de l'URL.   
`req.query`: Contient les paramètres de requête de l'URL (pour les requêtes GET).   
`req.body` (nécessite un middleware de traitement de corps comme body-parser pour les requêtes POST) :   

Contient les données de corps de la requête (pour les requêtes POST).

## Objet Response (res):
`res.writeHead(statusCode, [headers]):`Écrit les en-têtes de la réponse. statusCode est le code de statut HTTP (par exemple, 200 pour OK).   
`res.write(data):`Écrit des données dans le corps de la réponse.   
`res.end([data]):`Termine la réponse. Si data est fourni, il est écrit dans le corps de la réponse avant de la terminer.   
`res.send([body]) (express.js) :`Envoie une réponse complète en spécifiant le corps de la réponse (compatible avec express.js).   
`res.status(statusCode) (express.js) :`Définit le code de statut HTTP de la réponse (compatible avec express.js).   
`res.redirect([status,] path) (express.js) :`Redirige la requête vers le chemin spécifié (compatible avec express.js).   