import * as React from "react";
import { Header } from "./Header";
interface Props {
  children: React.ReactNode;
}
export const Layout = ({ children }: Props) => {
  return (
    <main className="grid grid-cols-1 h-full bg-black">
      <Header />
      {children}
    </main>
  );
};
