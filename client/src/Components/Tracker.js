import React from "react";
import { TrackerItem } from "./TrackerItem";

export const Tracker = ({ coins, onDelete }) => {
	// console.log(coins);
	return (
		<div className="divide-y divide-gray-100">
			<div className="container mx-auto flex flex-col w-full items-center justify-center">
				<div className="w-4/5 lg:w-3/5">
					<li className="border-gray-400 md:flex flex-row hidden mb-1">
						<div className="border select-none cursor-pointer bg-gray-300 dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
							<div className="flex-1 pl-1 md:mr-16">
								<div className="font-medium dark:text-white">
									Coin Name
								</div>
								<div className="text-gray-600 dark:text-gray-200 text-sm">
									Developer
								</div>
							</div>
							<div className="flex w-3/5 flex-row items-center justify-between mr-24">
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
						</div>
					</li>

					{coins.length > 0 ? (
						<ul className="flex flex-col">
							{coins.map((coin) => (
								<TrackerItem
									key={coin.id}
									coin={coin}
									onDelete={onDelete}
								/>
							))}
						</ul>
					) : (
						<div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
							<div className="flex w-full flex-col mx-auto items-center justify-between">
								<div className="text-gray-800 dark:text-gray-200 my-2  md:w-4/5 text-center text-s">
									<span className="mx-auto">No Coins</span>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
