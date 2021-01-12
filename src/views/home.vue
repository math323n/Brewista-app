<template>
  <div class="home">
    <img src="../assets/logo.png" alt="Vue Logo" />
    <hello-world msg="Hello Vue 3.0 + Vite" />
  </div>
  <div class="todos">
    <div
      @dblclick="onDblClick(todo)"
      v-for="todo in allTodos"
      :key="todo.id"
      class="todo"
      v-bind:class="{ 'is-complete': todo.completed }"
    >
      {{ todo.title }}
      <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
    </div>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    onDblClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };
      this.updateTodo(updTodo);
    },
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  },
};
</script>