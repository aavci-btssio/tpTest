<script setup>
import { useRoute } from 'vue-router'

// Ici je recupère mon routeur pour l'utiliser 
const route = useRoute()

// Je récupère les paramètres stockés dans l'objet route.params
const nom = route.params.nom
const prenom = route.params.prenom
const classe = route.params.classe
</script>

<template>
  <h1>Accueil</h1>

  <p>Nom : {{ nom }}</p>
  <p>Prénom : {{ prenom }}</p>
  <p>Classe : {{ classe }}</p>
  
</template>
