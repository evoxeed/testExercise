<template>
  <div id="app">
    <Header/>
    <OurStory/>
    <Video/>
    <Expertise/>
    <Team/>
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import OurStory from "@/components/Context/About/OurStory";
import Video from "@/components/Context/About/Video";
import Expertise from "@/components/Context/Expertise/Expertise";
import Team from "@/components/Context/Team/Team";


export default {
  components: {
    Team,
    Expertise,
    Video,
    OurStory,
    Header,
  }
}
</script>