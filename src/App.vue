<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  created() {
    this.service.getGood().then(res => console.log(res));
  }
};
</script>

<style></style>
