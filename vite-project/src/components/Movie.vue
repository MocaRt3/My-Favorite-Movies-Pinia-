<template>
	<div>
		<div class="movie">
			<img :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`" :alt="movie.original_title"
				class="movie__img">
			<div>
				<div class="movie__name">
					{{ movie.original_title }} ({{ movie.release_date }})
					<span class="movie__overview">{{ movie.overview }}</span>
				</div>
				<div class="movie__buttons">
					<button class="btn movie__buttons-watched">
						<span v-if="!movie.isWatched">Watched</span>
						<span v-else>Unwatched</span>
					</button>
					<button class="btn movie__buttons-delete">Delete</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	movie: {
		type: Object,
		required: true,
		default: () => { },
	}
});

</script>

<style lang="scss" scoped>
.movie {
	display: grid;
	grid-template-columns: 200px 1fr;
	column-gap: 30px;
	margin-bottom: 20px;
	border: 2px solid #efefef;
	padding: 10px;
	border-radius: 10px;

	&__img {
		width: 200px;
		height: 200px;
		object-fit: cover;
		border-radius: 50%;
	}

	&__name {

		align-items: center;
		font-size: 20px;
		margin-bottom: 20px;
		font-weight: 800;
	}

	&__overview {
		font-weight: 400;
		display: block;
		margin-top: 20px;
	}

	&__buttons {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	&__buttons-watched {
		color: #fff;
		background: #1eb4c3;
	}

	&__buttons-delete {
		color: #fff;
		background: #ff2a2a;
	}
}

.btn {
	border: none;
	width: 100px;
	height: 40px;
	margin: 0 10px;
	font-size: 14px;
	border-radius: 15px;
	transition: all 0.4s;
}



.btn:hover{
	transform: scale(110%);
}


.movie-accept {
	margin-right: 10px;
}











.movie-buttons-watched__icon {
	width: 15px;
	margin-left: 10px;
}
</style>