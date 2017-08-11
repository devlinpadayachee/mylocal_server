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
    <div class="container-fluid">
      <div class="row justify-content-md-center ">
        <p class="section-description">Give us a shout, get an estimate on the time, effort and cost of your project and get started today.</p>
              <div class="col-lg-6">
                <!-- Contact form -->
                  <form v-on:submit.prevent="onSubmit" id="contactForm">
                      <input type="text" name="_gotcha" style="display:none" />
                      <div class="md-form">
                          <i class="fa fa-user prefix grey-text"></i>
                          <input type="text" name="name" id="name" class="form-control" minlength="2" required>
                          <label for="name">Your name</label>
                      </div>

                      <div class="md-form">
                          <i class="fa fa-envelope prefix grey-text"></i>
                          <input type="email" name="email" id="email" class="form-control" required>
                          <label for="email">Your email</label>
                      </div>

                      <div class="md-form">
                          <i class="fa fa-tag prefix grey-text"></i>
                          <input type="number" name="budget" id="budget" class="form-control" required>
                          <label for="budget">Your project budget</label>
                      </div>

                      <div class="md-form">
                          <i class="fa fa-tag prefix grey-text"></i>
                          <input type="text" name="subject"  id="subject" class="form-control" minlength="2" required>
                          <label for="subject">Subject</label>
                      </div>

                      <div class="md-form">
                          <i class="fa fa-pencil prefix grey-text"></i>
                          <textarea type="text" name="message"  id="message" class="md-textarea" style="height: 100px" minlength="10" required></textarea>
                          <label for="message">Your message</label>
                      </div>

                      <!-- <div class="errorTxt"></div> -->

                      <div class="text-center">
                          <button class="btn btn-outline-primary btn-lg waves-effect" id="contactFormbutton" data-toggle="modal" data-target="#centralModalSuccess">Send <i class="fa fa-paper-plane-o ml-1"></i></button>
                      </div>

                  </form>
                  <!-- Contact form -->
              </div>
              <div class="col-lg-6">

                         <ul class="contact-icons mt-2">
                             <li><i class="fa fa-map-marker"></i>
                                 <p>Sandton, South Africa</p>
                             </li>

                             <li><i class="fa fa-phone"></i>
                                 <p>+27 74 577 0050</p>
                             </li>

                             <li><i class="fa fa-envelope"></i>
                                 <p>development@divisionbyzero.co.za</p>
                             </li>
                         </ul>

                         <hr class="hr-light mb-4 mt-4">

                         <ul class="inline-ul text-center list-unstyled">
                             <li><a class="icons-sm tw-ic"><i class="fa fa-twitter"></i></a></li>
                             <li><a class="icons-sm li-ic"><i class="fa fa-linkedin"> </i></a></li>
                             <li><a class="icons-sm ins-ic"><i class="fa fa-instagram"> </i></a></li>
                         </ul>

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
  },
  methods: {
    onSubmit: function (event) {
      // `this` inside methods points to the Vue instance
      console.log('Submitting Contact!')
      var name = event.target.name.value
      var email = event.target.email.value
      var budget = event.target.budget.value
      var subject = event.target.subject.value
      var message = event.target.message.value
      console.log(name, email, budget, subject, message)
      $.ajax({
        url: 'https://formspree.io/development@divisionbyzero.co.za',
        method: 'POST',
        data: {name: name, email: email, budget: budget, message: message, _subject: subject, _replyto: email},
        dataType: 'json'
      })

      $('#contactForm')[0].reset()
      // $('#centralModalSuccess').modal({
      //   keyboard: true,
      //   focus: true,
      //   backdrop: false,
      //   show: true
      // })
      // $('#centralModalSuccess').modal('show')
      // `event` is the native DOM event
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
