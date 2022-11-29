<template>
    <div class="flex-column presupuestos">
    <div>
        <h2>Listado de presupuestos:</h2>
        <div v-for="(pressupost, index) in desglosePresupuesto" :key="index">
            <ul> Detalle del presupuesto: {{pressupost.presupuesto}}
            <li>Cliente: {{pressupost.cliente}}</li>
            <li>Total presupuesto: {{pressupost.total}}</li>
            </ul>
        </div>
    </div>
    </div>

</template>

<script>
export default {
name: 'PressupostList',
props: {
    desglosePresupuesto: Array
},

data() {
}
}
</script>

<style>
    .presupuestos {
        margin-left: 5em;
    } 
</style>