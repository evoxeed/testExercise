<template>
  <div class="bg-header">
    <Navbar></Navbar>
    <b-container class="text-center text-white splash">
      <h2 class="headingTwoCustom">We Are Awesome Creative Agency</h2>
      <hr>
      <p class="px-lg-5">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
        lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
        nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</p>
      <button class="text-uppercase mt-5">learn more</button>
    </b-container>
  </div>
</template>

<script>
import Navbar from "@/components/Header/Navbar";

export default {
  name: 'Header',
  components: {
    Navbar
  }
}
</script>

<style scoped>

</style>
