import React from "react";
import { Link } from "react-router-dom";
import logout from "../logout.svg";

export const Header = (props) => {
	return (
		<>
			<nav className="flex bg-white flex-wrap items-center justify-between py-2 px-4 md:px-2 mt-2">
				<div className="md:order-2 w-auto md:w-1/5 md:text-center md:mx-2 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
					<div className="text-xl text-gray-800 font-semibold font-heading">
						{!props.user
							? "Empty"
							: props.user.firstName + " " + props.user.lastName}
					</div>
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
				<a
					className="navbar-menu md:order-3 w-1/12 md:w-28 md:px-4 flex items-center justify-end text-base font-medium rounded-md text-gray-800 bg-white hover:bg-gray-200"
					href="/logout"
				>
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
			<hr className="mb-2 mt-1" />

			<nav className="flex bg-white  md:hidden flex-wrap items-center justify-between px-4">
					<div className="navbar-menu block order-1">
						<Link to="/home">
							<button className="block mt-1 md:mt-0 mr-10 text-blue-900 hover:text-indigo-600">
								Home
							</button>
						</Link>
					</div>
					<div className="navbar-menu block order-2">
						<Link to="/portfolio">
							<button className="block mt-1 mr-10 text-blue-900 hover:text-indigo-600">
								Portfolio
							</button>
						</Link>
					</div>
					<div className="navbar-menu block order-3">
						<Link to="/add">
							<button className="block mt-1 text-blue-900 hover:text-indigo-600">
								Add Coin
							</button>
						</Link>
					</div>
			</nav>
			<hr className="md:hidden mb-4 mt-2" />
		</>
	);
};
