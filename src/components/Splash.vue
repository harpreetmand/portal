<template>
  <div class="main">
      <div class="bg"></div>
      <div class="container">            
            <div class="bgContent">
                <div class="col-md-2">
                    </div>
                <div class="center col-md-8 col-sm-12">
                <h1>pladis</h1>
                <img src="../assets/imgs/star-brands.png" class="img-resposnive center">
                <div class="cf"></div>
                <br>
                <br>
                <div class="imgs">
                    <img src="../assets/imgs/mcvities.png" alt="McVities" class=""/>
                    <img src="../assets/imgs/carrs.png" alt="carrs" class=""/>
                    <img src="../assets/imgs/godiva.png" alt="godiva" class=""/>
                    <img src="../assets/imgs/jacobs.png" alt="jacobs" class=""/>
                    <img src="../assets/imgs/flipz.png" alt="flipz" class=""/>
                </div>
                <div class="cf"></div>
                <br>
                <br>
                <div class="bigger">
                    MARKETING RESOURCE<br> & ASSET LIBRARY
                </div>
                <div class="red">
                    <strong>LOGIN</strong>
                </div>
                <br>
                <br>
                {{error}}
                <form v-on:submit="loginButton">
                  <div class="form-horizontal">
                      <div class="form-group">
                          <label for="inputEmail3" class="col-sm-12 control-label">USERNAME</label>
                          <div class="col-sm-12">
                          <input type="email" class="form-control" id="inputEmail3" placeholder="Email" v-model="loginInfo.username">
                          </div>
                      </div>
                      <div class="form-group">
                          <label for="inputPassword3" class="col-sm-12 control-label">PASSWORD</label>
                          <div class="col-sm-12">
                          <input type="password" class="form-control" id="inputPassword3" placeholder="Password" v-model="loginInfo.password" >
                          </div>
                      </div>
                      <div class="form-group">
                          <div class="col-sm-12 newPassword">
                              <span class="btnBorder password">
                                  <button class="btn">REQUEST NEW PASSWORD</button>
                              </span>
                              <span class="btnBorder login">
                                <button type="submit" class="btn">LOGIN</button>
                              </span>
                          </div>
                      </div>
                  </div>
                </form>
                <br>
                <br>
            </div>
        </div>
           
      </div>
  </div>
</template>

<script>
export default {   
    props: ['error'],
  data () {
    return {
      loginInfo: {
          username: 'admin@limeadvertising.com',
          password: 'password'          
      },      
    }
  },
  methods: {
      loginButton(e) {
          e.preventDefault()
          this.$emit('loginInfo', this.loginInfo)
        //   console.log(this.loginInfo)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "../assets/scss/settings.scss";
    .container{
        text-align: center;
    }
    .control-label{
        text-align: left;
    }
    .red{
        font-size: 30px;
    }
    h1{
        color: $red;
        font-size: 100px;
    }
    .bg{
        position: fixed;
        background-image: url("../assets/imgs/background.jpg");
        display: block;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100%;
        -webkit-filter: blur(20px);
        -moz-filter: blur(20px);
        -o-filter: blur(20px);
        -ms-filter: blur(20px);
        filter: blur(20px);
        left: 0px;
        top: 0px;
    }
    .bgContent{

        z-index: 2;
        width: 100%;
        .center{
            background-color: #fff;
            margin:0 auto;
        }       
    }
    .bigger{
        font-size: 30px;
    }
    button{
        color: #fff;
    }
    .login{
        text-align: right;
        .btnBorder{
            @include btnBorder($pladis);
        }

        button{
            @include btn-pladis($pladis);
            font-size: 16px;
        }
    }
    .newPassword{
        display: flex;
        justify-content: space-between;

        .btnBorder{
            &.password {
              @include btnBorder(#535357);
              button {
                @include btn-pladis(#535357);
              }
            }
            &.login {
              @include btnBorder($pladis);
              button {
                @include btn-pladis($pladis);
              }
            }

            button{
              font-size: 12px;
            }
        }

    }
</style>
