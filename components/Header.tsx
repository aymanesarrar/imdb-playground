import { ImdbLogo } from "./ImdbLogo";

export const Header = () => {
  return (
    <header className=" bg-[#121212]">
      <div className="flex p-2 items-center lg:max-w-7xl lg:mx-auto lg:justify-center">
        <ImdbLogo />
        <input
          type="text"
          placeholder="search in IMDB"
          className="mx-5 w-1/2 p-2 rounded-xl outline-none"
        />
        <div className="border-r-2 border-zinc-400">|</div>
        <h3 className="text-white ml-5 font-bold">Log In</h3>
      </div>
    </header>
  );
};
