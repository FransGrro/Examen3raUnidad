<template>
  <div>
      <h1>Agregar Auto</h1>
      <b-form @submit.prevent="guardarAuto()">
      <Input
        v-model="auto.au_modelo"
        id="au_modelo"
        titulo="Modelo"
        placeholder="Ingrese el modelo del auto"
        :maxlength="50"
        :error="erroresValidacion && !validacionModelo"
        mensajeError="Es necesario ingresar el modelo del auto"
        class="mb-2"
      />
      <Input
        v-model="auto.au_marca"
        id="au_marca"
        titulo="Marca"
        :maxlength="60"
        placeholder="Ingrese la marca"
        :error="erroresValidacion && !validacionMarca"
        mensajeError="Es necesario ingresar el modelo del auto"
        class="mb-2"
      />
      <Input
        v-model="auto.au_año"
        id="au_año"
        titulo="Año del modelo"
        :type="Number"
        :maxlength="4"
        :error="erroresValidacion && !validacionAño"
        placeholder="Ingrese el año del modelo"
        mensajeError="Es necesario ingresar el año del modelo"
        class="mb-2"
      />
      <Input
        v-model="auto.au_color"
        id="au_color"
        titulo="Color del auto"
        :maxlength="20"
        placeholder="Ingrese el color del auto"
        class="mb-2"
      />
      <b-button type="submit" class="mt-2" variant="primary">Guardar</b-button>
    </b-form>
    <notifications group="foo" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Input from "../components/Input";
export default {
    name: "Agregar",
    components: {
        Input,
    },
    data(){
        return{
            auto:{
                au_modelo:"",
                au_marca:"",
                au_año:"",
                au_color:""
            },
            erroresValidacion: false
        }
    },
    computed: {
        validacionModelo(){
            return(
            this.auto.au_modelo !== undefined && this.auto.au_modelo.trim() !== ""
            )
        },
        validacionMarca(){
            return(
                this.auto.au_marca !== undefined && this.auto.au_marca.trim() !== ""
            )
        },
        validacionAño(){
            return(
                this.auto.au_año !== undefined && this.auto.au_año.length == 4
            )
        },
    },
    methods:{
        ...mapActions(["crearAuto"]),
        guardarAuto(){
            if(this.validacionModelo && this.validacionMarca && this.validacionAño){
                this.erroresValidacion = false;
                this.crearAuto({
                    params: this.auto,
                    onComplete:(response) => {
                            console.log(response.data);
                        this.$notify({          //No funcionan las notificaciones unu
                            type: 'success', 
                            title: response.data.mensaje,
                        });
                        this.$router.push({
                            name: 'VerAutos'
                        })
                    },
                    onError: (error) => {
                        console.log(error.response.data.mensaje);
                        this.$notify({
                            type: 'error', 
                            title: error.response.data.mensaje,
                        });
                    },
                });
            }else{
                this.erroresValidacion = true;
            }
        }
    }
}
</script>

<style>

</style>