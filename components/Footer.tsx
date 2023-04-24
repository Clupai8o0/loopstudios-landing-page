import Image from "next/image";
import React from "react";

const Footer = () => {
	return (
		<footer className="mt-24 bg-black py-12 md:flex md:justify-center">
			<div className="flex w-full max-w-7xl flex-col items-center text-white md:flex-row md:justify-center">
				{/* Navigation */}
				<div className="md:w-1/2">
					<div className="relative h-7 w-40 md:h-8 md:w-48">
						<Image
							src="/logo.svg"
							alt="loopstudios text logo"
							layout="fill"
							objectFit="contain"
						/>
					</div>

					<ul className="my-6 flex flex-col items-center space-y-4 font-[Alata] text-[18px] font-normal md:flex-row md:space-y-0 md:space-x-4">
						<li>
							<a href="#About">About</a>
						</li>
						<li>
							<a href="#Careers">Careers</a>
						</li>
						<li>
							<a href="#Events">Events</a>
						</li>
						<li>
							<a href="#Products">Products</a>
						</li>
						<li>
							<a href="#Support">Support</a>
						</li>
					</ul>
				</div>

				{/* Contacts */}
				<div className="md:flex md:w-1/2 md:flex-col md:items-end">
					{/* Social */}
					<div className="mb-8 flex justify-evenly px-12 md:space-x-4 md:px-0">
						<a title="facebook">
							<img
								src="/icon-facebook.svg"
								className="h-6 w-6 cursor-pointer transition-transform duration-200 hover:scale-110 md:h-8 md:w-8"
								alt="facebook icon"
							/>
						</a>
						<a title="twitter">
							<img
								src="/icon-twitter.svg"
								className="h-6 w-6 cursor-pointer transition-transform duration-200 hover:scale-110 md:h-8 md:w-8"
								alt="twitter icon"
							/>
						</a>
						<a title="pinterest">
							<img
								src="/icon-pinterest.svg"
								className="h-6 w-6 cursor-pointer transition-transform duration-200 hover:scale-110 md:h-8 md:w-8"
								alt="pinterest-icon"
							/>
						</a>
						<a title="instagram">
							<img
								src="/icon-instagram.svg"
								className="h-6 w-6 cursor-pointer transition-transform duration-200 hover:scale-110 md:h-8 md:w-8"
								alt="instagram icon"
							/>
						</a>
					</div>

					{/* Copyright */}
					<span className="font-[Alata] text-[15px] opacity-60 md:text-lg">
						© 2021 Loopstudios. All rights reserved.
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
