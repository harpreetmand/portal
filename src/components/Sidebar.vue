<template>
      <div class="col-sm-2 pl0 allBrands">
        <ul class="brands pl0">
          <li class="brandHeading">Brands</li>
          <!-- <router-link v-for="brand in allBrands" v-bind:key="brand.id" to="/brands/{{brand.id}}" tag="li"> -->
          <li v-for="brand in allBrands" v-bind:key="brand.ids"> 
              <router-link :to="'/brand/' + brand.id"> 
                  <span v-on:click="brandClicked(brand.name)">{{ brand.name }}</span>
              </router-link>
          </li>
        </ul>
        <!-- <ul class="brands pl0 pull-right">
          <li class="brandHeading">{{ showthisBrand }}</li>          
          <li  v-for="category in allCategories['marketing']" v-bind:key="category.id"> 

              {{category.name}}
          </li>
        </ul> -->
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
  watch: {
      '$route.params.id': function (id) {
      this.routeChanged()
      }
  },
  created: function () {
    this.$store.dispatch("loadData", { self: this })
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
