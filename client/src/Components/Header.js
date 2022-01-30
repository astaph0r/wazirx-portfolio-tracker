import React from "react";
import { Link } from "react-router-dom";
import logout from "../logout.svg";

export const Header = (props) => {
	return (
		<>
			<nav className="flex bg-white flex-wrap items-center justify-between p-2 mt-2">
				<div className="md:order-2 w-auto md:w-1/5 lg:text-center absolute left-1/2 transform -translate-x-1/2">
					<div className="text-xl text-gray-800 font-semibold font-heading">
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
					<Link to="/home">
						<button className="block md:inline-block mt-4 md:mt-0 mr-10 text-blue-900 hover:text-indigo-600">
							Home
						</button>
					</Link>
					<Link to="/portfolio">
						<button className="block md:inline-block mt-4 md:mt-0 mr-10 text-blue-900 hover:text-indigo-600">
							Portfolio
						</button>
					</Link>
					<Link to="/add">
						<button className="block md:inline-block mt-4 md:mt-0 text-blue-900 hover:text-indigo-600">
							Add Coin
						</button>
					</Link>
				</div>
				<a className="navbar-menu md:order-3 w-1/12 md:w-28 md:px-4 flex items-center justify-end text-base font-medium rounded-md text-gray-800 bg-white hover:bg-gray-200" href="/logout">
					<img
						src={logout}
						width="20"
						height="20"
						className="md:mr-2"
						alt="logout icon"
					/>

					<span className="hidden md:block">Logout</span>
				</a>
			</nav>
			<hr className=" mb-8 md:mb-4 mt-1" />
		</>
	);
};
