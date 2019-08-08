<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  created() {
    this.api.getSeller().then(res => console.log(res));
  }
};
</script>

<style></style>
