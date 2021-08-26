import React from "react";

export const TrackerItem = ({ coin }) => {
	return (
		<li className="border-gray-400 flex flex-col md:flex-row mb-2">
			<div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
				{/* <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                    <a href="#" className="block relative">
                        <img alt="profil" src="https://via.placeholder.com/200x200" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                    </a>
                </div> */}
				<div className="flex-1 pl-1 md:mr-16">
					<div className="font-medium dark:text-white">Jean Marc</div>
					<div className="text-gray-600 dark:text-gray-200 text-sm">
						Developer
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
						6:00 AM
					</div>
					<div className="text-gray-700 dark:text-gray-200 my-2 md:m-0 md:w-1/12 text-center text-xs">
						6:00 AM
					</div>
					<div className="text-gray-700 dark:text-gray-200 my-2 md:m-0 md:w-1/12 text-center text-xs">
						6:00 AM
					</div>
					<div className="text-gray-700 dark:text-gray-200 my-2 md:m-0 md:w-1/12 text-center text-xs">
						6:00 AM
					</div>
					<div className="text-gray-700 dark:text-gray-200 my-2 md:m-0 md:w-1/12 text-center text-xs">
						6:00 AM
					</div>
				</div>
				<button className="w-24 text-right flex justify-end">
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
				</button>
			</div>
		</li>

		//   <article className="p-4 flex space-x-4">
		//     <img src={coin.image} alt="" className="flex-none w-18 h-18 rounded-lg object-cover bg-gray-100" width="144" height="144" />
		//     <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
		//       <h2 className="text-lg font-semibold text-black mb-0.5">
		//         {coin.title}
		//       </h2>
		//       <dl className="flex flex-wrap text-sm text-gray-600 font-medium whitespace-pre">
		//         <div>
		//           <dt className="sr-only">Time</dt>
		//           <dd>
		//             <abbr title={`${coin.time} minutes`}>{coin.time}m</abbr>
		//           </dd>
		//         </div>
		//         <div>
		//           <dt className="sr-only">Difficulty</dt>
		//           <dd> · {coin.difficulty}</dd>
		//         </div>
		//         <div>
		//           <dt className="sr-only">Servings</dt>
		//           <dd> · {coin.servings} servings</dd>
		//         </div>
		//         <div className="flex-none w-full mt-0.5 font-normal">
		//           <dt className="inline">By</dt>{' '}
		//           <dd className="inline text-black">{coin.author}</dd>
		//         </div>
		//         <div className="absolute top-0 right-0 rounded-full bg-amber-50 text-amber-900 px-2 py-0.5 hidden sm:flex lg:hidden xl:flex items-center space-x-1">
		//           <dt className="text-amber-500">
		//             <span className="sr-only">Rating</span>
		//             <svg width="16" height="20" fill="currentColor">
		//               <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
		//             </svg>
		//           </dt>
		//           <dd>{coin.rating}</dd>
		//         </div>
		//       </dl>
		//     </div>
		//   </article>
	);
};
