import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Summary from "./views/Summary.vue";
import Remote from "./views/Remote";
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
      path: "/summary",
      name: "summary",
      component: Summary
    },
    {
      path: "/remote",
      name: "remote",
      component: Remote
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }

  ]
});
