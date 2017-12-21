<template>
    <div class="border-top">
        <router-link to="/" class="pull-right">Home</router-link>
        <img src="../assets/imgs/star-brands.png" class="img-resposnive col-xs-3">
        <div class="cf"></div>

        <div class="redbar">
                <div class="input-group">
                    <input type="text" class="form-control SearchBar" placeholder="Search for..." v-model="search" @keyup="searchChanged">
                    <span class="input-group-btn">
                        <button class="btn btn-defaul SearchButton" type="button">
                            <span class="glyphicon glyphicon-search SearchIcon" ></span>
                        </button>
                    </span>
                </div>
                <span class="logout">logout</span>
        </div>

                <div class="search">
                    <ol>
                        <li v-for="(product, index) in searchResult.products" :key="index">
                            {{product.name}}
                        </li>
                    </ol>
                </div>
  
    </div>
</template>
<script>
export default {
    data(){
        return{
            search:'',
            doSearch: ''
        }
    },
    computed:{
        searchResult(){
            return this.$store.getters.getSearchResult      
        }
    },
    methods:{
        searchChanged(){
            clearTimeout(this.doSearch)

            this.doSearch = setTimeout(function(){
                this.$store.dispatch("searchFor", this.search, { self: this })
            }.bind(this),1000)        
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/settings.scss";
    .cf{
        clear: both;
    }
    .bar{
        background-color: $red;
        height: 34px
    }
    .border-top{
        border-top: 5px solid $red;
        padding-top: 10px;
    }

    .SearchIcon
    {
        color:#fff;
    
    }
    .redbar{
        background-color:#ED1C24;
        position: relative;
        .input-group{
            width: 20%;
            min-width: 300px;
        }
        .logout{
            position: absolute;
            top: 0px;
            right: 10px;
        }
    }
    .SearchButton
    {
        background-color:#ED1C24;
        border-radius:1px;
    }
    .SearchButton:hover{
        background-color:#C4161C;
    }
    .logout{
        padding-top: 7px;
    }
    .SearchBar{
        
    }
</style>