import React, { FC, HTMLAttributes, ReactNode } from "react";
import { Outlet } from "react-router-dom";

import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import s from "./MainLayout.module.scss";

interface IAuthLayoutProps extends HTMLAttributes<HTMLDivElement> {}

export const MainLayout: FC<IAuthLayoutProps> = ({ className }) => {
  return (
    <div className={s.root}>
      <Header />
      <Main className={className}>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
};
