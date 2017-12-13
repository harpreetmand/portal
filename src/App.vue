<template>
    <div>
      <div class="container" v-if="isLoggedIn">
        <app-header></app-header>
        <div class="row allBody">

            <hr>
            <transition name="fade">
              <router-view></router-view>
            </transition>
        </div>
      </div>
      <div class="container" v-else>
        <app-splash @loginInfo="loginInfo" :error="error"></app-splash>
      </div>
    </div>
</template>

<script>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import Splash from './components/Splash.vue'
import Home from './components/Home.vue'
import {mapActions} from 'vuex';
export default {
  data() {
    return{
      error:''
    }
  },
  components: {
    appHeader: Header,
    appSidebar: Sidebar,
    appSplash: Splash

  },
  // created: function () {      
  //   this.login();
  // },
    computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
      console.log(this.$store.getters.isLoggedIn)
    }
    },
  methods: {
    loginInfo(e) {
      this.$store.dispatch("login", e)
        .then(data => {
          this.$router.push("/brands")
        })
      // if(!this.loggedIn){
      //   console.log(app.$store.state.isLoggedIn)
      //   this.$http.post('api/sessions/create',{email: e.username, password:e.password})
      //     // .then(response => {
      //     //   return response.json();
      //     // })
      //     .then(data => {this.brands = data;
      //       console.log(this.brands);
      //       this.loggedIn = true;
      //     console.log(this.loggedIn)
      //     this.$router.push({path: '/brands'})
      //     }
      //     ).catch(e => {
      //       this.error = e.body.error
      //       console.log(e.body.error)
      //       this.loggedIn = false;
      //     });
      // }
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/settings.scss";
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

body{
  padding-top: 15px;
  min-width: 320px;
}
.allBody{
  padding-top: 20px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.allBrands{
  background-color: #D8D9DA;
  padding-right: 0px;
  .brands{
    li{
      border-bottom: 3px solid #ffffff;
      list-style-type: none;
      padding: 5px;
      margin: 5px;
    }
    .brandHeading{
      background-color: $red;
      margin: 0px;
      border-bottom: none;
    }

  }
}
</style>