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
                                            <option hidden disabled selected value>Select a coin</option>
											{markets.map((market) => (
												<option value={market.ticker}>{market.name}</option>
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
										{/* <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
											<svg
												width="15"
												height="15"
												fill="currentColor"
												viewBox="0 0 1792 1792"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
											</svg>
										</span> */}
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
