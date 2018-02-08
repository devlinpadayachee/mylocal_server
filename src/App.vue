<template>
  <div id="app">
    <!--Navbar-->
    <nav class="navbar navbar-toggleable-md navbar-dark fixed-top scrolling-navbar">
      <div class="container">
        <button style ="padding-top:15px;"  class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav1" aria-controls="navbarNav1" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#home">
          <img class="d-inline-block align-top"  height="50" src="./assets/img/logo.png" alt="logo">
        </a>
          <div v-if="loggedin" style="padding-top:5px;" class="collapse navbar-collapse" id="navbarNav1">
          <ul class="navbar-nav mr-auto smooth-scroll">

            <li class="nav-item">
              <h3 class="nav-link">{{user.email}} </h3>
            </li>

          </ul>
        </div>
      </div>
    </nav>
    <!--/.Navbar-->
    <!--Carousel Wrapper-->
    <div id="video-carousel-example2" class="carousel slide carousel-fade" data-ride="carousel" >
      <!--Indicators-->
      <!-- <ol class="carousel-indicators">
      <li data-target="#video-carousel-example2" data-slide-to="0" class="active"></li>
      <li data-target="#video-carousel-example2" data-slide-to="1"></li>
      <li data-target="#video-carousel-example2" data-slide-to="2"></li>
    </ol> -->
    <!--/.Indicators-->

    <!--Slides-->
    <div class="carousel-inner " role="listbox" data-spy="scroll" data-target="#home" data-offset="0" >
      <!--First slide-->
      <div class="carousel-item active">
        <!--Mask color-->
        <div class="view">

          <!--Video source-->
          <video autoplay="" loop="" class="video-full" data-wow-delay="1s" id="video-background" >
            <source src="/static/backdropvid.mp4" type="video/mp4">Your browser does not support the video tag. I suggest you upgrade your browser.
            </video>
          </div>

          <!--Caption-->
          <div class="carousel-caption">
            <div class="flex-center wow animated fadeInDown" data-wow-delay="1s">

                <div  v-if="loggedin">
                  <div class="container my-5">
                    <div class="row align-items-end">
                        <div class="col">
                          <router-link class="nav-link" to="/suppliers"><h2>Suppliers</h2></router-link>
                        </div>
                        <div class="col">
                            <router-link class="nav-link" to="/products"><h2>Products</h2></router-link>
                        </div>
                        <div class="col">
                          <router-link class="nav-link" to="/orders"><h2>Orders</h2></router-link>
                        </div>
                    </div>
                  </div>
                  <div class="container">
                    <button class="btn btn-primary" @click="logout">Logout</button>
                  </div>
                </div>

                <form v-if="!loggedin" class= "col-md-4 wow animated fadeInDown" data-wow-delay="1s">
                  <div class="md-form">
                    <label for="username">Username</label>
                    <input v-model="username" type="text" class="form-control" id="username" >

                  </div>
                  <div class="md-form">
                    <label for="password">Password</label>
                    <input v-model="password" type="text" class="form-control" id="password">
                  </div>

                  <div class="text-center">
                    <button @click="login" type="submit" class="btn btn-primary">Login</button>
                  </div>
                </form>

            </div>
          </div>
          <!--Caption-->
        </div>
        <!--/First slide-->

      </div>
      <!--/.Slides-->

      <!--Controls-->
      <!-- <a class="carousel-control-prev" href="#video-carousel-example2" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#video-carousel-example2" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a> -->
  <!--/.Controls-->
</div>
<!--/.Carousel Wrapper-->
<!-- Purple Header -->
<!--Navigation links with a Smooth SCroll effect-->

</div>
</template>

<script>
import { Firebase } from './assets/js/firebase'

export default {
  name: 'app',
  mounted () {
    console.log('mounted')
    console.log(this.loggedin)
    let self = this
    let userl = Firebase.auth().currentUser
    if (userl) {
      self.loggedin = true
      console.log(self.loggedin)
      self.user = userl
    }
  },
  data () {
    return {
      loggedin: false,
      username: '',
      password: '',
      user: null
    }
  },
  methods: {
    login (event) {
      event.preventDefault()
      let self = this
      console.log(self.loggedin)
      console.log('Logging in')
      Firebase.auth().signInWithEmailAndPassword(this.username, this.password).then((userData) => {
        self.loggedin = true
        self.user = userData
        console.log(self.loggedin)
        console.log(userData)
      }).catch((error) => {
        console.log(error)
      })
    },
    logout (event) {
      event.preventDefault()
      let self = this
      console.log('Logging out')
      Firebase.auth().signOut().then(function () {
        self.loggedin = false
        self.username = ''
        self.password = ''
        self.user = null
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>
<style>
</style>
