import Accueil from '@/pages/Accueil.vue'
import Presentation from '@/pages/Presentation.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Route classique vers la page présentation : "/" (ou route par défaut)
    {
      path: '/',
      name: 'Presetation',
      component: Presentation
    },
    // Route vers la page d'accueil, avec les paramètres
    {
      path: '/accueil/:nom/:prenom/:classe',
      name: 'AccueilParams',
      component: Accueil
    }
  ],
})

export default router
