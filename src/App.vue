<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComment="addComment"/>
      <List :comments="comments" :deleteComment="deleteComment"/>
    </div>
  </div>

</template>

<script>
  //引入组件
  import Add from './components/add'
  import List from './components/list'

  export default {
    data (){
      return{
        comments: [
          {name: 'ciao',content: "so easy"},
          {name: "xue", content:"just so so"},
          {name: "chaoke", content: "Vue's interesting"},
        ]
      }
    },
    methods:{
      addComment(comment){
        this.comments.unshift(comment);
      },
      deleteComment(index){
          this.comments.splice(index,1)
      }
    },
    components: {
      Add, List
    }
  }
</script>

<style>

</style>
