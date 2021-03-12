<template>
  <div class="">
    <h1 v-text="items.text"></h1>
  </div>
</template>

<script>
export default {
  props: ['itemProps'],
  name: "itemExpertise",
  data() {
    return {
      items: '',
    }
  },
  mounted() {
    this.items = this.itemProps
    console.log(this.itemProps)
  }
}
</script>

<style scoped>

</style>