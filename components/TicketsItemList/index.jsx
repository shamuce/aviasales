import React, { Component } from "react";
import {
	Tickets,
	TicketsListItem,
	TicketsListItemLeftInfo,
	LeftInfoImage,
	LeftInfoButton,
	TicketsListItemRightInfo,
	RightInfoStart,
	RightInfoTransplant,
	RightInfoTransplantText,
	RightInfoImage,
	RightInfoEnd,
	RightInfoTime,
	RightInfoPoint,
	RightInfoData
} from "./styles.jsx";

import {
	numberWithSpaces,
	getMonthFromNumber,
	declOfNum,
	getWeekFromData
} from "../../utils";

export default class TicketsItemList extends React.Component {
	render() {
		const { ticketsList } = this.props;
		const sortPriceTickets = ticketsList.sort((a, b) => {
			return a.price - b.price;
		});

		const renderTicketsList = sortPriceTickets.map((item, index) => {
			return (
				<TicketsListItem key={index}>
					<TicketsListItemLeftInfo>
						<LeftInfoImage />
						<LeftInfoButton>
							<p>Купить</p>
							<p>за {numberWithSpaces(item.price)} P</p>
						</LeftInfoButton>
					</TicketsListItemLeftInfo>
					<TicketsListItemRightInfo>
						<RightInfoStart>
							<RightInfoTime>
								{item.departure_time}
							</RightInfoTime>
							<RightInfoPoint>
								{item.origin}, {item.origin_name}
							</RightInfoPoint>
							<RightInfoData>
								{getMonthFromNumber(item.departure_date)}
								,
								{" "}
								{getWeekFromData(item.departure_date)}
							</RightInfoData>
						</RightInfoStart>
						<RightInfoTransplant>
							<RightInfoTransplantText>
								{declOfNum(item.stops, [
									"ПЕРЕСАДКА",
									"ПЕРЕСАДКИ",
									"ПЕРЕСАДОК"
								])}
							</RightInfoTransplantText>
							<RightInfoImage />
						</RightInfoTransplant>
						<RightInfoEnd>
							<RightInfoTime>
								{item.arrival_time}
							</RightInfoTime>
							<RightInfoPoint>
								{item.destination_name}, {item.destination}
							</RightInfoPoint>
							<RightInfoData>
								{getMonthFromNumber(item.departure_date)}
								,
								{" "}
								{getWeekFromData(item.departure_date)}
							</RightInfoData>
						</RightInfoEnd>
					</TicketsListItemRightInfo>
				</TicketsListItem>
			);
		});
		return (
			<Tickets>
				{renderTicketsList}
			</Tickets>
		);
	}
}
