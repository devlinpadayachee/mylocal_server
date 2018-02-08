<template>
  <section class="container my-2">

    <nav class="navbar navbar-light bg-faded">
      <span class="navbar-brand mb-0 h1">Products</span>
    </nav>

    <div class="form-group my-2  ">
      <select v-model="selectedSupplier"  class="form-control" id="supplier">
        <option value="" selected disabled>Please select a supplier</option>
        <option v-for="supplier in suppliers" :value="supplier">{{supplier.name}}</option>
      </select>
    </div>

    <div class="form-group my-2  ">
      <span class="h3">Selected supplier: {{selectedSupplier.name}}</span>
    </div>

    <div class="row my-2 ">
      <div class="col">
        <div v-if="suppliersCatalogue.length > 0">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in suppliersCatalogue">
                <td>{{product.name}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else>
          <div class="alert alert-info" role="alert">
            Thus supplier does not have any products loaded
          </div>
        </div>
      </div>
      <div class="col">
        <form>
          <div class="form-group">
            <label for="productName">Product name</label>
            <input v-model="productName" type="text" class="form-control" id="productName" aria-describedby="productNameHelp" placeholder="Enter product name" required>
            <small id="productNameHelp" class="form-text text-muted">Product name is used to identify the product</small>
          </div>
          <div class="form-group">
            <label for="productCategory">Product Category</label>
            <select v-model="productCategory" class="form-control" id="productCategory" required>
              <option>plumbing</option>
              <option>electrical</option>
              <option>painting</option>
            </select>
          </div>
          <div class="form-group">
            <label for="productDescription">Product description</label>
            <input v-model="productDescription" type="text" class="form-control" id="productDescription" aria-describedby="productDescriptionHelp" placeholder="Enter product description" required>
            <small id="productDescriptionHelp" class="form-text text-muted">Product description</small>
          </div>
          <div class="form-group">
            <label for="productSupplierSKU">Product supplier sku</label>
            <input v-model="productSupplierSKU" type="text" class="form-control" id="productSupplierSKU" aria-describedby="productSupplierSKUHelp" placeholder="Enter product's suppliers stock code" required>
            <small id="productSupplierSKUHelp" class="form-text text-muted">Product supplier sku</small>
          </div>
          <div class="form-group">
            <label for="productPrice">Product price</label>
            <input v-model="productPrice" type="number" class="form-control" id="productPrice" aria-describedby="productPriceHelp" placeholder="Enter product price" required>
          <small id="productPriceHelp" class="form-text text-muted">Product price</small>
          </div>
          <div class="form-group">
            <label for="productImageURL">Product image url</label>
            <input v-model="productImageURL" type="url" class="form-control" id="productImageURL" aria-describedby="productImageURLHelp" placeholder="Enter product image url" required>
            <small id="productImageURLHelp" class="form-text text-muted">Product image url</small>
          </div>
          <button @click="addProduct" type="submit" class="btn btn-primary">Add Product</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete'
import { productsRef, suppliersRef, db } from '../assets/js/firebase'

console.log(db)

export default {
  name: 'products',
  components: { VueGoogleAutocomplete },
  firebase: {
    products: productsRef,
    suppliers: suppliersRef
  },
  data () {
    return {
      msg: 'Products Page',
      selectedSupplier: '',
      productName: '',
      productCategory: '',
      productDescription: '',
      productSupplierSKU: '',
      productPrice: '',
      productImageURL: '',
      suppliersCatalogue: ''
    }
  },
  watch: {
    selectedSupplier: function (selectedSupplier) {
      this.$bindAsArray('suppliersCatalogue', db.ref('suppliersCatalogue/' + selectedSupplier['.key']))
    }
  },
  methods: {
    addProduct (event) {
      event.preventDefault()
      if (typeof this.$firebaseRefs.suppliersCatalogue === 'undefined') {
        alert('Please select a supplier')
        return
      } else {
        var newOrderKey = this.$firebaseRefs.products.push().key
        console.log(newOrderKey)
        var updates = {}
        updates[newOrderKey] = {
          name: this.productName,
          category: this.productCategory,
          description: this.productDescription,
          supplier_sku: this.productSupplierSKU,
          price: this.productPrice,
          imageUrl: this.productImageURL
        }
        this.$firebaseRefs.products.update(updates)
        this.$firebaseRefs.suppliersCatalogue.update(updates)
        return
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
