<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"/>
      <List2 :todos="todos" :deleteTodo="deleteTodo"/>
      <Footer :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'
  import List2 from './components/List2'
  import Footer from './components/Footer'


  export default {
    data(){
      return{
        todos:[
          {title:'吃饭',complete:false},
          {title:'睡觉',complete:true},
          {title:'coding',complete:false}
        ]
      }
    },
    components:{
      Header,List2,Footer
    },
    methods:{
      addTodo(todo){
        this.todos.unshift(todo)
      },
      deleteTodo(index){
          this.todos.splice(index,1)
      },

      deleteCompleteTodos(){
       this.todos=this.todos.filter(todo=>!todo.complete)
      },

      selectAllTodos(Check){

        this.todos.forEach(todo=>todo.complete=Check)
      }
    }
  }
</script>

<style scoped>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
