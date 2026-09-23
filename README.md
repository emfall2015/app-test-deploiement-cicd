# Application de démonstration — Déploiement & CI/CD

Petite application volontairement imparfaite utilisée comme support pédagogique.

Elle contient :

- un frontend Angular ;
- un backend Node.js / Express ;
- un faux système de connexion ;
- une "base de données" sous forme de fichier JSON ;
- une route `/api/info` reposant sur une fonction métier ;
- un test unitaire de cette fonction.

> Cette application est destinée à un exercice de formation. Elle n'est pas conçue pour être sécurisée ni utilisée en production.

## Prérequis

- Node.js 22 ou 24 recommandé
- npm

## Démarrer le backend

```bash
cd backend
npm install
npm start
```

Le backend écoute sur : `http://localhost:3000`

Pour lancer les tests :

```bash
npm test
```

## Démarrer le frontend

Dans un second terminal :

```bash
cd frontend
npm install
npm start
```

Ouvrir ensuite : `http://localhost:4200`

## Comptes de démonstration

- `alice` / `password`
- `bob` / `1234`
- `admin` / `admin`
