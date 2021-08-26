import React from "react";
import { Tracker } from "./Tracker";
import { TrackerItem } from "./TrackerItem";

export const Portfolio = ({ coins }) => {
	return (
		<div className="divide-y divide-gray-100">
			<Tracker>
				{coins.map((coin) => (
					<TrackerItem key={coin.id} coin={coin} />
				))}
			</Tracker>
		</div>
	);
};
