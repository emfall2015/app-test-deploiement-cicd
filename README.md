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

