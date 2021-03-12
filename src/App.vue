<template>
  <div id="app">
    <Header/>
    <OurStory/>
    <Video/>
    <Expertise/>
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import OurStory from "@/components/Context/About/OurStory";
import Video from "@/components/Context/About/Video";
import Expertise from "@/components/Context/Expertise/Expertise";


export default {
  components: {
    Expertise,
    Video,
    OurStory,
    Header,
  }
}
</script>