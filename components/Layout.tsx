import * as React from "react";
import { Header } from "./Header";
import { SecondHeader } from "./SecondHeader";
import { SortingSection } from "./SortingSection";
import {useRecoilValue} from 'recoil'
import { Titletype } from "./utils/states";
interface Props {
  children: React.ReactNode;
}
export const Layout = ({ children }: Props) => {
  const type = useRecoilValue(Titletype);
  return (
    <main className="md:max-w-7xl lg:max-w-7xl lg:mx-auto grid grid-cols-1">
      
      <SecondHeader type={type}/>
      <hr/>
      <SortingSection />
      {children}
    </main>
  );
};
