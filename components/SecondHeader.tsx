import Image from "next/image";

interface Iheader {
	type: string
}

export const SecondHeader = ({type}: Iheader) => {
  return (
    <header className="p-4">
      <p className="text-[rgb(66,66,66)]">IMDb Charts</p>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-[#424242] font-semibold text-2xl">
            IMDb Top 250 {type}
          </h2>
          <p className="font-[#666666]">
            IMDb Top 250 as rated by regular IMDb voters.
          </p>
        </div>
        <div>
          <Image
            className="cursor-pointer"
            src="/icons8-share-30.png"
            height={30}
            width={30}
            alt="share"
          />
          <h3>SHARE</h3>
        </div>
      </div>
    </header>
  );
};
