"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>


			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500  border-zinc-800 "
					}`}
			>
				<div>
					<div className="container flex flex-row items-center justify-between p-6 mx-auto">
						<div className="flex justify-between gap-8">
					<Link
							href="/"
							className="duration-200 text-zinc-300 hover:text-zinc-100"
						>
							<ArrowLeft className="w-6 h-6 " />
						</Link>
						
							<Link
								href="/projects"
								className="duration-200 text-zinc-400 hover:text-zinc-100"
							>
								Questions
							</Link>
							<Link
								href="/practice"
								className="duration-200 text-zinc-400 hover:text-zinc-100"
							>
								Practice
							</Link>
							<div />
							
						</div>
						<h1 className="z-10  text-4xl  text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display whitespace-nowrap bg-clip-text ">
								Prompt Genius
							</h1>
					
					</div>
				</div>
			</div>
		</header>
	);
};
