<template>
  <b-navbar toggleable="lg" variant="faded" type="dark">
    <b-container>
      <b-navbar-brand href="#">
        <img :src="require('@/assets/img/logo.png')" height="60px" class="d-inline-block align-bottom" alt="tajam logo">
        <span class="header__navbar-logo-text align-bottom">tajam</span>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="header__navbar ml-auto text-uppercase">
          <li class="nav-item">
            <a href="#" class="header__link header__link--active">home</a>
          </li>
          <li class="nav-item">
            <a href="#" class="header__link header__link--active">about</a>
          </li>
          <li class="nav-item">
            <a href="#" class="header__link header__link--active">expertise</a>
          </li>
          <li class="nav-item">
            <a href="#" class="header__link header__link--active">teams</a>
          </li>
          <li class="nav-item">
            <a href="#" class="header__link header__link--active">works</a>
          </li>
          <li class="nav-item">
            <a href="#" class="header__link header__link--active">people say</a>
          </li>
          <li class="nav-item">
            <a href="#" class="header__link header__link--active">contact</a>
          </li>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: "Header__navbar"
}
</script>

<style scoped>
</style>