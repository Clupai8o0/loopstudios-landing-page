import Head from "next/head";

//* components
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import IntroSection from "../components/IntroSection";
import Cards from "../components/Cards";

export default function Home() {
	return (
		<div className="max-w-screen h-screen w-screen overflow-x-hidden scroll-smooth">
			<Head>
				<title>Loopstudios Landing Page</title>
				<link rel="icon" href="/favicon-32x32.png" />

				{/* Fonts */}
				<link
					href="https://fonts.googleapis.com/css?family=Alata:regular"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css?family=Josefin+Sans:300"
					rel="stylesheet"
				/>
			</Head>

			<header className="relative">
				<Nav />
				<Hero />
			</header>

			<div className="w-full md:flex md:flex-col md:items-center">
				<main className="max-w-7xl">
					<IntroSection />
					<Cards />
				</main>
			</div>

			<Footer />
		</div>
	);
}
