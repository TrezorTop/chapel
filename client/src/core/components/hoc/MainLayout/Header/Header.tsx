import React from "react";
import { useNavigate } from "react-router-dom";

import { AUTH_URL, CREATOR_URL, MAIN_URL, PROFILE_URL } from "../../../../utils/consts";
import { removeAuthTokens } from "../../../../utils/functions/auth";
import { Button } from "../../../kit/Button/Button";
import s from "./Header.module.scss";

export const Header = () => {
  const navigate = useNavigate();

  // const { mutate } = usePing();

  return (
    <div className={s.root}>
      <div className={s.content}>
        <div className={s.container}>
          <Button
            variant="text"
            onClick={() => {
              navigate(MAIN_URL);
            }}
          >
            MAIN
          </Button>
          <Button variant="contained">ping server</Button>
        </div>
        <div className={s.container}>
          <Button
            variant="text"
            onClick={() => {
              navigate(CREATOR_URL);
            }}
          >
            Creator Panel
          </Button>
          <Button
            variant="text"
            onClick={() => {
              navigate(PROFILE_URL);
            }}
          >
            Profile
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              // navigate(AUTH_URL);
              navigate(AUTH_URL, { state: { email: "hello, I'm an email" } });
              removeAuthTokens();
            }}
          >
            Log out
          </Button>
        </div>
      </div>
    </div>
  );
};
