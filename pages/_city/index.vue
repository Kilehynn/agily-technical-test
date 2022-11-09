<template>
  <div
    :style="{background: `url(${photo})`, backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', backgroundPosition:'center'}"
    class="container">
    <div class="main">
      <div class="left">
        <NuxtLink to="/" class="back">
          ←
        </NuxtLink>
        <CurrentWeatherCard :weather="selectedCard" @click:.native="() => switchSelectedDay(selectedCard)"/>
      </div>
      <div class="right">
        <WeatherCard v-for="weather in daily"  :key="weather.dt" :weather="weather" @click:.native="() => switchSelectedDay(weather)"/>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type {Location} from '@/utils/types/location'
import type {Weather} from "@/utils/types/weather";

export default Vue.extend({
  name: 'CityPage',
  async asyncData({params, error}) {
    const city = params.city
    const handleError = (err: string) => {
      error({statusCode: 404, message: err})
    }

    const locationFromCity = await fetch(`http://api.weatherstack.com/current?access_key=7a0fa8ca744af6d18c0976bf836ccb65&query=${city}`);
    if (locationFromCity.status !== 200) {
      return handleError('Location not found')
    }

    const {location}: { location: Location } = await locationFromCity.json()

    if (location === undefined || location === null) {
      return handleError('Location not found')
    }

    const weatherFromLocation = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&exclude=current,minutely,hourly,alerts&appid=db988691faf182dfc3750cd1e57f3718&units=metric`);

    if (weatherFromLocation.status !== 200) {
      return handleError('Weather not found')
    }
    let {daily}: { daily: Weather[] } = await weatherFromLocation.json()

    const currentWeather = daily[0]
    daily = daily.slice(1)

    const urlFlickr = `https://www.flickr.com/services/rest/?method=flickr.photos.search&tags=${city.toLowerCase().trim()}&text=${city.toLowerCase().trim()}&format=json&nojsoncallback=1&orientation=landscape&per_page=1&sort=relevance&content_types=0&page=1&extras=url_sq,url_t,url_s,url_q,url_m,url_n,url_z,url_c,url_l,url_o&api_key=e7a86583246b241ee759751bbdd7f410`

    const flickrPictures = await fetch(urlFlickr)
    if (flickrPictures.status !== 200) {
      return handleError(`Picture from ${city} not found`)
    }
    const {photos} = await flickrPictures.json()

    if (photos.length === 0) {
      return handleError(`Picture from ${city} not found`)
    }

    const photo = photos.photo[0].url_l

    return {currentWeather, daily, photo, selectedCard: currentWeather}
  },
  data() {
    return {
      daily: [] as Weather[],
      currentWeather: {} as Weather,
      photo: '' as string,
      selectedCard: {} as Weather
    }
  },
  methods: {
    switchSelectedDay(day: Weather) {
      if (day.dt === this.$data.selectedCard.dt) {
        this.selectedCard = this.currentWeather
      }
      else {
        this.selectedCard = day
      }
    }
  },

})
</script>

<style scoped lang="scss">

.container {
  background-color: white;
  overflow: scroll;
}

.main {
  width: 100%;
  height: 100%;
  display: flex;
  padding-right: 35px;
  padding-left: 35px;
  justify-content: space-between;
  align-items: center;
}


.back {
  width: 64px;
  height: 64px;
  padding-top: 16px;
  padding-left: 18px;
  background-color: var(--primary-color);
  color: white;
  font-size: 2em;
  line-height: 1em;
  border-radius: 50%;
  text-decoration: none;
}

.right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  padding: 30px 0;
}

.left {

  display: flex;
  height: 100%;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 35px;
}


@media screen and (max-width: 768px) {
  .main {
    flex-direction: column;
  }
  .right {
    width: 100%;
  }

  .left {
    gap: 20px;
  }
}

</style>
