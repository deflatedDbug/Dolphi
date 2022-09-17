import type { NextPage } from "next";
import Head from "next/head";
import SideBar from "./components/SideBar";
import { useState } from "react";
import LoginPage from "./Login";

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
          <SideBar />
        </>
      )}
    </>
  );
};

export default Home;
