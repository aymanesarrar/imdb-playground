import { ImdbLogo } from "./ImdbLogo";
import { useRecoilState, useRecoilValue } from "recoil";
import { inputState, Titletype } from "./utils/states";
export const Header = () => {
  const [name, setName] = useRecoilState(inputState);
  return (
    <header className=" bg-[#121212]">
      <div className="flex p-2 items-center lg:max-w-7xl lg:mx-auto lg:justify-center">
        <ImdbLogo className="cursor-pointer hover:scale-105 hover:translate-x-1 transition-all duration-200" />
        <input
          type="text"
          placeholder="search in IMDB"
          className="mx-5 w-1/2 p-2 rounded-xl outline-none input-icon"
          onChange={(e) => setName(e.target.value)}
        />
        <div className="border-r-2 border-zinc-400">|</div>
        <h3 className="text-white ml-5 font-bold">Log In</h3>
      </div>
    </header>
  );
};
