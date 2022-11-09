<template>
  <div class="container">
    <div class="main">
      <h1>The Forecast<br>Weather App</h1>

    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name : 'IndexPage',

});
</script>

<style lang="scss" scoped>
.container {
  background-color: var(--primary-color);
}

.main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 35px;
}
h1 {
  background: -webkit-linear-gradient(#25c25c, #e6e99f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}





</style>
