import { createRouter, createWebHistory } from 'vue-router';

// faccio l'import di tutti i componenti che utilizzerò come pagina
import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import ProjectsIndex from './pages/ProjectsIndex.vue';

const router = createRouter({
    history: createWebHistory(),

    routes: [

        {
            path: '/',
            name: 'home',
            component: AppHome,
        },

        {
            path: '/about-us',
            name: 'about',
            component: AppAbout,
        },
        
        {
            path: '/projects',
            name: 'projects.index',
            component: ProjectsIndex,
        },
    ],
});

export { router };