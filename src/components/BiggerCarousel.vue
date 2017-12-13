<template>
    <section>


        <div v-if="justImages.length > 1">
            <carousel :indicators="indicators" :controls="controls" :interval="interval" ref="carousel">
                <slide v-for="(slide, index) in justImages" :key="index">

                    <div v-if="height" class="img">
                        <img alt=""  v-bind:src="'/assets'+slide.thumb" :style="{'max-height':height+'px'}" data-holder-rendered="true" class="img-responsive">
                    </div>
                    <div v-else>
                        <img alt=""  v-bind:src="'/assets'+slide.file" data-holder-rendered="true" class="img-responsive">
                    </div>
                </slide>

                <template slot="indicators" slot-scope="props">
                    <ol class="carousel-indicators custom-carousel-indicators">
                        <li v-for="(slide, index) in justImages" :key="index" :class="{active:index === props.activeIndex}" @click="props.select(index)">

                        </li>
                    </ol>
                </template>
            </carousel>
        </div>
<!-- {{filterby('image')}} -->
        <div v-else>
            <div v-if="height">
                <img alt=""  v-bind:src="'/assets'+sliders[0].thumb" :style="{'max-height':height+'px'}" class="img-responsive">
            </div>
            <div v-else>
                <img alt="" v-bind:src="'/assets'+sliders[0].file" class="img-responsive">
            </div>
        </div>
    </section>
</template>


<script>
import {mapGetters} from 'vuex';
export default {   
    props: ['sliders','height'],
    data () {
        return {
            interval: 5000,
            indicators: true,
            controls: true
        }   
    },
    methods: {
        filterby(type) {
            //  return this.carousel.filter(type => carousel.type === day)
        }
    },
  computed: {
        ...mapGetters({
          carousel: 'getCarousel'
      }),
        justImages() {
            console.log("carousel here")
            return this.carousel.filter(image => image.type == 'image')
        }
  },
  filters: {
      imageOnly(value) {
          console.log(value)
          return value.toUpperCase()
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "../assets/scss/settings.scss";
    .img{
        display: inline;
    
    }
    img{
        // max-height: 150px;
        max-height: 100%;
        margin: 0 auto;
    }
    .carousel-indicators{
        bottom: -5px;
        li{
            box-shadow: 0px 0px 8px 2px;
        }
    }
</style>
