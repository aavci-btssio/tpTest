import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {

  // STATE
  const count = ref(0)

  // GETTERS
  const double = computed(() => count.value * 2)

  // ACTIONS
  function increment() {
    count.value++
  }

  function reset() {
    count.value = 0
  }

  return { count, double, increment, reset }
})
