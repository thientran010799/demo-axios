<template>
  <div id="app">
    <app-header v-if="isRenderHeader"/>
    <!-- MAIN -->
    <div class="container">
      <router-view></router-view>
    </div>
     <app-footer v-if="isRenderFooter"/>
     <loading :isLoading="isLoading"/>
     
  </div>
</template>

<script>
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {mapState} from 'vuex'
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import HomePage from './pages/UserProfile.vue';
import Loading from './components/Loading.vue'
export default {
  components: { HomePage, AppHeader, AppFooter, Loading },
  name: "app",
  data() {
    return {
      
    };
  },
  computed:{
  ...mapState(['listPosts', 'isLoading']),
  isRenderHeader(){
    let arrRouter =['login', 'register'];
    let Yes_arrRouterName = arrRouter.indexOf(this.$route.name);
    if(Yes_arrRouterName != -1) return false;
    return true
  },
  isRenderFooter(){
    var arrRouter = ['home-page', 'post-detail'];
    let Yes_arrRouterName = arrRouter.indexOf(this.$route.name);
    if(Yes_arrRouterName != -1) return false;
    return true
  },
 
},
 created(){
    var result = this.$store.dispatch('getListPostHasPaging', {})
    console.log(result)
  },
  
}
</script>

<style>
</style>
