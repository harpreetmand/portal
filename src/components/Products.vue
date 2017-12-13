<template>

    <div class="col-sm-12">
      
      <div class="col-sm-6 col-md-4 img" v-for="(product, index) in allProducts" v-bind:key="index">

        <div class="thumbnail">
          <div class="aroundImage">
            <a @click="showModal(product.assets,0)"><app-carousel :key="$route.fullPath" :sliders="product.assets" :height="150"></app-carousel></a>
          </div>
          <div class="caption">
            <h3>{{ product.name }}</h3>
            <center>
              <p>
                <!-- <a v-bind:download="product.description+'.jpg'" v-bind:href="'/assets'+product.assets[0].file" class="btn btn-primary" role="button">Download  <span class="glyphicon glyphicon-download" aria-hidden="true"></span></a> 
                <btn type="primary" @click="showModal(product.assets,0)">Enlarge <span class="glyphicon glyphicon-zoom-in"aria-hidden="true"></span></btn> -->
                <router-link @click="showModal(product.assets,0)" :to="$route.params.categoryId+'/'+index" class="btn btn-primary" role="button">
                  More Info  <span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
                
                </router-link>
                
              </p>
            </center>
          </div>
        </div>

      </div>

      <modal v-model="open" title="" @hide="callback" size="lg" ref="modal" id="modal-demo">
        
        <bigger-carousel :sliders="modalArr"></bigger-carousel>
      </modal>
      
    </div>
</template>

<script>
import Carousel from './Carousel.vue'
import BiggerCarousel from './BiggerCarousel.vue'
export default {
  data(){
    return{
      open: false,
      modalArr : [ {
        // "id": '1', 
        // "file": "1", 
        // "type": "1", 
        // "thumb": "1"
         } ]
    }
  },
  components: {    
    appCarousel: Carousel,
    BiggerCarousel
  },
  watch: {
      '$route.params.categoryId': function (categoryId) {
      this.getData()
       this.$store.dispatch("getCarousel", [], { self: this })
      //  this.$data = getDefaultData()
      }
  },
  created: function () {
    this.getData()
  },
    methods: {
      getData() {
        this.$store.dispatch("loadProducts", this.$route.params.categoryId, { self: this })
      },
      callback (msg){
        
      },
      showModal (e,isItOne) {
        this.$store.dispatch("getCarousel", e, { self: this })
        this.open = true
        this.modalArr = e

        
      }
    },
  computed: {
    allProducts() {
      return this.$store.getters.allProducts      
    }

  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/settings.scss";

.img{
    .thumbnail{
height: 320px;
/*img{
    max-height: 150px;
}*/
    }
   
 
}
.aroundImage{
  height: 150px;
}
.modelImg{
  // width: 500px;
}
div.image-container {
  height: 100px;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  .singleImage{
    max-width: 100%;
    max-height: 150px;
  }
}

h3 {
  line-height: 1.4em;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 20px;
  height: 80px;
}

.btn.btn-primary {
  background-color: $pladis;
  border: none;
  border-radius: 0;
}
</style>
