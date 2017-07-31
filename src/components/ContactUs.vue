<template>
  <!--Contact-Us-->
  <section class="section wow animated fadeInDown contact-us mb-5" data-wow-delay="0.5">
    <div class="container-fluid center-text">
      <div class="row justify-content-md-center mt-3">
        <div class="col-lg-12 text-center">
          <h1 class="text-primary"><strong>Contact </strong>Us</h1>
        </div>
      </div>
    </div>
    <div class="container-fluid center-text">
      <div class="row justify-content-md-center mt-3 ">
        <p class="section-description">We know it takes teamwork and collaboration to produce the best solutions. Our success boils down to our people.  We see each team member as an individual who contributes, shapes, and optimizes everything we deliver to our clients.</p>
              <div class="col-lg-6">
                <form>
    <!--First row-->
    <div class="row">
        <!--First column-->
        <div class="col-md-6">
            <div class="md-form">
                <i class="fa fa-envelope prefix"></i>
                <input type="email" id="form81" class="form-control validate">
                <label for="form81" data-error="wrong" data-success="right">Type your email</label>
            </div>
        </div>

        <!--Second column-->
        <div class="col-md-6">
            <div class="md-form">
                <i class="fa fa-lock prefix"></i>
                <input type="password" id="form82" class="form-control validate">
                <label for="form82" data-error="wrong" data-success="right">Type your password</label>
            </div>
        </div>
    </div>
    <!--/.First row-->

    <!--Second row-->
    <div class="row">
        <!--First column-->
        <div class="col-md-12">

            <div class="md-form">
                <textarea type="text" id="form76" class="md-textarea"></textarea>
                <label for="form76">Basic textarea</label>
            </div>

        </div>
    </div>
    <!--/.Second row-->

    <!--Third row-->
    <div class="row">

        <!--First column-->
        <div class="col-md-4">
            <div class="md-form">
                <input type="text" id="form41" class="form-control">
                <label for="form41" class="">Example label</label>
            </div>
        </div>

        <!--Second column-->
        <div class="col-md-4">
            <div class="md-form">
                <input type="text" id="form51" class="form-control">
                <label for="form51" class="">Example label</label>
            </div>
        </div>

        <!--Third column-->
        <div class="col-md-4">
            <div class="md-form">
                <input type="text" id="form61" class="form-control">
                <label for="form61" class="">Example label</label>
            </div>
        </div>

    </div>
    <!--/.Third row-->
</form>
              </div>
              <div class="col-lg-6">
                <h5 class="title">ABOUT MATERIAL DESIGN</h5>
                <p>Material Design (codenamed Quantum Paper) is a design language developed by Google. </p>
                <p>Material Design for Bootstrap (MDB) is a powerful Material Design UI KIT for most popular HTML, CSS, and JS framework - Bootstrap.</p>
              </div>
              <hr class="hidden-md-up">
      </div>
    </div>
  </section>
  <!--End Contact-Us-->
</template>

<script>
export default {
  name: 'contact-us',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
