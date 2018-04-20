A template project will use [expressjs](http://expressjs.com/) as backend
and [AdminLTE](https://github.com/almasaeed2010/AdminLTE/) as theme.

> I have try [ReactJS-AdminLTE](https://github.com/booleanhunter/ReactJS-AdminLTE), but it did not work in this project. it try to import another react again.

This project is based on [react-starter-kit](https://github.com/kriasoft/react-starter-kit)

## Usage:

clone from github
`git clone https://github.com/imhazige/expressjs-adminlte-project-template.git`
install yarn if need `npm install --global yarn`
cd to the folder
develop run `yarn start`
release run `yarn start -- --release`
build run `yarn run build -- --release`

More usage refer to [react-starter-kit start guid](https://github.com/kriasoft/react-starter-kit/blob/master/docs/getting-started.md) and [doc list](https://github.com/kriasoft/react-starter-kit/tree/master/docs)

## Define client side navigate page

see src/routes/index.js
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

## Problems need take care

## import css in css will have problem if there are relative resource.

If you import external CSS file from your internal CSS then it will be inlined and processed with CSS modules.
instead, you should import css from js

## comment style in css file will cause show css imported from js as content

for example /_ <style src="bootstrap/dist/css/bootstrap.css"></style> _/
