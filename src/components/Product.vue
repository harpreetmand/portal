<template>

    <div class="col-sm-12">


        <div class="thumbnail">
          <div class="aroundImage">

            <app-carousel :sliders="allProducts[$route.params.productId].assets"></app-carousel>
          </div>
          <div class="caption">
            <h3>{{ allProducts[$route.params.productId].name }}</h3>
            {{allProducts[$route.params.productId].description}}<br/>
            <hr>
           <h4> Assets Available <small>Click on filename download</small></h4>

                    <ol class="" v-for="(slide, index) in allProducts[$route.params.productId].assets" :key="index">
            <li v-if="slide.type === 'document'">
                <a :href="'/assets'+slide.file">{{ slide.name }} </a>
            </li>
        </ol>
    
            
          </div>
        </div>



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
        "id": '1', 
        "file": "1", 
        "type": "1", 
        "thumb": "1"
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


</style>
