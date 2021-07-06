<template>
  <div class="page1">
    <h1></h1>
    <h1>{{message}}</h1>
    <input type="text" v-model="inptext" placeholder="入力">
    <h3>{{inptext}}</h3>
    <button @click="clear()">clear</button>
    <br>
    <input type="text" placeholder="todo input" v-model="nowTodo">
    <button @click="appendTodo()">APPEND</button>
    <div class="todoTable">
      <table class="table">
        <thead>
          <tr>
            <th>number</th>
            <th>内容</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="todo in todos" :key="todo.index">
            <td>{{todo.index}}</td>
            <td>{{todo.item}}</td>
            <td><input type="checkbox" v-model="todo.checkBox"></td>
            <td>{{todo.checkBox}}</td>
            <td><button class="destroy" @click="removeTodo(todo)">remove</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page1',
  props: {
    msg: String
  },
  data(){
    return {
      message: "Hello World!!",
      inptext: "",
      todos: [],
      nowTodo: "",
      count: 0
    }
  },
  methods:{
    clear(){
      this.inptext = ""
    },
    appendTodo(){
      if(this.nowTodo=="")return;
      const todo = {
        item: this.nowTodo,
        index: this.count,
        checkBox: false
      };
      this.todos.push(todo)
      this.nowTodo = ""
      this.count++
    },
    removeTodo(todo){
      if(todo.checkBox===true){
        this.todos.splice(this.todos.indexOf(todo),1)
      }
      else{
        alert("その仕事はまだ完了していません！ index:["+todo.index+"]")
      }
    }
  },
  watch: {

  }
}
</script>

<style>
.todoTable{
  margin: 0 auto;
  background-color: aqua;
}
.table{
  text-align: center;
  margin: 0 auto;
  padding-bottom: 100px;
}
</style>