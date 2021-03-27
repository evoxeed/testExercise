<template>
  <b-container class="inserts">
    <b-row class="justify-content-center">
      <b-col cols="12" class="text-center">
        <h2 class="heading heading-page heading-margin text-uppercase">Expertise</h2>
        <p class="expertise__heading-text">Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
        <hr class="expertise__hr hr">
      </b-col>
    </b-row>
    <b-row>
      <b-col class="border-items p-0 text-center"
             cols="12"
             lg="4"
             v-for="item in this.$store.getters.getExpertiseItems"
             :key="item.heading">
        <div class="expertise__item">
          <div :class="item.icon" class="mx-auto expertise__item-icon"></div>
          <h2 class="expertise__item-heading expertise__item-heading-margin text-uppercase">{{ item.heading }}</h2>
          <p class="text expertise__item-text">{{ item.text }}</p>
        </div>

      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Expertise",
}
</script>

<style scoped>

</style>