import React from "react";

export const TrackerItem = ({ coin, onDelete }) => {
	return (
		<li className="border-gray-400 flex flex-col md:flex-row mb-2">
			<div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
				<div className="flex-1 pl-1 md:mr-16">
					<div className="font-medium dark:text-white">
						{coin.name}
					</div>
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
						{(coin.amountOfCoins * coin.latestPrice).toFixed(2)}
					</div>
					<div className="text-gray-700 dark:text-gray-200 my-2 md:m-0 md:w-1/12 text-center text-xs">
						{(
							coin.amountOfCoins *
							(coin.latestPrice - coin.buyingPrice)
						).toFixed(2)}
					</div>
				</div>
				<div className="w-24 text-right flex justify-end">
					<button
						onClick={() => {
							onDelete(coin._id);
						}}
					>
						{/* <svg
						width="32"
						fill="currentColor"
						height="32"
						className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500"
						viewBox="0 0 1792 1792"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
					</svg> */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 512.000000 512.000000"
							preserveAspectRatio="xMidYMid meet"
						>
							<g
								transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
								fill="#f44336"
								stroke="none"
							>
								<path d="M1870 4901 c-72 -23 -119 -63 -145 -123 -12 -30 -15 -83 -15 -272 l0 -235 -457 -3 -458 -3 -47 -28 c-84 -49 -124 -150 -98 -245 15 -56 80 -123 136 -140 60 -18 3488 -18 3548 0 57 17 119 82 135 141 27 95 -13 195 -97 244 l-47 28 -457 3 -458 3 0 235 c0 189 -3 242 -15 272 -20 47 -50 78 -100 105 -40 22 -45 22 -720 24 -374 1 -691 -2 -705 -6z m1120 -526 l0 -105 -430 0 -430 0 0 105 0 105 430 0 430 0 0 -105z" />
								<path d="M1008 3618 c-21 -5 -58 -28 -83 -50 -81 -71 -76 20 -73 -1394 l3 -1249 23 -80 c29 -107 99 -246 162 -323 107 -131 271 -236 445 -285 l80 -22 995 0 995 0 80 22 c174 49 338 154 445 285 63 77 133 216 162 323 l23 80 3 1240 c2 890 0 1255 -8 1292 -8 36 -23 65 -51 97 -99 113 -276 89 -343 -45 l-26 -53 0 -1232 c0 -1200 -1 -1234 -20 -1296 -39 -128 -140 -228 -269 -269 -60 -18 -99 -19 -991 -19 -897 0 -930 1 -992 20 -128 39 -228 140 -269 269 -18 61 -19 102 -19 1296 l0 1233 -28 53 c-46 89 -149 134 -244 107z" />
								<path d="M2062 3189 c-46 -14 -118 -88 -131 -135 -15 -54 -15 -1574 0 -1628 15 -54 83 -119 142 -135 95 -27 195 13 244 97 l28 47 0 805 0 805 -28 47 c-49 84 -160 126 -255 97z" />
								<path d="M2889 3172 c-39 -20 -62 -41 -84 -77 l-30 -48 0 -806 0 -806 28 -47 c49 -84 149 -124 244 -97 59 16 124 78 141 135 17 59 17 1569 0 1628 -16 53 -81 118 -134 134 -64 19 -107 15 -165 -16z" />
							</g>
						</svg>
					</button>
				</div>
			</div>
		</li>
	);
};
