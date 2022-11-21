<template>
  <div class="sub-form">
    <div>
      <label>Número de páginas
        <!-- <b-button class="danger" v-if="numPag>1" @click="$emit('update:numPag', --numPag)">-</b-button> -->
        <!-- <button class="btn-danger" v-if="numPag>1" @click="$emit('update:numPag', --numPag)">-</button> -->
        <button class="btn-danger" :disabled="numPag>1 ? false : true" @click="$emit('update:numPag', --numPag)">-</button>
        <input class= "form-check-input" type="number" @input="$emit('update:numPag', $event.target.value)" :value="numPag">
        <button class="btn-danger" @click="$emit('update:numPag', ++numPag)">+</button>        
      </label>
    </div>
    <div>
      
      <label>Número de idiomas
        <button class="btn-danger" :disabled="numIdi>1 ? false : true" @click="$emit('update:numIdi', --numIdi)">-</button>
        <input class= "form-check-input" type="number" @input="$emit('update:numIdi', $event.target.value)" :value="numIdi"></label>
        <button class="btn-danger" @click="$emit('update:numIdi', ++numIdi)">+</button>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'Panel',
  props:[
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

.form-check-input {
  width: 5em;
  height: 2em;
  margin-top: 0.25em;
  vertical-align: top;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 1px solid rgba(0, 0, 0, 0.25);
}

.sub-form {
  margin-left: 2rem;
}
</style>