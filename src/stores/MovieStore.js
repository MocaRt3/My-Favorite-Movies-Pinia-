import {defineStore} from 'pinia';
import {ref, computed, watch} from 'vue';

export const useMovieStore = defineStore('movieStore', () => {
	const movies = ref([
		{
		  id: 1,
		  original_title: "Spider-Man",
		  overview:
			"After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers to become the superhero known as Spider-Man.",
		  poster_path: "/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg",
		  release_date: "2002-05-01",
		  isWatched: false,
		},
		{
		  id: 2,
		  original_title: "The Batman",
		  overview:
			"In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
		  poster_path: "/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
		  release_date: "2022-03-01",
		  isWatched: true,
		},
	  ]);

	  const movieOnLocaleStorage = localStorage.getItem('movies');
	  if(movieOnLocaleStorage){
		movies.value = JSON.parse(movieOnLocaleStorage).value
	  }

	  watch(() => movies, (state) => {
		localStorage.setItem('movies', JSON.stringify(state));
	  }, {deep: true});

	  const activeTab = ref(2);
	  const watchedMovies = computed(()=> {return movies.value.filter(i=>i.isWatched)});
	  const setActiveTab = id => activeTab.value = id;
	  const toggleWatched = id => {
		const idx = movies.value.findIndex(el=> el.id === id);
		movies.value[idx].isWatched = !movies.value[idx].isWatched;
	  };
	  const deleteMovies = id => movies.value = movies.value.filter(i=> i.id !== id)

	return {
		movies,
		activeTab,
		watchedMovies,
		setActiveTab,
		toggleWatched,
		deleteMovies,
	}
});