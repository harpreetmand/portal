<template>
      <div class="col-sm-2 pl0 allBrands">
        <ul class="brands pl0">
          <!-- <li class="brandHeading">Mcvitie's</li> -->
          <li class="brandHeading">Marketing</li>
          <li v-for="category in allCategories['marketing']" v-bind:key="category.id">
              <router-link :to="'/brand/1/' + category.id"> 
                 {{ category.name }}
              </router-link>
          </li>
          <li class="brandHeading">Assets</li>
          <li v-for="category in allCategories['assets']" v-bind:key="category.id">
              <router-link :to="'/brand/1/' + category.id"> 
                 {{ category.name }}
              </router-link>
          </li>
        
          <li class="brandHeading">Promotions</li>
          <li v-for="category in allCategories['promotions']" v-bind:key="category.id">
              <router-link :to="'/brand/1/' + category.id"> 
                 {{ category.name }}
              </router-link>
          </li>
        </ul>

      </div>
    
</template>


<script>
export default {
  data(){
    return{
      showthisBrand: ''
    }
  },
  components: {    
    brands:[]    
  },
  created: function () {
    // this.$store.dispatch("loadData", { self: this })
    // this.$store.dispatch("loadCategorys", this.$route.params.id, { self: this })
    this.routeChanged()
  },
    methods: {
          routeChanged() {
    // this.loadInvoice().then((data) => {
       this.$store.dispatch("loadCategorys", this.$route.params.id, { self: this })
    //   })
  },
  brandClicked(e){
    this.showthisBrand = e;
  }
    },
  computed: {
    allBrands() {
      return this.$store.getters.allBrands      
    },
    allCategories() {
      return this.$store.getters.allCategories      
    }
  }
}
</script>
<style lang="scss">
@import "../assets/scss/settings.scss";
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
