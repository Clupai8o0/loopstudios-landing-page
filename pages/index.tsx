import { useState } from "react";
import Head from "next/head";

//* components
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import IntroSection from "../components/IntroSection";
import Cards from "../components/Cards";

export default function Home() {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<div
			className={`max-w-screen h-screen w-screen overflow-x-hidden ${
				showMenu && "overflow-y-hidden"
			} scroll-smooth`}
		>
			<Head>
				<meta charSet="UTF-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				></meta>
				<meta
					name="description"
					content="Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand."
				/>

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

			<section className="relative">
				<Nav showMenu={showMenu} setShowMenu={setShowMenu} />
				<Hero />
			</section>

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
