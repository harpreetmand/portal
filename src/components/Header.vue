<template>
    <div class="border-top">
        <router-link to="/" class="pull-right">Home</router-link>
        <img src="../assets/imgs/star-brands.png" class="img-resposnive col-xs-3">
        <div class="cf"></div>
        <div class="row">
            <div class="col-sm-3 bar">
                <div class="input-group">
                <input type="text" class="form-control SearchBar" placeholder="Search for..." v-model="search" @keyup="searchChanged">
                <span class="input-group-btn">
                    <button class="btn btn-defaul SearchButton" type="button">
                        <span class="glyphicon glyphicon-search SearchIcon" ></span>

                    </button>
                </span>
                </div>
{{search}}
            </div><!-- /.col-lg-6 -->
            
            <div class="col-sm-9 pull-right bar logout">logout</div>
        </div><!-- /.row -->
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

            console.log('search')
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
    .pull-right{
        float: right;
        padding-right: 10px;
        text-align: right;
    }
    .SearchIcon
    {
        color:#fff;
    
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