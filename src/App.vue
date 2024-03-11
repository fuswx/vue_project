<template>
  <div>
    <Header></Header>

    <!--  路由组件出口的地方  -->
    <router-view></router-view>
    <!--  在Home、Search显示的，在登录、注册时隐藏  -->
    <!--<Footer v-show="$route.path==='/home'||$route.path==='/search'"></Footer>-->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
//引入
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: 'App',
  components:{
    Header,
    Footer
  }
}
</script>

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
