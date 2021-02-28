<template>
  <div class="header">
    <Header__navbar/>
    <b-container class="header__content text-center text-white">
      <b-row class="justify-content-center">
        <b-col cols="10" class="p-0 px-lg-3">
          <h2 class="header__heading heading">We Are Awesome Creative Agency</h2>
          <hr class="header__hr">
          <p class="header__text mb-0">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
            nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</p>
          <button class="button button--active text-uppercase mt-5">learn more</button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header__navbar from "@/components/Header/Header__navbar";

export default {
  name: 'Header',
  components: {
    Header__navbar
  }
}
</script>

<style scoped>

</style>
