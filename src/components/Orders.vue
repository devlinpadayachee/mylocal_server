<template>
  <section class="container my-2">

    <!--Navbar-->
    <nav class="navbar navbar-toggleable-md scrolling-navbar bg-faded">
        <button  class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav1" aria-controls="navbarNav1" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div   class="collapse navbar-collapse" id="navbarNav1">
          <ul class="navbar-nav mr-auto smooth-scroll">

            <li class="nav-item">
              <span class="navbar-brand mb-0 h1">Orders</span>
            </li>

          </ul>
          <span class="nav-item dropdown float-right">
            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            Navigation
            </a>
            <div class="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
              <router-link class="nav-link" to="/suppliers">Suppliers</router-link>
              <router-link class="nav-link" to="/products">Products</router-link>
            </div>
          </span>
      </div>
    </nav>
    <!--/.Navbar-->

      <div class="row my-2 ">
        <div class="col">
          <vue-good-table
            :columns="columns"
            :rows="orders"
            :paginate="true"
            :lineNumbers="true"
            :globalSearch="true"
            styleClass="table condensed table-bordered table-striped">
            <template slot="table-row-after" scope="props">
              <td>
                <p v-for="item in props.row.cart">
                  <ul>
                    <li>
                      {{item.product.name}}
                    </li>
                  </ul>
                </p>
              </td>
            </template>
          </vue-good-table>
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
      msg: 'Orders Page',
      columns: [
        {
          label: 'Buyer',
          field: 'buyer',
          filterable: true
        },
        {
          label: 'Cart Count',
          field: 'cart_item_count'
        },
        {
          label: 'Total',
          field: 'cart_total'
        },
        {
          label: 'Created',
          field: 'createdAt'
          // type: 'date',
          // inputFormat: 'YYYYMMDD',
          // outputFormat: 'MMM DD YY'
        },
        {
          label: 'Status',
          field: 'status'
        },
        {
          label: 'Items'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
