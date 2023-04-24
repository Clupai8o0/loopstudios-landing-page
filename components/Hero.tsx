import Image from "next/image";
import React from "react";

const Hero = () => {
	return (
		<div>
			{/* hero image */}
			<div className="relative h-[650px] w-full md:h-[750px]">
				{/* mobile:hero image */}
				<div className="md:hidden">
					<Image
						src="/mobile/image-hero.jpg"
						alt="mobile hero image of a girl wearing vr headset and playing car racing game using car racing equipment"
						layout="fill"
						objectFit="cover"
					/>
				</div>

				{/* desktop:hero image */}
				<div className="hidden md:flex">
					<Image
						src="/desktop/image-hero.jpg"
						alt="mobile hero image of a girl wearing vr headset and playing car racing game using car racing equipment"
						layout="fill"
						objectFit="cover"
					/>
				</div>
			</div>

			{/* Hero title */}
			<div className="absolute top-0 left-0 flex h-[650px] w-full items-center px-6 md:h-[750px] md:justify-center">
				<div className="md:max-w-7xl">
					<div className="border-2 border-white p-6 md:w-[50%] md:border-4 md:p-10">
						<h1 className="font-headers text-4xl uppercase text-white md:text-7xl">
							Immersive experiences that deliver
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
