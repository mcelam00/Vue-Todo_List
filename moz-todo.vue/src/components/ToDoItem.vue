<template>
    <div>
        <input type="checkbox" id="todo-item" checked="false" />
        <label for="todo-item">{{label}}</label> <!--- Se usa el operador {{}} -->
        <!-- <label for="todo-item">My Todo Item</label>  En vez de un valor estático, vamos a poner el que le venga como parametro cuando se instancie la componente segun sus dos propiedades-->
    </div>
</template>

<!--Estamos creando un ejemplo en el que todos los elementos son constantes pero lo iremos mejorando
para conseguir que sirva como un molde, como una clase para todas las distintas tareas, sea genérico vaya-->

<!-- Creada la componente, tenemos que importarla y usarla en la componente principal App.vue y para eso tengo que importarla-->



<script>
    export default { //añadimos al objeto una propiedad props
        props:{ //añadiremos dos propiedades con clave label y done
            label:{required: true, type: String}, //la primera propiedad es un objeto con dos propiedades, un boolean que indica si todas las instancias que se creen deben tener ese campo y la segunda el tipo de dato del campo
            done:{default: false, type: Boolean} //la primera es el valor por defecto porque como no es required obligatoriamente en caso de no pasarse se inicializa a falso
        }
    };
</script>






<style>

</style>

