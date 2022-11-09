<template>
  <div class="container">
    <div class="main">
      <h1>The Forecast<br>Weather App</h1>
      <div class="search-city">
        <input v-model="city" placeholder="Search">
        <button @submit="onCitySubmitted" class="search-city-submit" type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <script xmlns=""/>
            <path fill="none" stroke="#000" stroke-width="36" stroke-linecap="round"
                  d="m280,278a153,153 0 1,0-2,2l170,170m-91-117 110,110-26,26-110-110"/>
          </svg>
        </button>
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


.search-city {

  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: min-content;
}

.search-city-submit {
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  top: 55%;
  right: 5px;
  transform: translateY(-50%);
  position: absolute;

  & svg {
    width: 20px;
    height: 20px;
  }
}
</style>
