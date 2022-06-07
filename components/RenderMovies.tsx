import { useRecoilState, useRecoilValue } from "recoil";
import { MovieCard } from "./MovieCard";
import { data, id, modal, url } from "./utils/states";
import { movieCard } from "./MovieCard";
import { useEffect } from "react";
import { Video } from "./Video";
import { Modal } from "./Modal";
export const RenderMovies = () => {
  const list = useRecoilValue(data);
  const [modalbg, setModalbg] = useRecoilState(modal);
  const [fullUrl, setfullUrl] = useRecoilState(url);
  const [Idmov, setIdmov] = useRecoilState(id);
  useEffect(() => {
    const geturl = async () => {
      const info = await fetch(
        `https://imdb-api.com/en/API/YouTubeTrailer/k_x8zwoo7z/${Idmov}`
      );
      const data = await info.json();
      setfullUrl(data.videoId);
    };
    geturl();
  }, [Idmov]);
  const handleModal = (movid: string) => {
    setIdmov(movid);
    setModalbg(!modalbg);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-2 md:gap-2 md:grid-cols-2">
      <Modal open={modalbg}>
        <Video id={fullUrl} />
      </Modal>
      {list.length !== 0 &&
        list.map((item: movieCard) => {
          return (
            <MovieCard
              onClick={() => handleModal(item.id!)}
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
