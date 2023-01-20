# Meteor + Vue3 + Vite

This is a simple example of how to use Vue3 with Meteor.

## How to use

1. Clone this repo
2. Run `meteor npm install`
3. Run `meteor`
4. Open `http://localhost:3000` in your browser

## Libraries used

- [Vue3](https://v3.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Vue Router](https://next.router.vuejs.org/)
- [Meteor](https://www.meteor.com/)
- [Vue Meteor Tracker](https://github.com/meteor-vue/vue-meteor-tracker)
- [Tailwind CSS](https://tailwindcss.com/)


## Reproduce the error in a new project
1. Run `meteor create fetch-test --vue`
2. cd into fetch-test
3. Run `meteor npm install`
4. Run `meteor add fetch`
5. Edit /imports/api/links.js
    Add `import {fetch, Headers} from 'meteor/fetch'` on top of the document
    Add `const header = new Headers();` inside Meteor.publish()
    (it doesn't matter where you place the line just make sure it will run)
6. Run `meteor`
