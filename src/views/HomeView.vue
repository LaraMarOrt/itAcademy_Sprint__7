<template>
  <div>
    <div class="container d-flex">

      <b-form id="proforma" @submit="onSubmit">

        <b-form-group id="input-group-1" label="Presupuesto:" label-for="input-1">
          <b-form-input id="input-1" v-model="presupuesto" placeholder="Asigna un nombre al presupuesto" required>
          </b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Cliente:" label-for="input-2">
          <b-form-input id="input-2" v-model="cliente" placeholder="Escribe el nombre de la empresa" required>
          </b-form-input>
        </b-form-group>

        <h4>¿Qué quieres hacer?</h4>

        <div v-for="(opcion, index) in opciones" :key="index">
          <label>
            <!-- <input type="checkbox" :id="opcion.id" :value="opcion.valor" v-model="checked" @change="sumar" /> -->
            <input type="checkbox" :id="opcion.id" :value="opcion.valor" v-model="checked" />
            {{ opcion.texto }}
          </label>

          <div v-if="(opcion.id == 1) & Array.prototype.includes.call(checked, opcion.valor)">
            <Panel v-model:numPag="nPaginas" v-model:numIdi="nIdiomas" />
          </div>
        </div>

        <h4>Precio: {{ sumar }} €</h4>

        <b-button type="submit" variant="danger">Guardar</b-button>
      </b-form>

      <PressupostList v-if="presupuestoListado.length > 0" :desglosePresupuesto="presupuestoListado">
      </PressupostList>

    </div>
    <div class="link">
      <router-link to="/">Volver</router-link>
    </div>
  </div>

</template>

<script>
import Panel from "../components/Panel.vue";
import PressupostList from "../components/PressupostList.vue";

export default {
  name: "Home",
  components: {
    Panel,
    PressupostList
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
      nIdiomas: 1,
      presupuesto: "",
      cliente: "",
      presupuestoListado: []
    };
  },
  computed: {
    sumar: function () {
      this.total = this.checked.reduce((a, b) => a + b, 0);

      if (Array.prototype.includes.call(this.checked, this.opciones[0].valor)) {
        this.total += this.nPaginas * this.nIdiomas * 30;
        console.log(this.nPaginas);
      }
      return this.total;
    }
  },
  methods: {
    onSubmit() {
      this.presupuestoListado.push({
        presupuesto: this.presupuesto,
        cliente: this.cliente,
        total: this.sumar
      });
      this.presupuesto = "";
      this.cliente = "";
      this.checked = [];
      this.nPaginas = 1;
      this.nIdiomas = 1;
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

.link {
  margin-top: 2em;
}
</style>
