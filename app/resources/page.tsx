"use client";

import NavBar from "@/components/nav-bar/nav-bar";
import "@/app/globals.css";
import Footer from "@/components/footer/footer";
import logo from "@/public/HackRPI_Logo_Yellow_Arrow.png";
import Image from "next/image";

export default function page() {
	return (
		<><div className="flex flex-col w-full h-56 items-center justify-center">
			<NavBar showOnScroll={false} />
			<div className="flex flex-col w-11/12 md:w-1/2 flex-grow flex-shrink basis-auto items-center justify-center text-center desktop:text-left">
				<h1 className="flex text-5xl font-bold">Don&apos;t know where to start?</h1>
				<p className="flex text-xl">
					Check out the tutorials &amp; key technologies used for each type of development below to help you get hacking.
				</p>
			</div>
		</div>
		<div className="text-left mb-5 ml-56 mr-56">
				<h2 className="text-4xl text-white font-bold">Web Development</h2>
				<ul className="list-disc w-full list-inside mb-2">
					<li>Challenges so brain-bending, they&apos;ll make your algorithms sweat!</li>
					<li>Prizes so cool, even your keyboard will do a happy dance.</li>
					<li>Resources so valuable, they&apos;ll make Stack Overflow blush.</li>
				</ul>
				<h3 className="text-4xl text-white font-bold">Mobile Development</h3>
				<ul className="list-disc w-full list-inside mb-2">
					<li>Challenges so brain-bending, they&apos;ll make your algorithms sweat!</li>
					<li>Prizes so cool, even your keyboard will do a happy dance.</li>
					<li>Resources so valuable, they&apos;ll make Stack Overflow blush.</li>
				</ul>
			</div>
		<Footer/></>
	);
}
