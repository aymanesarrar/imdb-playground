import Image from "next/image";
import Link from "next/link";
import { MouseEventHandler } from "react";
import { useRecoilState } from "recoil";
import { modal } from "./utils/states";

export interface movieCard {
  id?: string;
  rank: number;
  title: string;
  year: number;
  image: string;
  imDbRating: number;
  imDbRatingCount: number;
  onClick: MouseEventHandler;
}
export const MovieCard = ({
  rank,
  title,
  year,
  image,
  imDbRating,
  imDbRatingCount,
  onClick,
}: movieCard) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-between p-3 transition-all cursor-pointer hover:bg-zinc-400 hover:translate-y-1 hover:scale-105 duration-200"
    >
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
