# agily-technical-test

[![Netlify Status](https://api.netlify.com/api/v1/badges/dcc55c2c-6218-4b64-8b75-1f51dc25321d/deploy-status)](https://app.netlify.com/sites/agily-technical-test-mexane-delcroix/deploys)
![CI](https://github.com/kilehynn/agily-technical-test/actions/workflows/ci.yml/badge.svg)

## Introduction

Ce projet est un test technique pour Agily. Il a également été une occasion de mettre en pratique les cours de VueJS de
MTI pour la première fois dans un vrai projet.
J'ai également eu l'opportunité de découvrir NuxtJS, qui est un framework VueJS qui permet de créer des applications
SSR (Server Side Rendering), Axios et le déploiment sur Netlify.

Le but de ce projet est de créer une web app permettant d'afficher la météo d'une ville donnée pour les 7 prochains
jours.

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Découpage du projet en temps

* Création du projet avec NuxtJS : 45min - 1h
* Ajout de Netlify, CI, CD : 1h
* Création de la page d'accueil : 1h
* Redirection après la saisie de la ville : 10min
* Récupération des données de l'API : 1h30
  * Tentative de faire une requête avec Axios : 30min
* Mise en forme des données : 2h30
  * Recherche d'une API pour récupérer les images en fonction de la ville : 30min
  * Revision de la création de composants VueJS : 30min

## Difficultés rencontrées et retours

Lors de ce projet, je n'ai pas vraiment vu de principe à implémenter que ça soit, car il s'agit seulement d'un projet de
front-end ou bien, parce que le projet est assez petit. J'ai donc pu me concentrer sur la mise en place de l'application
et
sur la mise en forme des données.

J'ai eu quelques difficultés avec Axios, qui est une librairie permettant de faire des requêtes HTTP. J'ai eu du mal à
comprendre comment l'utiliser correctement avec Nuxt malgré la documentation, ce qui fait que finalement je suis
repassée
sur la méthode fetch() qui est fournie par défaut avec Nuxt.

Néanmoins, j'essaierai de me pencher sur Axios pour voir si je peux l'utiliser dans un futur projet.

Pour l'implémentation, j'ai essayé d'utiliser le plus possible les composants de Nuxt pour la mise en forme de la page
de la ville afin de simplifier le code et de le rendre plus lisible. J'ai aussi essayé de profiter de mon utilisation du
SCSS pour créer des variables pour les couleurs et de généraliser une partie du style pour simplifier la modification du
code.

Un des plus gros problèmes que j'ai rencontrés est avec la maquette. En effet, la maquette n'était pas très claire sur
certains points, notamment sur tout ce qui est relatif aux espacements et aux tailles. J'ai donc dû faire des
approximations afin de rendre le plus proche possible de la maquette.
