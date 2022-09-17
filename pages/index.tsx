import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SideBar from "./components/SideBar";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Dolphi</title>
    </Head>
    <SideBar />
  </>
);

export default Home;
