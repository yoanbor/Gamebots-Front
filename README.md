# Présentation

**Gamebots** est une plateforme permettant aux participants d'interagir avec une IA pour discuter de jeux vidéo.

Ce projet représente notre fil rouge dans le cadre de la formation Concepteur Développeur d'Applications que nous
suivons chez Simplon Valenciennes.

Ce repository contient le frontend et les maquettes de notre application.

Pour le backend, la conception ainsi que la base de données, consultez le repository GitHub
suivant : [Gamebots-Back](https://github.com/yoanbor/Gamebots-Back.git).

# Technologies

## Langages

Nous avons utilisé les langages suivants :

- Vite
- React
- Sass

## Sécurité

Pour assurer la sécurité, nous avons mis en place des tests unitaires et des tests d’intégration. Nous avons utilisé :



Nous avons également employé Eslint, Prettier et Snyk pour tester et garantir la qualité du code.

## CI / CD

Nous avons créé des images Docker pour le backend et le frontend en rédigeant les Dockerfiles correspondants. La
vérification de la qualité et des tests de notre application, ainsi que la création et l'envoi des images Docker sur
DockerHub, sont automatisés grâce à des GitHub Actions appliquées à la branche `develop` de nos repositories.

## Conteneurisation

Un fichier `docker-compose.yml` a été configuré dans le backend pour conteneuriser :

- SonarQube
- La base de données PostgreSQL
- PGAdmin
- Les images du frontend et du backend récupérées depuis DockerHub

# Architectures

Le projet utilise une architecture n-tiers se décomposant en trois parties :

- **Frontend** 
- **Backend** (disponible dans le repository Backend)
- **Base de données** (disponible dans le repository Backend)

Le frontend est également divisé en plusieurs parties :

- **Présentation** : contient les controllers, qui sont le point d’entrée de l’application
- **Business** : inclut les DTO et
  la logique métier de chaque page
- **Pages** : dossier contenant toutes pages de l'application
- **Components** : dossier contenant des composants réutilisables pour des pages de l'application
- **models** : dossier contenant les dto de l'application
- **styles** : dossier contenant le style css, les fonts et les icons de l'application





# Déploiement

Pour lancer le projet, suivez les étapes ci-dessous :

1. Clonez le repository :
   ```bash
   git clone https://github.com/yoanbor/Gamebots-Front.git
   ````

2. Installer les dépendances :
   ```bash
    npm install
   ````

3. Lancez le serveur local' :
   ```bash
    npm run dev
   ````

Le frontend est disponible à cette adresse : http://localhost:5173/

# Auteurs

👤 **_Yoan Bor_**

<a href="https://github.com/yoanbor"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></img></a>
<a href="www.linkedin.com/in/yoan-bor"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></img></a>

👤 **_Florian Poteau_**

<a href="https://github.com/florianpoteau"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></img></a>
<a href="https://www.linkedin.com/in/florian-poteau-63a9a71a1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BABLcIT06SJ2grEBJmU4AFg%3D%3D"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></img></a>
