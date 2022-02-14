import React from "react";
import Card from "./Card";

const cards = [
	{
		title: "Deep earth",
		image: "deep-earth",
	},
	{
		title: "Night arcade",
		image: "night-arcade",
	},
	{
		title: "Soccer team VR",
		image: "soccer-team",
	},
	{
		title: "The grid",
		image: "grid",
	},
	{
		title: "From up above VR",
		image: "from-above",
	},
	{
		title: "Pocket borealis",
		image: "pocket-borealis",
	},
	{
		title: "The curiosity",
		image: "curiosity",
	},
	{
		title: "Make it fisheye",
		image: "fisheye",
	},
];

const Cards = () => {
	return (
		<section className="flex w-full flex-col items-center">
			<div className="md:flex md:w-full md:items-center md:justify-between">
				<h1
					id="Careers"
					className="font-headers mb-12 md:mb-0 text-3xl font-light uppercase text-black md:text-5xl"
				>
					Our Creations
				</h1>

				{/* Desktop:See all button */}
				<a className="hidden cursor-pointer border border-black px-10 py-2 font-[Alata] text-lg font-normal uppercase tracking-[.2em] transition-all duration-200 ease-in-out hover:bg-black hover:text-white active:bg-black active:text-white md:block">
					See All
				</a>
			</div>

			<div className="w-full gap-8 space-y-8 md:space-y-0 px-6 md:grid md:grid-cols-4 md:grid-rows-2 md:px-0 md:my-16">
				{cards.map((card, index) => (
					<Card key={index} title={card.title} image={card.image} />
				))}
			</div>

			{/* Mobile:See All button */}
			<div className="my-12 md:hidden">
				<a className="cursor-pointer border border-black px-10 py-2 font-[Alata] text-lg font-normal uppercase tracking-[.2em] transition-all duration-200 ease-in-out hover:bg-black hover:text-white active:bg-black active:text-white">
					See All
				</a>
			</div>
		</section>
	);
};

export default Cards;
