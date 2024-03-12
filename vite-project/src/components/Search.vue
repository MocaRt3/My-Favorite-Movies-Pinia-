<template>
	<div>
		<form class="search" @submit.prevent="searStore.getMovies(SearchMovie)" >
			<input 
				class="search__input" 
				placeholder="Search movie"
				v-model="SearchMovie" 
				type="text" 
			>
		</form>
		<Loader v-if="SearchMovie.loader"/>
		<div v-else>
			<Movie v-for="movie in searStore.movies" :key="movie.id" :movie="movie" :isSearch="true"/>
		</div>
	</div>
</template>

<script setup>
import {ref} from 'vue';
import { useSearchStore } from '../stores/SearchStore';
import Loader from '../components/Loader.vue';
import Movie from '../components/Movie.vue';
const searStore = useSearchStore();
const SearchMovie  = ref('')
</script>

<style lang="scss" scoped>
.search{
	&__input{
		border: 1px solid #adacac;
		width: 100%;
		height: 40px;
		padding: 0 10px;
		margin-bottom: 20px;
		border-radius: 10px;
		
	}
	&__input:focus{
		border: 2px solid #145f26;
	}

}
</style>