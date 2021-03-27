<template>
  <b-container fluid="" class="team bg inserts text-white">
    <b-row class="justify-content-center">
      <b-col cols="12" class="text-center">
        <h2 class="heading heading-page heading-margin text-uppercase">meet our amazing team</h2>
        <p class="team__heading-text">Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
        <hr class="team__hr hr">
      </b-col>
      <b-container class="p-0">
        <b-row class="team__item-margin">
          <b-col class="text-center"
                 cols="12"
                 lg="3"
                 sm="6"
                 v-for="item in this.$store.getters.getTeamItems"
                 :key="item.heading">
            <template class="team__item">
              <div :style="{ background: 'url(' + item.img + ')'}" style="height: 229px"></div>
              <div class="team__item-text">
                <h2 class="team__item-heading text-uppercase">{{ item.heading }}</h2>
                <p class="text team__item-title text-uppercase">{{ item.subHeading }}</p>
              </div>
            </template>
          </b-col>
        </b-row>
      </b-container>
      <b-col cols="12" class="text-center">
        <p class="team__footer-text">Become part of our dream team, let’s join us !</p>
        <button class="button button--active text-uppercase">we are hiring</button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Team"
}
</script>

<style scoped>

</style>