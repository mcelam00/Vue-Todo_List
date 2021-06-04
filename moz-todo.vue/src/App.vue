<template>
  <div id="app">
    <h1>To-Do list</h1>
    <ul>
      <li>
        <to-do-item label="My ToDO Item" :done= false ></to-do-item> <!-- Aqui ponemos la contraparte de la funcion data que sería el done con la ligadura para que se tome como un bolean y no como un string -->
      </li>
    </ul>
   <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> --><!-- esto es una componente que importamos en la segunda parte-->
  </div>
</template>

<!--Para que se renderice la componente hay que llamar al elemento correspondiente dentro de template.
El nombre del elemento es igual pero poniendo - entre los espacios (kebab-case)-->




<script>
import ToDoItem from './components/ToDoItem.vue';

export default { //hay que añadir el elemento components para registrarla
  name: 'app',
  components: {
    ToDoItem
  }
};
/*import HelloWorld from './components/HelloWorld.vue' //importamos el  helloworld que es una componente que hemos usado en el template

export default { //exportamos la componente. Esto setea el nombre de la componente a App
  name: 'App',
  components: {
    HelloWorld //y registramos la componente HelloWorld añadiendola a la propiedad de las componentes
    //esto significa que se registra localmente y solo se puede usar dentro de la componente en la que se registra
    //habria que importar y registrar la componente Helloworld en este caso en cada otro archivo componente que la use. 
  }
}*/
</script>

<!-- Todo el código que no vemos en ésta componente está en la Helloworld es como si la incluyesemos aqui-->

<!-- Nuestra página va tener que contar con distintas componentes, hacer un diseño de componentes y de que se encarga cada una-->

<!-- Las componentes pueden tener propiedades y se pueden inicializar. Podemos tener una componente para cada tarea siendo las tareas distintas y tendriamos una instancia de la componente
Las componentes se renderizan, se mandan a la pagina, se visualizan, pueden o no estar visualizandose (renderizaar)-->


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


<!--esta es la componente principal, como si fuera la clase principal por donde comienza la entrada a la
aplicacion.
Estructura compartida de 3 partes por todas las componentes
Hay tres partes, la parte de HTML que es el template, iría el codigo html ampliado con las cosas de vue
En la segunda es el codigo javascript que se usa en esta componente
Por último la parte de estilo que es CSS, en VUE se mantienen separados los modulos que hacen la app y son las componentes y se haran en ellas las tareas-->