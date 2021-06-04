<template>
  <div>
      <h1>Autos</h1>
    <b-button variant="primary" to="/agregar">Agregar auto</b-button>
    <Table :items="autos" :fields="campos"/>
  </div>
</template>

<script>
import Table from "../components/Table";
import { mapState, mapActions } from "vuex";
export default {
    name: "VerAutos",
    components:{
        Table
    },
    data(){
        return{
            campos:[
                {key:"au_id", label: "Id"},
                {key: "au_modelo", label: "Modelo"},
                {key: "au_marca", label: "Marca"},
                {key: "au_año", label: "Año"},
                {
                    key: "au_color",
                    label: "Color",
                    formatter: (value) => {
                    return value || "Sin datos";
                    }
                }
            ]
        }
    },
    methods:{
        ...mapActions(["setAutos"])
    },
    computed:{
        ...mapState(["autos"])
    },
    created(){
        this.setAutos();
    }
}
</script>

<style>

</style>