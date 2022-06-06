import { useRecoilState, useRecoilValue } from "recoil";
import { MovieCard } from "./MovieCard";
import { data, modal } from "./states";
import { movieCard } from "./MovieCard";
export const RenderMovies = () => {
  const list = useRecoilValue(data);
  const [modalbg, setModalbg] = useRecoilState(modal);

  const handleModal = () => {
    console.log(modalbg)
    setModalbg(!modalbg);
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-2 md:gap-2 md:grid-cols-2">
      {list.length !== 0 &&
        list.map((item: movieCard) => {
          return (
            <MovieCard
              onClick={handleModal}
              key={item.id}
              title={item.title}
              image={item.image}
              year={item.year}
              imDbRating={item.imDbRating}
              imDbRatingCount={item.imDbRatingCount}
              rank={item.rank}
            />
          );
        })}
    </div>
  );
};
