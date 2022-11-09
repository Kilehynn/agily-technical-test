<template>
  <div class="current-weather-card">
    <div class="current-weather-card__header">
      <img :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`">
      <div class="current-weather-card__header__date">
        {{ getDate(weather.dt) }}
      </div>
    </div>
    <div class="current-weather-card__data">
      <div class="current-weather-card__data__day-temperature">
        Jour - {{ weather.temp.day.toFixed(1) }}°C
      </div>
      <div class="current-weather-card__data__pressure">
        Pression - {{ weather.pressure }}hPa
      </div>
      <div class="current-weather-card__data__night-temperature">
        Nuit - {{ weather.temp.night.toFixed(1) }}°C
      </div>
      <div class="current-weather-card__data__wind-speed">
        Vent - {{ (weather.wind_speed * 3.6).toFixed(1) }}km/h
      </div>
      <div class="current-weather-card__data__humidity">
        Humidité - {{ weather.humidity }}%
      </div>

    </div>

  </div>

</template>


<script lang="ts">
import Vue from 'vue'
import type {Weather} from "@/utils/types/weather";

export default Vue.extend({
  name: "CurrentWeatherCard",
  props: {
    weather: {
      type: Object as () => Weather,
      required: true
    }
  },
  methods: {
    getDate(dateUnix: number): string {
      const date = new Date(dateUnix * 1000);

      return date.toLocaleDateString('fr-FR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
      }).replace(/(^\w)|(\s+\w)/g, letter => letter.toUpperCase())
    }

  }
});
</script>

<style scoped lang="scss">

.current-weather-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  padding: 25px 40px 50px 25px;

  gap: 30px;

  color: white;

  background-color: var(--primary-color);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.current-weather-card__header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;

  & > img {
    width: 60px;
    height: 60px;
  }
}

.current-weather-card__header__date {
  font-size: 1.5rem;
  font-weight: 700;
}

.current-weather-card__data {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  font-size: 0.9em;

  font-weight: 550;
}

@media screen and (max-width: 768px) {
  .current-weather-card__data {
    font-size: 0.8em;
  }
  .current-weather-card {
    border-radius: 15px;
  }
}

</style>
