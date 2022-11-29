<template>
  <div class="sub-form">
    <div>
      <label>Número de páginas
        <b-button variant="danger" :disabled="numPag > 1 ? false : true" @click="$emit('update:numPag', --numPag)">-
        </b-button>
        <input class="check-input" type="number" @input="$emit('update:numPag', $event.target.value)" :value="numPag">
        <b-button variant="danger" @click="$emit('update:numPag', ++numPag)">+</b-button>
        <b-button v-b-modal.paginas>ⓘ</b-button>
        <b-modal id="paginas" hide-Backdrop="true" hide-header="true" hide-footer="true">En este componente se deberá
          indicar el número de páginas que tendrá la web</b-modal>
      </label>
    </div>

    <div>
      <label>Número de idiomas
        <b-button variant="danger" :disabled="numIdi > 1 ? false : true" @click="$emit('update:numIdi', --numIdi)">-
        </b-button>
        <input class="check-input" type="number" @input="$emit('update:numIdi', $event.target.value)" :value="numIdi">
        <b-button variant="danger" @click="$emit('update:numIdi', ++numIdi)">+</b-button>
        <b-button v-b-modal.idiomas>ⓘ</b-button>
        <b-modal id="idiomas" hide-Backdrop="true" hide-header="true" hide-footer="true">En este componente se deberá
          indicar el número de idiomas que tendrá la web</b-modal>
      </label>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'Panel',
  props: [
    'numPag',
    'numIdi'
  ],
  emits: ['update:numPag', 'update:numIdi']
}
</script>

<style>
.btn-danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
  margin-left: 1rem;
  margin-right: 1rem;
}

label {
  margin: 0.3rem;
}

.check-input {
  width: 2em;
  height: 2em;
  margin-top: 0.25em;
  text-align: center;
  vertical-align: top;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 1px solid rgb(255, 255, 255);
}

.sub-form {
  margin-left: 2rem;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>