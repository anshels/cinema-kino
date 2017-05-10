![Cinema Star](https://github.com/anshels/cinema-kino/blob/master/assets/readme_img.PNG)

# Cinema Star
> Best site for movie fans.

##  Features
- React front-end
- ExpressJS server with MongoDB for data storage
- Login and register functionality
- Access only for registered users
- Search results update instantly
- Favorite movie
- Movie carousel
- Comments update instantly

## How to setup local environment
- Install NodeJS un NPM
- Install MongoDB
 >[https://www.mongodb.com/download-center#community](https://www.mongodb.com/download-center#community)

- Run ```npm install```
- Run ```npm webpack-client``` and ```npm run webpack-server```
- Run mongoDB server with ```--dbpath``` of the ```db/``` folder in project root
> mongod.exe --dbpath path\to\project\mongodb

- Run ```node DB.js``` to initialize the mongoDB
- Run ```npm run start```
- Visit the site on ```localhost:8080```

## Tehnologies used
- ReactJS
- Webpack
- MongoDB
- ExpressJS(NodeJS)
