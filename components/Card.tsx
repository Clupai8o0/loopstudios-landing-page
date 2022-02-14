import Image from "next/image";
import React from "react";

interface Props {
	title: string;
	image: string;
}

const Card = ({ title, image }: Props) => {
	return (
		<div className="cursor-pointer relative h-32 w-full md:h-[500px]">
			{/* Card Image */}
			<div className="relative h-full w-full">
				{/* Mobile:Card Image */}
				<Image
					src={`/mobile/image-${image}.jpg`}
					layout="fill"
					objectFit="cover"
					className="md:hidden"
				/>

				{/* Desktop:Card Image */}
				<Image
					src={`/desktop/image-${image}.jpg`}
					layout="fill"
					objectFit="cover"
					className="hidden md:block"
				/>
			</div>

			{/* overlay */}
			<div className="absolute top-0 left-0 z-10 h-full w-full bg-gradient-to-r md:bg-gradient-to-t from-black to-transparent text-white opacity-60 transition-all duration-200 ease-in-out hover:bg-white hover:bg-none hover:text-black">
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
