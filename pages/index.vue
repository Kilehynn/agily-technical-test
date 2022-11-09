<template>
  <div class="container">
    <div class="main">
      <h1>The Forecast<br>Weather App</h1>
      <form class="search-city"  @submit="onCitySubmitted">
        <input v-model="city" placeholder="Search" type="search">
        <button class="search-city-submit" type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <script xmlns=""/>
            <path fill="none" stroke="#000" stroke-width="36" stroke-linecap="round"
                  d="m280,278a153,153 0 1,0-2,2l170,170m-91-117 110,110-26,26-110-110"/>
          </svg>
        </button>
      </form>
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
  },
  methods : {
    onCitySubmitted(event: Event) {
      event.preventDefault();
      this.$router.push({ name : 'city', params :  {city : this.$data.city } });
    }
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
  .search-city > input {
    width: 35em;
  }
}

.search-city{
  position: relative;
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
