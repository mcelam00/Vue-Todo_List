<template>
    <div>
        <input type="checkbox" :id="id" :checked= "isDone" /> <!--SIEMPRE QUE HAYA QUE ASIGNAR A UN ATRIBUTO HTML UN JAVASCRIPT (algo que provenga de la parte script) SE USA EL :  -->
        <!-- <input type="checkbox" id="todo-item" checked="false" /> Para ligar el estado (atributo) del HTML con la propiedad que tenemos definida en la componente se usa la ligadura explicita que se expresa como v-bind: ó simplemente :  -->
        <label :for="id">{{label}}</label> <!--- Se usa el operador {{}} -->
        <!-- <label for="todo-item">My Todo Item</label>  En vez de un valor estático, vamos a poner el que le venga como parametro cuando se instancie la componente segun sus dos propiedades-->
    </div>
</template>

<!--Estamos creando un ejemplo en el que todos los elementos son constantes pero lo iremos mejorando
para conseguir que sirva como un molde, como una clase para todas las distintas tareas, sea genérico vaya-->

<!-- Creada la componente, tenemos que importarla y usarla en la componente principal App.vue y para eso tengo que importarla-->



<script>
import uniqueId from 'lodash.uniqueid'; //importo el generador de identificadores únicos


    export default { //añadimos al objeto una propiedad props
        props:{ //añadiremos dos propiedades con clave label y done
            label:{required: true, type: String}, //la primera propiedad es un objeto con dos propiedades, un boolean que indica si todas las instancias que se creen deben tener ese campo y la segunda el tipo de dato del campo
            done:{default: false, type: Boolean} //la primera es el valor por defecto porque como no es required obligatoriamente en caso de no pasarse se inicializa a falso
        },
    //Se settea en la propiedad done de arriba. Lo hacemos con la ligadura explicita que va a ligar la casilla de verificacion de HTML y el dato que hemos puesto
        data() { //el elemento de datos de vue, es parte del modelo de la componente pero tengo que ligarlo con la casilla de verificacion para que cuando la marque se mantenga.
            return {
            isDone: this.done,
            id : uniqueId('todo-') //doy un nombre a la variable dato local que pondré aquí en el apartado de html y el lado de la derecha no necesitamos llamarlo desde app, sino que simplemnte lo genera la funcion importada despues de la cadena comun que fijamos
                                    //tambien en el for que asocia el label con la checkbox como ya no es estatico tengo que ponerle el mismo dinamico que se le asigne al elemento input.
            };
        }
    };


</script>


<!-- La componente exporta SOLO las propiedades, no los datos. Por eso en esta clase/componente hacemos referencia a isDOne en template que es el dato y en App.vue a done, porque done es el nombre de la propiedad y sí se exporta, luego esa si se "ve" fuera-->



<style>

</style>

