<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Ici je recupère mon routeur pour l'utiliser pour la redirection
const router = useRouter()
const nom = ref('')
const prenom = ref('')
const classe = ref('')

function envoyerFormulaire() {
    // Ici avec la méthode push, je redirige vers ma page, avec les paramètres
  router.push({
    name: 'AccueilParams',
    params: {
      nom: nom.value,
      prenom: prenom.value,
      classe: classe.value
    }
  })
}
</script>

<template>
  <h1>Formulaire</h1>

  <form @submit.prevent="envoyerFormulaire">
    <input v-model="nom" placeholder="Nom" />
    <input v-model="prenom" placeholder="Prénom" />
    <input v-model="classe" placeholder="Classe" />
    <button type="submit">Valider</button>
  </form>
</template>
