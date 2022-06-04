import { NextPage } from "next";
import Head from "next/head";
import { Header } from "../../components/Header";
const Products: NextPage = () => {
	return (
		<>
			<Head>
				<title>WC news | News</title>
			</Head>
			<Header />
			<h1>News</h1>
		</>
	);
};

export default Products;
