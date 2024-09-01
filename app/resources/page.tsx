"use client";

import NavBar from "@/components/nav-bar/nav-bar";
import "@/app/globals.css";
import Footer from "@/components/footer/footer";
import logo from "@/public/HackRPI_Logo_Yellow_Arrow.png";
import Image from "next/image";

export default function page() {
	return (
		<><div className="flex flex-col w-full h-fit min-h-screen items-center justify-center">
			<NavBar showOnScroll={false} />
			<div className="flex flex-col w-11/12 md:w-1/2 flex-grow flex-shrink basis-auto items-center justify-center text-center desktop:text-left">
				<h1 className="text-4xl font-bold mb-4">Don&apos;t know where to start?</h1>
				<p className="text-xl">
					Do not worry! Check out the tutorials below to help you get on track.
				</p>
			</div>
		</div>
		<div className="text-left mb-5 ml-56 mr-56">
				<h2 className="text-4xl text-white font-bold">Web Development</h2>
				<p className="w-11/12 desktop:w-full">
				Web development involves a wide array of technologies, each serving different purposes, 
				from front-end design to back-end processing, database management, and deployment. 
				Here's an overview of the key technologies used in web development:
				</p>
			</div>
		<Footer/></>
	);
}
