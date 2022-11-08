import {createRouter, createWebHistory} from "vue-router";
import vendorContactDetailsRoutes from "./routes/vendorContactDetails-routes.js";


const route = [];
const routes = route.concat(vendorContactDetailsRoutes)
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})



export default router