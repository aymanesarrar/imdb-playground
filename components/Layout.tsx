import * as React from "react";
import { Header } from "./Header";
import { SecondHeader } from "./SecondHeader";
import { SortingSection } from "./SortingSection";
interface Props {
  children: React.ReactNode;
}
export const Layout = ({ children }: Props) => {
  
  return (
    <main className="md:max-w-7xl lg:max-w-7xl lg:mx-auto grid grid-cols-1">
      
      <SecondHeader />
      <hr/>
      <SortingSection />
      {children}
    </main>
  );
};
