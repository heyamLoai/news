import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import LogIn from "../views/SignIn.vue";
import Register from "../views/SignUp.vue";
import Category1 from "../views/Category1.vue";
import Category2 from "../views/Category2.vue";



const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/logIn",
    name: "logIn",
    component: LogIn,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/category1",
    name: "category1",
    component: Category1,
  },
  {
    path: "/category2",
    name: "category2",
    component: Category2,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
