import type { NextPage } from "next";
import Head from "next/head";
import { ButtonSubscribe } from "../components/ButtonSubscribe";
import { Header } from "../components/Header";
import styles from "./index.module.scss";
const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>WC News</title>
			</Head>
			<Header />
			<main className={styles.mainContainer}>
				<section className={styles.sectionContent}>
					<span>👏 Hey, welcome!</span>
					<h1>
						News About the best of global <span>politics</span> and a lot of{" "}
						<span>humors</span>{" "}
					</h1>
					<p>
						Get access to all the publications <br />
						<span>for only $2.99 month</span>
					</p>
					<div className={styles.Button}>
						<ButtonSubscribe />
					</div>
				</section>

				<img src="/images/avatar.png" alt="Global" />
			</main>
		</>
	);
};

export default Home;
