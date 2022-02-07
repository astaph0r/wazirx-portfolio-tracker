import React from "react";

export const AddTracker = ({
	formState,
	setFormState,
	markets,
	onChange,
	onChangeMarket,
	onSubmit,
}) => {
	// console.log(markets);
	return (
		<div className="divide-y divide-gray-100">
			<div className="container mx-auto my-4 flex flex-col w-full items-center justify-center">
				<div className="bg-white rounded-lg shadow w-4/5 lg:w-2/5">
					<div className="px-4 py-2">
						<div className="relative mt-1">
							<div className="absolute inset-0 flex items-center">
								<div className="w-full border-t border-gray-300"></div>
							</div>
							<div className="relative flex justify-center text-sm leading-5">
								<span className="px-2 text-gray-500 bg-white">
									Add Coin
								</span>
							</div>
						</div>
						<div className="my-4">
							<div className="w-full mx-auto space-y-6">
								<div className="w-4/5 justify-center items-center mx-auto">
									<div className="relative flex justify-left text-sm leading-5">
										<span className="px-2 text-gray-500 bg-white">
											Date
										</span>
									</div>
									<div className=" relative ">
										<input
											type="datetime-local"
											id="formDate"
											value={formState.formDate}
											onChange={onChange}
											className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
											placeholder="Date"
										/>
									</div>
								</div>
								<div className="w-4/5 justify-center items-center mx-auto">
									<div className="relative flex justify-left text-sm leading-5">
										<span className="px-2 text-gray-500 bg-white">
											Market
										</span>
									</div>
									<div className=" relative ">
										<select
											// type="text"
											id="formMarket"
											// value={formState.market}
											onChange={onChangeMarket}
											className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
											placeholder="Coin Market"
										>
											<option
												hidden
												disabled
												selected
												value
											>
												Select a coin
											</option>
											{markets.map((market) => (
												<option value={market.ticker}>
													{market.name}
												</option>
											))}
										</select>
									</div>
								</div>
								<div className="w-4/5 justify-center items-center mx-auto">
									<div className="relative flex justify-left text-sm leading-5">
										<span className="px-2 text-gray-500 bg-white">
											Quantity
										</span>
									</div>
									<div className=" relative ">
										<input
											type="number"
											id="formQuantity"
											value={formState.formQuantity}
											onChange={onChange}
											className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
											placeholder="Quantity"
										/>
									</div>
								</div>
								<div className="w-4/5 justify-center items-center mx-auto">
									<div className="relative flex justify-left text-sm leading-5">
										<span className="px-2 text-gray-500 bg-white">
											Buying Price
										</span>
									</div>
									<div className="flex relative ">
										<span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="15"
												height="15"
												viewBox="0 0 512.000000 512.000000"
												preserveAspectRatio="xMidYMid meet"
											>
												<g
													transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
													fill="#000000"
													stroke="none"
												>
													<path d="M995 5106 c-63 -27 -65 -36 -65 -344 0 -268 1 -280 21 -306 40 -51 38 -51 474 -57 440 -6 510 -13 680 -66 145 -45 284 -131 359 -220 33 -39 76 -104 76 -114 0 -5 -347 -9 -771 -9 l-771 0 -34 -34 -34 -34 0 -229 c0 -250 2 -258 60 -288 25 -13 137 -15 816 -15 l787 0 -6 -29 c-11 -53 -68 -161 -120 -226 -133 -164 -347 -275 -633 -326 -100 -18 -175 -23 -474 -28 -383 -7 -381 -6 -414 -62 -14 -23 -16 -66 -16 -289 0 -167 4 -269 11 -281 6 -11 92 -109 192 -218 365 -395 823 -921 1366 -1564 163 -194 304 -353 318 -358 13 -5 194 -9 404 -9 421 0 423 0 453 64 35 75 52 48 -292 466 -482 584 -935 1112 -1230 1433 -85 92 -153 170 -150 172 2 2 37 9 78 15 592 89 1039 383 1255 825 51 105 97 242 115 343 l13 72 319 0 c263 0 324 3 348 15 58 30 60 38 60 287 l0 228 -29 32 -29 33 -338 5 -338 5 -28 100 c-33 112 -99 259 -159 351 -21 33 -39 63 -39 67 0 4 200 7 444 7 l444 0 31 30 c38 39 44 84 40 313 -4 159 -6 178 -25 204 -11 15 -32 34 -45 40 -37 19 -3081 18 -3124 -1z" />
												</g>
											</svg>
										</span>
										<input
											type="number"
											id="formPrice"
											value={formState.formPrice}
											onChange={onChange}
											className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
											placeholder="Buying Price"
										/>
									</div>
								</div>
								<div>
									<span className="block w-4/5 lg:w-3/5 mx-auto rounded-md shadow-sm">
										<button
											type="button"
											onClick={onSubmit}
											className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
										>
											Add Coin
										</button>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
