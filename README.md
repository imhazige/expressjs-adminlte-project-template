A template project will use [expressjs](http://expressjs.com/) as backend
and [ReactJS-AdminLTE](https://github.com/booleanhunter/ReactJS-AdminLTE) as frontend.

This project is based on [react-starter-kit](https://github.com/kriasoft/react-starter-kit)

## Usage:  
clone from github 
```git clone https://github.com/imhazige/expressjs-adminlte-project-template.git```  
install yarn if need ```npm install --global yarn```  
cd to the folder  
develop run ```yarn start```  
release run ```yarn start -- --release```  
build run ```yarn run build -- --release```  

More usage refer to [react-starter-kit start guid](https://github.com/kriasoft/react-starter-kit/blob/master/docs/getting-started.md) and [doc list](https://github.com/kriasoft/react-starter-kit/tree/master/docs)

## Define client side navigate page
in folder src/routes define page with the page name as a subfolder, need a index.js as a main script and include the component under the same folder or in the component folder do the rendering.

## Define React Component
in folder src/component, define a component with a named folder, must include a package.json 

## Static assets
in folder public

## Server side config
in the code src/config.js

## Database
connect with [sequelize](http://docs.sequelizejs.com/) src/data/sequelize.js  
sequelize model defined under src/data/models







