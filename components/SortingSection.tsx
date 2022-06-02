export const SortingSection = () => {
	return (
		<div className="flex justify-between items-center p-2">
			<p>Showing 250 Titles</p>
			<div>
				<label htmlFor="sortings">Sort by: </label>
				<select name="" id="sortings">
					<option value="ranking">Ranking</option>
					<option value="release">Release Date</option>
					<option value="rating">IMDB ratings</option>
					<option value="nbofratings">Number of ratings</option>
				</select>
			</div>
		</div>
	)
}