import {defineStore} from 'pinia';
import {ref, computed} from 'vue';
import { useMovieStore } from '../stores/MovieStore';
const url ="https:api.themoviedb.org/3/search/movie?api_key=02708c4929ad93aa5e68f8ee7bfa4445&query=";

export const useSearchStore = defineStore('searchStore', () =>{
	const movies = ref([]);
	const loader = ref(false);

	const getMovies = async (search) => {
		loader.value = true;
		const res = await fetch(`${url}${search}`);
		const data = await res.json();
		movies.value = data.results;
		loader.value = false;
	};
	const addToUseMovies = (obj) => {
		const movieStore = useMovieStore();
		movieStore.movies.value.push({...obj, isWathed: false});
		movieStore.activeTab = 1;
	};



	return {
		movies,
		getMovies,
		addToUseMovies,
	}
});