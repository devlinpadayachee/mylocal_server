<template>
  <section class="container my-2">

      <nav class="navbar navbar-light bg-faded">
        <span class="navbar-brand mb-0 h1">Orders</span>
      </nav>

      <div class="row my-2 ">
        <div class="col">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Buyer</th>
                <th>Order items</th>
                <th>Item count</th>
                <th>Total</th>
                <th>Created</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in orders">
                <td>{{order.buyer}}</td>
                <td>
                  <p v-for="item in order.cart">
                    <ul>
                      <li>
                        {{item.product.name}}
                      </li>
                    </ul>
                  </p>
                </td>
                <td>{{order.cart_item_count}}</td>
                <td>{{order.cart_total}}</td>
                <td>{{order.createdAt}}</td>
                <td>{{order.status}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  </section>
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete'
import { ordersRef } from '../assets/js/firebase'

console.log(ordersRef)

export default {
  name: 'orders',
  components: { VueGoogleAutocomplete },
  firebase: {
    orders: ordersRef
  },
  data () {
    return {
      msg: 'Orders Page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
