<template>
  <b-container fluid class="video inserts-video text-center text-white">
    <b-row
        class="justify-content-center cursor-pointer"
        @click="$bvModal.show('video-modal')"
    >
      <b-col cols="12" class="justify-content-center d-flex video-icon-margin">
        <div class="video-icon"></div>
      </b-col>
      <b-col cols="12">
        <h2 class="text-uppercase video-font">
          watch our story
        </h2>
      </b-col>
    </b-row>

    <b-modal id="video-modal" hide-footer hide-header no-fade body-class="p-0" size="xl" centered>
        <b-embed
            class="bg-dark p-0"
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/KvUgaHTNit4"
            allowfullscreen
        ></b-embed>
    </b-modal>
  </b-container>
</template>

<script>
export default {
  name: "Video"
}
</script>

<style scoped>

</style>