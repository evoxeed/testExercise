<template>
  <div id="app">
    <Header/>
    <OurStory/>
    <Video/>
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import OurStory from "@/components/Context/About/OurStory";
import Video from "@/components/Context/About/Video";


export default {
  components: {
    Video,
    OurStory,
    Header,
  }
}
</script>