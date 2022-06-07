import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useRecoilState } from "recoil";
import { modal, url } from "./utils/states";

interface Props {
  children: ReactNode;
  open: boolean;
}
export const Modal = ({ children, open }: Props) => {
  const [isBrowser, setIsBrowser] = useState<boolean>(false);
  const [openModal, setopenModal] = useRecoilState(modal);
  const [fullUrl, setfullUrl] = useRecoilState(url);

  useEffect(() => {
    if (open) {
      setIsBrowser(true);
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "scroll";
  }, [open]);
  const handleModal = () => {
    console.log("test");
    setopenModal(false);
    setfullUrl("");
  };
  if (!open) return null;
  return createPortal(
    <div className="bg-[rgba(0,0,0,0.7)] fixed w-full min-h-full flex flex-col justify-center items-center top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[1000]">
      <button
        className="px-4 py-1 mb-4 text-white bg-zinc-900"
        onClick={handleModal}
      >
        Close
      </button>
      {children}
    </div>,
    document.getElementById("__next")!
  );
};
