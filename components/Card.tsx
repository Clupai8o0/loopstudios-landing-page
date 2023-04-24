import Image from "next/image";
import React from "react";

interface Props {
	title: string;
	image: string;
	alt: string;
}

const Card = ({ title, image, alt }: Props) => {
	return (
		<div className="relative h-32 w-full cursor-pointer md:h-[500px]">
			{/* Card Image */}
			<div className="relative h-full w-full">
				{/* Mobile:Card Image */}
				<Image
					src={`/mobile/image-${image}.jpg`}
					alt={`mobile ${alt}`}
					layout="fill"
					objectFit="cover"
					className="md:hidden"
				/>

				{/* Desktop:Card Image */}
				<Image
					src={`/desktop/image-${image}.jpg`}
					alt={`desktop ${alt}`}
					layout="fill"
					objectFit="cover"
					className="hidden md:block"
				/>
			</div>

			{/* overlay */}
			<div className="absolute top-0 left-0 z-10 h-full w-full bg-gradient-to-r from-black to-transparent text-white opacity-60 transition-all duration-200 ease-in-out hover:bg-white hover:bg-none hover:text-black md:bg-gradient-to-t">
				{/* Overlay text */}
				<div className="flex h-full w-3/4 items-end pl-5 pb-5 md:pl-8 md:pb-8">
					<h1 className="font-headers text-2xl font-light uppercase leading-6 md:text-4xl">
						{title}
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Card;
