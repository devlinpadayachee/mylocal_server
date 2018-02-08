<template>
  <section class="container my-2">

      <nav class="navbar navbar-light bg-faded">
        <span class="navbar-brand mb-0 h1">Users</span>
      </nav>

      <div class="row my-2 ">
        <div class="col">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users">
                <td>{{user}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  </section>
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete'
import { usersRef } from '../assets/js/firebase'
console.log('Logging users')
console.log(usersRef)

export default {
  name: 'users',
  components: { VueGoogleAutocomplete },
  firebase: {
    users: usersRef
  },
  data () {
    return {
      msg: 'Users Page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
