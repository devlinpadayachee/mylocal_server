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
              <span class="navbar-brand mb-0 h1">Products</span>
            </li>

          </ul>
          <span class="nav-item dropdown float-right">
            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            Navigation
            </a>
            <div class="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
              <router-link class="nav-link" to="/suppliers">Suppliers</router-link>
              <router-link class="nav-link" to="/orders">Orders</router-link>
            </div>
          </span>
      </div>
    </nav>
    <!--/.Navbar-->

    <div class="form-group my-2">
      <select v-model="selectedSupplier"  class="form-control" id="supplier">
        <option value="" selected disabled>Please select a supplier</option>
        <option v-for="supplier in suppliers" :value="supplier">{{supplier.name}}</option>
      </select>
    </div>
    <div class="form-group my-2">
      <span class="h3">Selected supplier: {{selectedSupplier.name}}</span>
    </div>

    <div class="row my-2 ">
      <div class="col">
        <div v-if="suppliersCatalogue.length > 0">
          <vue-good-table
            :columns="columns"
            :rows="suppliersCatalogue"
            :paginate="true"
            :lineNumbers="true"
            styleClass="table condensed table-bordered table-striped">
            <template slot="table-row-after" scope="props">
              <td>
                <a class="text-danger mx-1" @click="deleteProduct($event, props.row['.key'])"><i class="fa fa-remove"></i></a>
                <a class="text-primary mx-1"  @click="editProduct($event, props.row)"><i class="fa fa-edit"></i></a>
              </td>
            </template>
          </vue-good-table>
        </div>
        <div v-else>
          <div class="alert alert-info" role="alert">
            This supplier does not have any products loaded
          </div>
        </div>
      </div>
      <div class="col">
        <div v-if="editmode" class="alert alert-warning" role="alert">
          You are now editing: {{productName}} ({{editingproductKey}})
        </div>
        <form v-on:submit.prevent="addProduct">
          <div class="form-group">
            <label for="productName">Product name</label>
            <input v-model="productName" v-validate="'required|min:3'" data-vv-as="product name"  type="text" class="form-control" id="productName" name="productName" aria-describedby="productNameHelp" placeholder="Enter product name">
            <small id="productNameHelp" class="form-text text-muted">Product name is used to identify the product to the customers</small>
            <i v-show="errors.has('productName')" class="fa fa-warning"></i>
            <span v-show="errors.has('productName')" class="help text-danger">{{ errors.first('productName') }}</span>
          </div>
          <div class="form-group">
            <label for="productCategory">Product Category</label>
            <select v-model="productCategory" v-validate="'required'" data-vv-as="product category" name="productCategory" class="form-control" id="productCategory">
              <option value="" selected disabled>Please select an option</option>
              <option>plumbing</option>
              <option>electrical</option>
              <option>painting</option>
            </select>
            <i v-show="errors.has('productCategory')" class="fa fa-warning"></i>
            <span v-show="errors.has('productCategory')" class="help text-danger">{{ errors.first('productCategory') }}</span>
          </div>
          <div class="form-group">
            <label for="productDescription">Product description</label>
            <input v-model="productDescription" v-validate="'required|min:3'" data-vv-as="product description"  type="text" class="form-control" id="productDescription" name="productDescription" aria-describedby="productDescriptionHelp" placeholder="Enter product description">
            <small id="productDescriptionHelp" class="form-text text-muted">Product description provides a short explanation of the product to customers</small>
            <i v-show="errors.has('productDescription')" class="fa fa-warning"></i>
            <span v-show="errors.has('productDescription')" class="help text-danger">{{ errors.first('productDescription') }}</span>
          </div>
          <div class="form-group">
            <label for="productSupplierSKU">Product supplier sku</label>
            <input v-model="productSupplierSKU" v-validate="'required'" data-vv-as="product supplier sku"  type="text" class="form-control" id="productSupplierSKU" name="productSupplierSKU" aria-describedby="productSupplierSKUHelp" placeholder="Enter product's suppliers stock code">
            <small id="productSupplierSKUHelp" class="form-text text-muted">Product supplier sku is the stock code of the product on the suppliers records</small>
            <i v-show="errors.has('productSupplierSKU')" class="fa fa-warning"></i>
            <span v-show="errors.has('productSupplierSKU')" class="help text-danger">{{ errors.first('productSupplierSKU') }}</span>
          </div>
          <div class="form-group">
            <label for="productPrice">Product price</label>
            <input v-model="productPrice" v-validate="'required|numeric'" data-vv-as="product price"  type="number" class="form-control" id="productPrice" name="productPrice" aria-describedby="productPriceHelp" placeholder="Enter product's price as it appears to customers">
            <small id="productPriceHelp" class="form-text text-muted">Product price in Rands</small>
            <i v-show="errors.has('productPrice')" class="fa fa-warning"></i>
            <span v-show="errors.has('productPrice')" class="help text-danger">{{ errors.first('productPrice') }}</span>
          </div>
          <div class="form-group">
            <label for="productImageURL">Product image url</label>
            <input v-model="productImageURL" v-validate="'required|url:require_protocol'" data-vv-as="product image url"  type="url" class="form-control" id="productImageURL" name="productImageURL" aria-describedby="productImageURLHelp" placeholder="Enter in a url for the image of this product">
            <small id="productImageURLHelp" class="form-text text-muted">Product image url like https://firebasestorage.googleapis.com/v0/b/mylocal-97b23.appspot.com/o/product-image-transparent1.png</small>
            <i v-show="errors.has('productImageURL')" class="fa fa-warning"></i>
            <span v-show="errors.has('productImageURL')" class="help text-danger">{{ errors.first('productImageURL') }}</span>
          </div>
          <button type="submit" class="btn btn-primary"><div v-if="editmode">Update Product</div><div v-else>Add Product</div></button>
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
      suppliersCatalogue: '',
      editmode: false,
      editingproductKey: '',
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
    selectedSupplier: function (selectedSupplier) {
      this.$bindAsArray('suppliersCatalogue', db.ref('suppliersCatalogue/' + selectedSupplier['.key']))
    }
  },
  methods: {
    addProduct (event) {
      this.$validator.validateAll().then((result) => {
        if (result) {
          if (typeof this.$firebaseRefs.suppliersCatalogue === 'undefined') {
            alert('Please select a supplier')
            return
          } else {
            var selectedSupplierSanitized = Object.assign({}, this.selectedSupplier)
            selectedSupplierSanitized.key = this.selectedSupplier['.key']
            delete selectedSupplierSanitized['.key']
            if (this.editmode) {
              let updatedProduct = {
                name: this.productName,
                category: this.productCategory,
                description: this.productDescription,
                supplier: selectedSupplierSanitized,
                supplier_sku: this.productSupplierSKU,
                price: this.productPrice,
                imageUrl: this.productImageURL
              }
              let product = this.$firebaseRefs.products.child(this.editingproductKey).set(updatedProduct)
              let suppliersCatalogue = this.$firebaseRefs.suppliersCatalogue.child(this.editingproductKey).set(updatedProduct)
              alert('Product updated')
              console.log(product.key, suppliersCatalogue.key)
            } else {
              var newProductKey = this.$firebaseRefs.products.push().key
              console.log(newProductKey)
              var newProduct = {}
              newProduct[newProductKey] = {
                name: this.productName,
                category: this.productCategory,
                description: this.productDescription,
                supplier: selectedSupplierSanitized,
                supplier_sku: this.productSupplierSKU,
                price: this.productPrice,
                imageUrl: this.productImageURL
              }
              this.$firebaseRefs.products.update(newProduct)
              this.$firebaseRefs.suppliersCatalogue.update(newProduct)
              alert('Product added')
            }
          }
          return
        }
        alert('Please correct the errors!')
      })
    },
    editProduct (event, props) {
      console.log(props)
      this.productName = props.name
      this.productCategory = props.category
      this.productDescription = props.description
      this.productSupplierSKU = props.supplier_sku
      this.productPrice = props.price
      this.productImageURL = props.imageUrl
      this.editingproductKey = props['.key']
      this.editmode = true
    },
    deleteProduct (event, productId) {
      event.preventDefault()
      console.log(productId)
      this.$firebaseRefs.products.child(productId).remove()
      this.$firebaseRefs.suppliersCatalogue.child(productId).remove()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
