import React from "react";

export const Header = (props) => {
	return (
		<nav className="flex bg-white flex-wrap items-center justify-between p-2">
			<div className="md:order-2 w-auto md:w-1/5 lg:text-center absolute left-1/2 transform -translate-x-1/2">
				<div
					className="text-xl text-gray-800 font-semibold font-heading"
					href="#"
				>
					Charlie Rabiller
				</div>
			</div>
			<div className="block md:hidden">
				<button className="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
					<svg
						className="fill-current h-3 w-3"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
					</svg>
				</button>
			</div>
			<div className="navbar-menu hidden md:order-1 pl-2 md:block w-full md:w-2/5">
				<a
					className="block md:inline-block mt-4 md:mt-0 mr-10 text-blue-900 hover:text-indigo-600"
					href="#"
				>
					Home
				</a>
				<a
					className="block md:inline-block mt-4 md:mt-0 mr-10 text-blue-900 hover:text-indigo-600"
					href="#"
				>
					Team
				</a>
				<a
					className="block md:inline-block mt-4 md:mt-0 text-blue-900 hover:text-indigo-600"
					href="#"
				>
					Gallery
				</a>
			</div>
			<button class="navbar-menu md:order-3 w-28 px-4 py-2 flex flex items-end justify-end text-base font-medium rounded-md text-gray-800 bg-white hover:bg-gray-200">
				<svg
					width="20"
					height="20"
					fill="currentColor"
					class="mr-2"
					viewBox="0 0 1792 1792"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M1696 384q40 0 68 28t28 68v1216q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-288h-544q-40 0-68-28t-28-68v-672q0-40 20-88t48-76l408-408q28-28 76-48t88-20h416q40 0 68 28t28 68v328q68-40 128-40h416zm-544 213l-299 299h299v-299zm-640-384l-299 299h299v-299zm196 647l316-316v-416h-384v416q0 40-28 68t-68 28h-416v640h512v-256q0-40 20-88t48-76zm956 804v-1152h-384v416q0 40-28 68t-68 28h-416v640h896z"></path>
				</svg>
				Logout
			</button>
			{/*
			<div className="lg:order-3 lg:inline-block w-full lg:w-1/5 lg:text-right relative p-1 flex items-end justify-end">
				<a
					href="#"
					className="block-inline flex flex-row-reverse relative"
				>
					<img
						alt="profil"
						src={props.logo}
						className="flex justify-end object-cover rounded-full h-10 w-10 "
					/>
				</a>
			</div>
			 <div className="navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5 lg:text-right">
				<a
					className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600"
					href="#"
				>
					Content
				</a>
				<a
					className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600"
					href="#"
				>
					FAQ
				</a>
				<a
					className="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-indigo-600"
					href="#"
				>
					Contact
				</a>
	</div> */}
		</nav>
	);
};
