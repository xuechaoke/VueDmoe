<template>
    <div>
        <p class="msg">{{msg}}</p>
    </div>
</template>

<script>
//向外默认暴露一个配置对象，固定写法
export default {
    //data  可以写对象， 也可以写函数， 但是在组件里面必须写函数
    data (){
        return {
            msg: "Hello Vue 更换为IDEA 编辑器"
        }
    }
}
</script>

<style>

    .msg{
      color: cadetblue
    }
</style>

