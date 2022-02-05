import React from "react";

export const AddTracker = ({ formState, setFormState, markets, onChange, onSubmit }) => {
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
									<div className=" relative ">
										<select
											// type="text"
											id="formMarket"
											// value={formState.market}
											onChange={onChange}
											className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
											placeholder="Coin Market"
										>
											{markets.map((market) => (
												<option value={market.ticker}>{market.name}</option>
											))}
										</select>
									</div>
								</div>
								<div className="w-4/5 justify-center items-center mx-auto">
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
									<div className=" relative ">
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
