<template>
<div class="contact-us container">
  <form class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-12">
        <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <button type="submit" class="btn btn-default">Sign in</button>
      </div>
    </div>
  </form>
</div>
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

.form-control {
    padding: 25px!important;
    background: transparent!important;
    border-color: #444444!important;
    color: #fff!important;
    font-size: 1.2em!important;
}

.form-control:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
}

</style>
