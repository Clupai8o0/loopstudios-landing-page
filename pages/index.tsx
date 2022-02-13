import Head from "next/head";
import Image from "next/image";

//* components
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Home() {
	return (
		<div className="max-w-screen h-screen w-screen overflow-x-hidden">
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

				{/* Hero */}
				<div>
					{/* hero image */}
					<div className="relative h-[650px] w-full sm:h-[750px]">
						{/* mobile:hero image */}
						<div className="sm:hidden">
							<Image
								src="/mobile/image-hero.jpg"
								layout="fill"
								objectFit="cover"
							/>
						</div>

						{/* desktop:hero image */}
						<div className="hidden sm:flex">
							<Image
								src="/desktop/image-hero.jpg"
								layout="fill"
								objectFit="cover"
							/>
						</div>
					</div>

					{/* Hero title */}
					<div className="absolute top-0 left-0 flex h-[650px] w-full sm:w-1/2 items-center px-6 sm:px-40 sm:h-[750px]">
						<div className="border-2 border-white p-6 sm:p-8">
							<h1 className="font-headers text-4xl sm:text-5xl uppercase text-white">
								Immersive experiences that deliver
							</h1>
						</div>
					</div>
				</div>
			</header>

			<main></main>

			{/* <Footer /> */}
		</div>
	);
}
