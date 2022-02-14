import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";

interface Props {
	showMenu: boolean;
	setShowMenu: Dispatch<SetStateAction<boolean>>;
}

const Nav = ({ showMenu, setShowMenu }: Props) => {
	return (
		<header className="absolute flex h-20 w-full items-center justify-center px-6 md:h-36">
			<nav className="z-50 flex max-w-7xl flex-grow items-center justify-between text-white">
				{/* Logo */}
				<div className="relative h-7 w-40 md:h-8 md:w-48">
					<Image src="/logo.svg" layout="fill" objectFit="contain" />
				</div>

				<div>
					{/* Desktop: Nav elements */}
					<ul className="hidden space-x-10 font-[Alata] text-[18px] font-normal md:flex">
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
					<div className="md:hidden">
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
				<ul className="font-headers ml-8 space-y-4 text-[30px] font-light uppercase text-white">
					<li className="menu-link" onClick={() => setShowMenu(false)}>
						<a href="#About">About</a>
					</li>
					<li className="menu-link" onClick={() => setShowMenu(false)}>
						<a href="#Careers">Careers</a>
					</li>
					<li className="menu-link" onClick={() => setShowMenu(false)}>
						<a href="#Events">Events</a>
					</li>
					<li className="menu-link" onClick={() => setShowMenu(false)}>
						<a href="#Products">Products</a>
					</li>
					<li className="menu-link" onClick={() => setShowMenu(false)}>
						<a href="#Support">Support</a>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Nav;
