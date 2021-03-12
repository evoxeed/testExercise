<template>
  <b-container class="about inserts">
    <b-row>
      <b-col cols="12" lg="5" class="text-center pb-5 pb-lg-0">
        <img class="about__image" :src="require('@/assets/img/about.png')" alt="about our story">
      </b-col>
      <b-col cols="12" lg="7" >
        <h2 class="about__heading-margin heading heading-page text-uppercase">
          our story
        </h2>
        <p class="text about__text">
          This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
          lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
          nibh vulputate cursus
          <br>
          <br>
          Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat
          consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos.
        </p>
        <button class="button button--active text-uppercase mt-2">learn more</button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Our-story"
}
</script>

<style scoped>

</style>