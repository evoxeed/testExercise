<template>
  <div id="app">
    <Header/>
    <OurStory/>
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import OurStory from "@/components/Context/About/OurStory";


export default {
  components: {
    OurStory,
    Header,
  }
}
</script>