import Image from "next/image";
import React, { useState } from "react";

const Nav = () => {
	//* state
	const [showMenu, setShowMenu] = useState(false);

	return (
		<header className="absolute flex h-20 w-full items-center px-6 sm:h-32 sm:px-40">
			<nav className="z-50 flex flex-grow items-center justify-between text-white">
				{/* Logo */}
				<div className="relative h-7 w-40 sm:h-8 sm:w-48">
					<Image src="/logo.svg" layout="fill" objectFit="contain" />
				</div>

				<div>
					{/* Desktop: Nav elements */}
					<ul className="hidden space-x-12 font-[Alata] text-[18px] font-normal sm:flex">
						<li className="group flex flex-col items-center">
							<a href="#About">About</a>
							<hr className="nav-hr" />
						</li>
						<li className="group flex flex-col items-center">
							<a href="#Careers">Careers</a>
							<hr className="nav-hr" />
						</li>
						<li className="group flex flex-col items-center">
							<a href="#Events">Events</a>
							<hr className="nav-hr" />
						</li>
						<li className="group flex flex-col items-center">
							<a href="#Products">Products</a>
							<hr className="nav-hr" />
						</li>
						<li className="group flex flex-col items-center">
							<a href="#Support">Support</a>
							<hr className="nav-hr" />
						</li>
					</ul>

					{/* Mobile: Nav menu show controller */}
					<div className="sm:hidden">
						{!showMenu ? (
							<a
								className="cursor-pointer"
								title="Open Menu"
								onClick={() => setShowMenu(true)}
							>
								<img src="/icon-hamburger.svg" className="h-[18px] w-7" />
							</a>
						) : (
							<a
								className="cursor-pointer"
								title="Close Menu"
								onClick={() => setShowMenu(false)}
							>
								<img src="/icon-close.svg" className="h-5 w-5" />
							</a>
						)}
					</div>
				</div>
			</nav>

			{/* Menu */}
			<div
				className={`absolute top-0 left-0 z-40 flex h-screen w-screen flex-col justify-center bg-black transition-transform duration-300 ease-in-out ${
					!showMenu ? "translate-x-full" : "translate-x-0"
				}`}
			>
				{/* Menu links */}
				<ul className="ml-8 space-y-4 font-headers text-[30px] font-light uppercase text-white">
					<li className="menu-link">
						<a href="#About">About</a>
					</li>
					<li className="menu-link">
						<a href="#Careers">Careers</a>
					</li>
					<li className="menu-link">
						<a href="#Events">Events</a>
					</li>
					<li className="menu-link">
						<a href="#Products">Products</a>
					</li>
					<li className="menu-link">
						<a href="#Support">Support</a>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Nav;