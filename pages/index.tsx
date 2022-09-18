import type { NextPage } from "next";
import Head from "next/head";
import Main from "./components/Main";
import { useState } from "react";
import LoginPage from "./components/Login";

const Home: NextPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      {!loggedIn && <LoginPage loggedInFunc={setLoggedIn} />}
      {loggedIn && (
        <>
          <Head>
            <title>Dolphi</title>
          </Head>
          <Main />
        </>
      )}
    </>
  );
};

export default Home;
