

<template>
  <div>
    <header class="header">
      <img src="/img/icons/logo.svg" alt="" class="header__logo">
      <h2 class="header__title">My Favorite Movies</h2>
    </header>
    <div class="tabs">
      <button :class="['btn', {btn_green: movieStore.activeTab === 1}]" @click="movieStore.setActiveTab(1)" >Favorite</button>
      <button :class="['btn', {btn_green: movieStore.activeTab === 2}]" @click="movieStore.setActiveTab(2)" >Search</button>
    </div>
    <main>
      <div v-if="movieStore.activeTab === 1" class="movies">
        <div>
          <h3>Watched Movies (count: {{ movieStore.watchedMovies.length }})</h3>
          <Movie 
            v-for="movie in movieStore.watchedMovies"
            :key="movie.id"
            :movie="movie"
          />
        </div>
        <h3>All Movies (count: {{ movieStore.movies.length }})</h3>
        <Movie 
          v-for="movie in movieStore.movies"
          :key="movie.id"
          :movie="movie"
        />
    </div>
    <div v-if="movieStore.activeTab === 2" class="search">
      <Search/>
    </div>
    </main>
  </div>
</template>

<script setup>
import { useMovieStore } from './stores/MovieStore.js';
import Search from './components/Search.vue';
import Movie from './components/Movie.vue';
const movieStore = useMovieStore();

</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  &__logo {
  max-width: 50px;
  margin-right: 10px;
  }
  &__title{
    font-size: 28px;

  }
}

main h3, .search{
  margin: 0 0 20px 0;
  font-size: 24px;
  font-weight: 800;
}

.btn {
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background: #efefef;
  transition: all 0.4s ;
}
.btn:hover {
  opacity: 0.7;
}
.btn_green {
  background: #37df5c;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
