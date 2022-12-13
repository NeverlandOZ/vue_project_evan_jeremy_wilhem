/* Project by Evan Zanzucchi Wilhem Harat and Jeremy Sellam 13/12/2022 */

const app = Vue.createApp({
  data() {
    return {
      premium: true,
      pokeball: []
    }
  },
  methods: {
    updatePokeball(id) {
      this.pokeball.push(id)
    }
  }
})
