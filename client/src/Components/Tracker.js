import React from "react";

export const Tracker = ({ children }) => {
	return (
		<div className="container mx-auto flex flex-col w-full items-center justify-center">
			<div className="w-4/5 lg:w-3/5">
				<li className="border-gray-400 flex flex-row hidden md:block mb-1">
					<div className="border select-none cursor-pointer bg-gray-300 dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
						{/* <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                    <a href="#" className="block relative">
                        <img alt="profil" src="https://via.placeholder.com/200x200" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                    </a>
                </div> */}
						<div className="flex-1 pl-1 md:mr-16">
							<div className="font-medium dark:text-white">
								Coin Name
							</div>
							<div className="text-gray-600 dark:text-gray-200 text-sm">
								Developer
							</div>
						</div>
						<div className="flex w-3/5 flex-row justify-between mr-24">
							<div className="text-gray-600 dark:text-gray-200 w-1/12 text-center text-xs">
								Quantity
							</div>
							<div className="text-gray-600 dark:text-gray-200 w-1/12 text-center text-xs">
								Bought Price
							</div>
							<div className="text-gray-600 dark:text-gray-200 w-1/12 text-center text-xs">
								Current Price
							</div>
                            <div className="text-gray-600 dark:text-gray-200 w-1/12 text-center text-xs">
								Total Worth
							</div>
                            <div className="text-gray-600 dark:text-gray-200 w-1/12 text-center text-xs">
								Profit
							</div>
						</div>
						{/* <button className="w-24 text-right flex justify-end">
							<svg
								width="12"
								fill="currentColor"
								height="12"
								className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500"
								viewBox="0 0 1792 1792"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
							</svg>
						</button> */}
					</div>
				</li>
				<ul class="flex flex-col">{children}</ul>
			</div>
		</div>

		// <ul className="divide-y divide-gray-100">
		//     {children}
		// </ul>
	);
};
