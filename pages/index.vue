<template>
  <div class="container">
    <div class="main">
      <h1>The Forecast<br>Weather App</h1>
      <div class="search-city">
        <input v-model="city" placeholder="Search">
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name : 'IndexPage',
  data() {
    return {
      city : ''
    };
  }
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

.search-city > input {
  width: 20em;
  height: 50px;
  color: var(--primary-color);
  font-family: 'Poppins Black', sans-serif;
  padding: 15px;
  border-radius: 15px;

  border: none;
  outline: none;

  font-weight: 700;

  &::placeholder {
    color: var(--primary-color);
  }
}


@media screen and (min-width: 481px) {
  input {
    width: 35em;
  }
}
</style>
