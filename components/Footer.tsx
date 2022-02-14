import Image from "next/image";
import React from "react";

const Footer = () => {
	return (
		<footer className="bg-black py-12 md:flex md:justify-center mt-24">
			<div className="flex max-w-7xl w-full flex-col items-center text-white md:flex-row md:justify-center">
				{/* Navigation */}
				<div className="md:w-1/2">
					<div className="relative h-7 w-40 md:h-8 md:w-48">
						<Image src="/logo.svg" layout="fill" objectFit="contain" />
					</div>

					<ul className="my-6 space-y-4 md:space-y-0 md:space-x-4 font-[Alata] text-[18px] font-normal flex flex-col items-center md:flex-row">
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
				<div className="md:w-1/2 md:flex md:flex-col md:items-end">
					{/* Social */}
					<div className="mb-8 flex justify-evenly px-12 md:px-0 md:space-x-4">
						<a title="facebook">
							<img
								src="/icon-facebook.svg"
								className="h-6 w-6 md:h-8 md:w-8 cursor-pointer transition-transform duration-200 hover:scale-110"
							/>
						</a>
						<a title="twitter">
							<img
								src="/icon-twitter.svg"
								className="h-6 w-6 md:h-8 md:w-8 cursor-pointer transition-transform duration-200 hover:scale-110"
							/>
						</a>
						<a title="pinterest">
							<img
								src="/icon-pinterest.svg"
								className="h-6 w-6 md:h-8 md:w-8 cursor-pointer transition-transform duration-200 hover:scale-110"
							/>
						</a>
						<a title="instagram">
							<img
								src="/icon-instagram.svg"
								className="h-6 w-6 md:h-8 md:w-8 cursor-pointer transition-transform duration-200 hover:scale-110"
							/>
						</a>
					</div>

					{/* Copyright */}
					<span className="font-[Alata] text-[15px] md:text-lg opacity-60">
						© 2021 Loopstudios. All rights reserved.
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
