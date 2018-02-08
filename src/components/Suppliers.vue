<template>
  <section class="container my-2">

    <nav class="navbar navbar-light bg-faded">
      <span class="navbar-brand mb-0 h1">Suppliers</span>
      <span class="nav-item dropdown float-right">
        <a class="nav-link dropdown-toggle " href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
        aria-expanded="false">
        Navigation
      </a>
      <div class="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
        <router-link class="nav-link" to="/products">Products</router-link>
        <router-link class="nav-link" to="/orders">Orders</router-link>
      </div>
    </span>
    </nav>

    <!--Navbar-->
    <nav class="navbar navbar-toggleable-md scrolling-navbar bg-faded">
      <div class="container">
        <button  class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav1" aria-controls="navbarNav1" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div   class="collapse navbar-collapse" id="navbarNav1">
          <ul class="navbar-nav mr-auto smooth-scroll">

            <li class="nav-item">
              <h4 class="nav-link">Supplier Management </h4>
            </li>

          </ul>
          <h4 class="nav-item dropdown float-right">
            <a class="nav-link dropdown-toggle " href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            Navigation
          </a>
          <div class="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
            <router-link class="nav-link" to="/products">Products</router-link>
            <router-link class="nav-link" to="/orders">Orders</router-link>
          </div>
        </h4>
      </div>
    </div>
  </nav>
  <!--/.Navbar-->

  <div class="row my-2 ">
    <div class="col">
      <vue-good-table
      :columns="columns"
      :rows="suppliers"
      :paginate="true"
      :lineNumbers="true"
      styleClass="table condensed table-bordered table-striped">
      <template slot="table-row-after" scope="props">
        <td>
          <a class="text-danger mx-1" @click="deleteSupplier($event, props.row['.key'])"><i class="fa fa-remove"></i></a>
          <a class="text-primary mx-1"  @click="editSupplier($event, props.row)"><i class="fa fa-edit"></i></a>
        </td>

      </template>
    </vue-good-table>
  </div>
  <div class="col">
    <div v-if="editmode" class="alert alert-warning" role="alert">
      You are now editing: {{supplierName}} ({{editingsupplierKey}})
    </div>
    <form v-on:submit.prevent="addSupplier">
      <div class="form-group">
        <label for="supplierName">Supplier name</label>
        <input v-model="supplierName" v-validate="'required|min:3'" data-vv-as="Supplier name"  type="text" class="form-control" id="supplierName" name="supplierName" aria-describedby="supplierNameHelp" placeholder="Enter Supplier name">
        <small id="supplierNameHelp" class="form-text text-muted">Supplier name is used to identify the supplier to the customers</small>
        <i v-show="errors.has('supplierName')" class="fa fa-warning"></i>
        <span v-show="errors.has('supplierName')" class="help text-danger">{{ errors.first('supplierName') }}</span>
      </div>
      <div class="form-group">
        <label for="address">Supplier address</label>
        <vue-google-autocomplete v-model="address" ref="addressInput" v-validate="'required'" data-vv-as="Supplier address" name="address" country="za" id="address" classname="form-control" placeholder="Start typing" v-on:placechanged="getAddressData"></vue-google-autocomplete>
        <i v-show="errors.has('address')" class="fa fa-warning"></i>
        <span v-show="errors.has('address')" class="help text-danger">{{ errors.first('address') }}</span>
      </div>
      <div class="form-group">
        <label for="supplierOpens">Supplier opening time</label>
        <input v-model="supplierOpens" v-validate="'required'" data-vv-as="Supplier opening time" name="supplierOpens" type="time" class="form-control" id="supplierOpens" aria-describedby="supplierOpensHelp" placeholder="Supplier opening time">
        <small id="supplierOpensHelp" class="form-text text-muted">Enter the start time that the supplier is available for business</small>
        <i v-show="errors.has('supplierOpens')" class="fa fa-warning"></i>
        <span v-show="errors.has('supplierOpens')" class="help text-danger">{{ errors.first('supplierOpens') }}</span>
      </div>
      <div class="form-group">
        <label for="supplierCloses">Supplier closing time</label>
        <input v-model="supplierCloses" v-validate="'required'"  data-vv-as="Supplier closing time" name="supplierCloses" type="time" class="form-control" id="supplierCloses" aria-describedby="supplierClosesHelp" placeholder="Supplier closing time">
        <small id="supplierClosesHelp" class="form-text text-muted">Enter the start time that the supplier closes for business</small>
        <i v-show="errors.has('supplierCloses')" class="fa fa-warning"></i>
        <span v-show="errors.has('supplierCloses')" class="help text-danger">{{ errors.first('supplierCloses') }}</span>
      </div>
      <div class="form-group">
        <label for="offeringDelivery">Does this supplier offer delivery for goods or are they a service supplier</label>
        <select v-model="offeringDelivery" v-validate="'required'" data-vv-as="offering delivery" name="offeringDelivery" class="form-control" id="offeringDelivery">
          <option value="" selected disabled>Please select an option</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="service">Is a service supplier</option>
        </select>
        <i v-show="errors.has('offeringDelivery')" class="fa fa-warning"></i>
        <span v-show="errors.has('offeringDelivery')" class="help text-danger">{{ errors.first('offeringDelivery') }}</span>
      </div>
      <div class="form-group" v-if="offeringDelivery=='yes'">
        <label for="deliveryMethod">What method of delivery will the supplier use</label>
        <select v-model="deliveryMethod" v-validate="'required'" data-vv-as="delivery method" name="deliveryMethod" class="form-control" id="deliveryMethod">
          <option value="" selected disabled>Please select an option</option>
          <option value="self">Self</option>
          <option value="agent">Agent</option>
        </select>
        <i v-show="errors.has('deliveryMethod')" class="fa fa-warning"></i>
        <span v-show="errors.has('deliveryMethod')" class="help text-danger">{{ errors.first('deliveryMethod') }}</span>
      </div>
      <button type="submit" class="btn btn-primary"><div v-if="editmode">Update Supplier</div><div v-else>Add Supplier</div></button>
    </form>
  </div>
</div>
</section>
</template>

<script>
import moment from 'moment'
import VueGoogleAutocomplete from 'vue-google-autocomplete'
import { suppliersRef } from '../assets/js/firebase'

console.log(suppliersRef)

export default {
  name: 'suppliers',
  components: { VueGoogleAutocomplete },
  firebase: {
    suppliers: suppliersRef
  },
  data () {
    return {
      msg: 'Suppliers Page',
      supplierName: '',
      supplierOpens: '',
      supplierCloses: '',
      offeringDelivery: '',
      deliveryMethod: '',
      address: '',
      formatted_address: '',
      editmode: false,
      editingsupplierKey: '',
      columns: [
        {
          label: 'Name',
          field: 'name',
          filterable: true
        },
        {
          label: 'Actions'
        }
      ]
    }
  },
  watch: {
    offeringDelivery: function (offeringDelivery) {
      console.log(offeringDelivery)
      if (offeringDelivery === 'yes') {
        this.deliveryMethod = 'self'
      }
      if (offeringDelivery === 'no' || offeringDelivery === 'service') {
        this.deliveryMethod = 'none'
      }
    },
    supplierCloses: function (supplierCloses) {
      let openingTime = moment(this.supplierOpens, 'HH:mm A')
      let closingTime = moment(this.supplierCloses, 'HH:mm A')
      console.log(openingTime.isBefore(closingTime))
    }
  },
  methods: {
    addSupplier (event) {
      this.$validator.validateAll().then((result) => {
        if (result) {
          let openingTime = moment(this.supplierOpens, 'HH:mm A')
          let closingTime = moment(this.supplierCloses, 'HH:mm A')
          if (openingTime.isBefore(closingTime)) {
            let supplierOpeningTimeHours = moment(this.supplierOpens, 'HH:mm A').format('HH')
            let supplierOpeningTimeMins = moment(this.supplierOpens, 'HH:mm A').format('mm')
            let supplierClosingTimeHours = moment(this.supplierCloses, 'HH:mm A').format('HH')
            let supplierClosingTimeMins = moment(this.supplierCloses, 'HH:mm A').format('mm')
            if (this.editmode) {
              let supplier = this.$firebaseRefs.suppliers.child(this.editingsupplierKey).set({
                name: this.supplierName,
                opens: supplierOpeningTimeHours,
                closes: supplierClosingTimeHours,
                opensMins: supplierOpeningTimeMins,
                closesMins: supplierClosingTimeMins,
                opensRaw: this.supplierOpens,
                closesRaw: this.supplierCloses,
                offeringDelivery: this.offeringDelivery,
                deliveryMethod: this.deliveryMethod,
                address: this.address,
                formatted_address: this.formatted_address
              })
              alert('Supplier updated')
              console.log(supplier.key)
            } else {
              let supplier = this.$firebaseRefs.suppliers.push({
                name: this.supplierName,
                opens: supplierOpeningTimeHours,
                closes: supplierClosingTimeHours,
                opensMins: supplierOpeningTimeMins,
                closesMins: supplierClosingTimeMins,
                opensRaw: this.supplierOpens,
                closesRaw: this.supplierCloses,
                offeringDelivery: this.offeringDelivery,
                deliveryMethod: this.deliveryMethod,
                address: this.address,
                formatted_address: this.formatted_address
              })
              alert('Supplier added')
              console.log(supplier.key)
            }
            return
          } else alert('Please check the opening and closing times! The opening time must come before the closing time')
        }
        alert('Please correct the errors!')
      })
    },
    editSupplier (event, props) {
      console.log(props)
      this.supplierName = props.name
      this.supplierOpens = props.opensRaw
      this.supplierCloses = props.closesRaw
      this.offeringDelivery = props.offeringDelivery
      this.deliveryMethod = props.deliveryMethod
      this.address = props.address
      this.formatted_address = props.formatted_address
      this.editingsupplierKey = props['.key']
      this.$refs.addressInput.update(props.formatted_address)
      this.editmode = true
    },
    deleteSupplier (event, supplierId) {
      event.preventDefault()
      console.log(supplierId)
      this.$firebaseRefs.suppliers.child(supplierId).remove()
    },
    getAddressData: function (addressData, placeResultData, id) {
      this.address = addressData
      console.log(placeResultData)
      this.formatted_address = placeResultData.formatted_address
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
