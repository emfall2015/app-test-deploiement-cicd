# Déploiement & CI/CD

L'application à déployer contient :

- un frontend Angular ;
- un backend Node.js / Express ;
- un faux système de connexion ;
- une "base de données" sous forme de fichier JSON ;
- une route `/api/info` reposant sur une fonction métier ;
- un test unitaire de cette fonction.

> Cette application est destinée à un exercice de formation. Elle n'est pas conçue pour être sécurisée ni utilisée en production.

## Lancement de l'application localement

L'application se lance avec docker compose :

```bash
cd <repertoire_du_projet>
docker compose up -d --build
```

Le backend écoute sur : `http://localhost:3000`
Pour lancer les tests :

Le frontend écoute sur : `http://localhost:4200`

### Comptes de démonstration

- `alice` / `password`
- `bob` / `1234`
- `admin` / `admin`

## Déploiement sur VM Azure

A chaque push sur la branche main les étapes suivantes sont effctuées

# ci.yaml

- Récupérer le code
- connexion à Githus Actions
- Créer le fichier .env du backend
- Se connecter à Docker Hub
- Construire l'image backend
- Construire l'image frontend
- Lancer les conteneurs
- Tester si le Frontend et le backend répondent
- Ecrire sur les logs en cas d'erreurs
- Pusher les images construites sur DockerHub

# cd.yaml

- Se connecter à la VM Azure par ssh avec un utilisateur et mot de passe
- Aller dans le dossier du projet 
- Télécharger les nouvelles images depuis Docker Hub
- Redémarrer les conteneurs avec les nouvelles images
- Vérifier l'état des conteneurs

 
