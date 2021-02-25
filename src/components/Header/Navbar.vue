<template>
  <b-navbar toggleable="lg" variant="faded" type="dark">
    <b-container>
      <b-navbar-brand href="#">
        <img :src="require('@/assets/img/logo.png')" height="60px" class="d-inline-block align-bottom" alt="tajam logo">
        <span class="logoCustom align-bottom">tajam</span>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto text-uppercase navbarCustom">
          <li class="nav-item">
            <a href="#" class="navbarCustomItem">home</a>
          </li>
          <li class="nav-item">
            <a href="#" class="navbarCustomItem">about</a>
          </li>
          <li class="nav-item">
            <a href="#" class="navbarCustomItem">expertise</a>
          </li>
          <li class="nav-item">
            <a href="#" class="navbarCustomItem">teams</a>
          </li>
          <li class="nav-item">
            <a href="#" class="navbarCustomItem">works</a>
          </li>
          <li class="nav-item">
            <a href="#" class="navbarCustomItem">people say</a>
          </li>
          <li class="nav-item">
            <a href="#" class="navbarCustomItem">contact</a>
          </li>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
</style>