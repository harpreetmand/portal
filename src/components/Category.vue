<template>
  <div class="col-sm-12">
       <h2>Welcome to the {{ brand }} Marketing Resource & Asset Library</h2>
    <p>This online portal is the best resource for all of your marketing and advertising needs.</p>
<p>Once you click on a category, you can view each item individually. If the piece you are interested in is double-sided,
you can also click on the image to view the reverse side. To begin browsing through the available marketing collateral
and assets, please select one of the Brands from the navigation menu below.</p>

<app-sidebar></app-sidebar>

          <div class="col-sm-10">
            <transition name="fade">
              <router-view :key="$route.fullPath"></router-view>
            </transition>

</div>
  </div>
</template>

<script>
import Sidebar from './SidebarCategory.vue'
export default {
  
  data () {
    return {
      brand: 'Star Brands'
    }
  },
    components: {
    appSidebar: Sidebar
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../assets/scss/settings.scss";

</style>
