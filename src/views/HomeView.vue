<template>
  <div>
    <h2>¿Qué quieres hacer?</h2>

    <div v-for="(opcion, index) in opciones" :key="index">
      <label>
        <!-- <input type="checkbox" :id="opcion.id" :value="opcion.valor" v-model="checked" @change="sumar" /> -->
        <input type="checkbox" :id="opcion.id" :value="opcion.valor" v-model="checked" />
        {{ opcion.texto }}</label>

      <div v-if="(opcion.id == 1) & Array.prototype.includes.call(checked, opcion.valor)">
        <Panel v-model:numPag="nPaginas" v-model:numIdi="nIdiomas" />
      </div>
    </div>

    <h3>Precio: {{ sumar }} €</h3>
    <router-link to="/">Volver</router-link> 
  </div>
</template>

<script>
import Panel from "../components/Panel.vue";

export default {
  name: "Home",
  components: {
    Panel,
  },
  data() {
    return {
      opciones: [
        {
          id: "1",
          texto: "Una página web (500€)",
          valor: 500,
        },
        {
          id: "2",
          texto: "Una consultoría SEO (300€)",
          valor: 300,
        },
        {
          id: "3",
          texto: "Una campaña Google Ads (200€)",
          valor: 200,
        },
      ],
      checked: [],
      total: 0,
      nPaginas: 1,
      nIdiomas: 1
    };
  },

  computed:{
    sumar: function() {
      this.total = this.checked.reduce((a, b) => a + b, 0);
      
      if (Array.prototype.includes.call(this.checked, this.opciones[0].valor)) {
        this.total += this.nPaginas * this.nIdiomas * 30;
        console.log(this.nPaginas);
      }
      return this.total;
    }
  }
};
</script>

<style scoped>
  input {
    margin: 1em;
  }

  h2 {
    margin-bottom: 1em;
  }

  h3 {
    margin-top: 1em;
    margin-bottom: 1em;
  }
</style>
