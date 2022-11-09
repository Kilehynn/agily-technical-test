<template>
  <div class="weather-card">
    <img :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`">
    <div class="weather-card__date">
      <div class="weather-card__date_day-of-week">
        {{ getWeekDay(weather.dt) }}
      </div>
      <div class="weather-card__date_day">
        {{ getDate(weather.dt) }}
      </div>
    </div>
    <div class="weather-card__temperature">
      {{ ((weather.temp.max + weather.temp.min) / 2).toFixed(0)}}°C
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type {Weather} from "@/utils/types/weather";

export default Vue.extend({
  name: "WeatherCard",
  props: {
    weather: {
      type: Object as () => Weather,
      required: true
    }
  },
  methods: {
    getWeekDay(dateUnix: number): string {
      const date = new Date(dateUnix * 1000);

      return date.toLocaleDateString('fr-FR', {weekday: 'long'}).replace(/(^\w)|(\s+\w)/g, letter => letter.toUpperCase());
    },
    getDate(dateUnix: number): string {
      const date = new Date(dateUnix * 1000);

      return date.toLocaleDateString('fr-FR', {day: 'numeric', month: 'long'}).replace(/(^\w)|(\s+\w)/g, letter => letter.toUpperCase());
    }
  }

});
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins');

.weather-card {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: var(--primary-color);

  border-radius: 15px;
  color: white;

  padding: 0 16px 0 8px;
  gap: 30px;
  transition: 1s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

}

.weather-card > img {
  width: 60px;
  height: 60px;
}

.weather-card__date {
  text-align: center;
}

.weather-card__date_day {
  font-size: 0.8em;
}

.weather-card__date_day-of-week {
  font-size: 1.2em;
  font-weight: 800;
}

.weather-card__temperature {
  font-size: 2.5em;
  font-weight: 800;
}
</style>
