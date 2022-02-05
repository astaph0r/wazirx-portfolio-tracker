import React from "react";

export const TrackerItem = ({ coin, onDelete }) => {
	return (
		<li className="border-gray-400 flex flex-col md:flex-row mb-2">
			<div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
				<div className="flex-1 pl-1 md:mr-16">
					<div className="font-medium dark:text-white">Jean Marc</div>
					<div className="text-gray-600 dark:text-gray-200 text-sm">
						{coin.market}
					</div>
				</div>
				<div className="flex w-3/5 flex-col md:hidden justify-between">
					<div className="text-gray-600 dark:text-gray-200 my-2 md:m-0 text-center text-xs">
						Quantity
					</div>
					<div className="text-gray-600 dark:text-gray-200 my-2 md:m-0 text-center text-xs">
						Bought Price
					</div>
					<div className="text-gray-600 dark:text-gray-200 my-2 md:m-0 text-center text-xs">
						Current Price
					</div>
					<div className="text-gray-600 dark:text-gray-200 my-2 md:m-0 text-center text-xs">
						Total Worth
					</div>
					<div className="text-gray-600 dark:text-gray-200 my-2 md:m-0 text-center text-xs">
						Profit
					</div>
				</div>
				<div className="flex w-3/5 flex-col md:flex-row justify-between">
					<div className="text-gray-700 dark:text-gray-200 my-2 md:m-0 md:w-1/12 text-center text-xs">
						{coin.amountOfCoins}
					</div>
					<div className="text-gray-700 dark:text-gray-200 my-2 md:m-0 md:w-1/12 text-center text-xs">
						{coin.buyingPrice}
					</div>
					<div className="text-gray-700 dark:text-gray-200 my-2 md:m-0 md:w-1/12 text-center text-xs">
						{coin.latestPrice}
					</div>
					<div className="text-gray-700 dark:text-gray-200 my-2 md:m-0 md:w-1/12 text-center text-xs">
						{(coin.amountOfCoins*coin.latestPrice).toFixed(2)}
					</div>
					<div className="text-gray-700 dark:text-gray-200 my-2 md:m-0 md:w-1/12 text-center text-xs">
						{(coin.amountOfCoins*(coin.latestPrice-coin.buyingPrice)).toFixed(2)}
					</div>
				</div>
				<div className="w-24 text-right flex justify-end">
				<button onDoubleClick={() => {onDelete(coin._id)}}>
					<svg
						width="32"
						fill="currentColor"
						height="32"
						className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500"
						viewBox="0 0 1792 1792"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
					</svg>
				</button>
				</div>
			</div>
		</li>
	);
};
