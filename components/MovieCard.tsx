import Image from "next/image";
import Link from "next/link"
export interface movieCard {
  id?: string;
  rank: number;
  title: string;
  year: number;
  image: string;
  imDbRating: number;
  imDbRatingCount: number;
}
export const MovieCard = ({
  rank,
  title,
  year,
  image,
  imDbRating,
  imDbRatingCount,
}: movieCard) => {
  return (
    <div className="flex items-center p-3 justify-between hover:bg-zinc-400 cursor-pointer transition-all">
      <div className="flex items-center w-1/2">
        <Image src={image} width={45} height={67} alt={title} />
        <p className="ml-2 font-bold">
          {rank}. {title} ({year})
        </p>
      </div>
      <div className="flex items-center justify-center font-bold">
        <Image
          src="/icons8-star-48.png"
          height={25}
          width={25}
          alt="star icon"
        />
        <p>{imDbRating}</p>
      </div>
      <p className="font-semibold">{imDbRatingCount}</p>
    </div>
  );
};
