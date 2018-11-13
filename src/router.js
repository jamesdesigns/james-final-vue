import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Members from "./views/Members";
import Login from "./views/Login";



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/members",
      name: "members",
      component: Members
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }

  ]
});
