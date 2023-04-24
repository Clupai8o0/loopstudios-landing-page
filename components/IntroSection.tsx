import Image from "next/image";
import React from "react";

const IntroSection = () => {
	return (
		<section className="flex flex-col items-center px-6 py-24 md:flex-row md:px-0 md:py-48">
			{/* Section image */}
			<div className="relative mb-10 h-[200px] w-full md:h-[500px] md:w-[60%]">
				{/* Mobile:Section Image */}
				<Image
					src="/mobile/image-interactive.jpg"
					alt="mobile intro section image of a man wearing vr headset, playing, with his arms up like hes about to attack"
					layout="fill"
					objectFit="cover"
					className="md:hidden"
				/>

				{/* Desktop:Section Image */}
				<Image
					src="/desktop/image-interactive.jpg"
					alt="desktop intro section image of a man wearing vr headset, playing, with his arms up like hes about to attack"
					layout="fill"
					objectFit="cover"
					className="hidden md:block"
				/>
			</div>

			{/* Section details */}
			<div className="h-full w-[90%] text-center md:w-[40%]">
				<div className="md:relative md:top-28 md:-left-28 md:w-[120%] md:bg-white md:px-20 md:py-20 md:text-left">
					{/* Section title */}
					<h1
						id="About"
						className="mb-4 font-headers text-3xl uppercase text-black md:text-4xl"
					>
						The leader in interactive VR
					</h1>

					{/* Section para */}
					<p className="font-[Alata] text-[15px] font-normal opacity-50">
						Founded in 2011, Loopstudios has been producing world-class virtual
						reality projects for some of the best companies around the globe.
						Our award-winning creations have transformed businesses through
						digital experiences that bind to their brand.
					</p>
				</div>
			</div>
		</section>
	);
};

export default IntroSection;
