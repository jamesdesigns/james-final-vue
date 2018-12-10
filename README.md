# james-final-vue

## TeamUp | Building a Team 
https://inspiring-bassi-b7efe0.netlify.com/#/

## Required Documents
This is all the requirements for the Final Vue Project.
It is a simple app that helps you build a team based on members who sign up and login to the application. You will find all the relevant documentation that was included to make this app in this README file.

### 1. Conditional logic and array methods render large lists
As far as implementing all the conditional logic and array methods, which include rendering large lists, you can find the code to this on the following pages:

Conditional Logic and Array Methods: [Conditional Logic and Array Methods](https://github.com/jamesdesigns/james-final-vue/blob/master/src/views/Home.vue)

More Logic: [More Logic](https://github.com/jamesdesigns/james-final-vue/blob/master/src/views/Members.vue)



### 2. Code encapsulated as single-file components
All the code has been encapsulated and reside in single-file components.

### 3. Code created and managed with real development tools
This entire application has been created and managed with real development tools such as, Vuetify, axios, vuelidate, vuex, and more. 

### 4. Properly used Git with 4 days of commits per week
All my activity can be seen on my main GitHub account. 


### 5. Component communication
Used props to communicate a message on the Home.vue page (The message: "Build a Team". Located on the Home page.) from the HelloWorld.vue page. You can view where the props is set up here:

Component Communication: [Component Communication](https://github.com/jamesdesigns/james-final-vue/blob/master/src/components/HelloWorld.vue)

### 6. User input form with validation
For User Input with form validation, I used this for the Login Page of the applicaiton.
The v-model was used to output the form as the user fills it out. You can find all the necessary code that relates to the form on the following link.

[Form Validation](https://github.com/jamesdesigns/james-final-vue/blob/master/src/views/Login.vue)

### 7. Custom directive developed and used
Custom directives are used to create the bottom footer on each page of this application. 
You can find the custom directive in the main.js file on line 13-30

[Custom Directive](https://github.com/jamesdesigns/james-final-vue/blob/master/src/main.js) 

### 8. Animation(s) and Transition(s) used
Used the Animate.css for all the page titles on each page. The animation is called bounceIn. You can view this on each page: Home.vue,Login.vue, and About.vue. It is located on the top inside a header tag.

The Transition is implemented in the Header.vue. You can see the following code here:

[Transition](https://github.com/jamesdesigns/james-final-vue/blob/master/src/components/Header.vue)

### 9. App connects to a server using HTTP
This app is connecting to the UInames.com api. You can find this on the Members.vue page and the Home.vue page

Members:
[Connecting to the API](https://github.com/jamesdesigns/james-final-vue/blob/master/src/views/Members.vue)

Home:
[Connecting to the API](https://github.com/jamesdesigns/james-final-vue/blob/master/src/views/Home.vue)

### 10. At least 3 routes provided
In this application I have used 4 routes. Home, Members, About, and Login.
This involves the file router.js. 

[Router JS File](https://github.com/jamesdesigns/james-final-vue/blob/master/src/router.js)

Setting up the 4 routes also resides in the Header.vue, where this sets up the entire menu navigation

[Header Component](https://github.com/jamesdesigns/james-final-vue/blob/master/src/components/Header.vue)

### 11. State managed using Vuex
For this task, I set up the login form to output the Username/Game Experience Level/Player's Needed to show up in the footer. You can see this on each page of the application on the bottom of the browser.

[State Managed using Vuex](https://github.com/jamesdesigns/james-final-vue/blob/master/src/store.js)

### 12. App structured, documented, and deployed
This README file and the Netlify Link located on the top of this file shows all the code,structure, and everything that is involved with this project.



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
