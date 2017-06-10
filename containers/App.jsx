import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import TicketsItemList from "../components/TicketsItemList";
import { Wrapper, AviaLogo, Content, ContentItem } from "./styles.jsx";

export default class App extends React.Component {
	state = {
		searchList: []
	};
	filterTickets = item => {
		this.setState({
			searchList: item
		});
	};
	render() {
		const { tickets } = this.props.ticketsList;
		return (
			<Wrapper>
				<Content>
					<AviaLogo />
					<ContentItem>
						<SearchBar
							searchList={this.state.searchList}
							ticketsList={this.props.ticketsList}
							filterTickets={this.filterTickets}
						/>
						<TicketsItemList ticketsList={this.state.searchList.length > 0 ? this.state.searchList : tickets} />
					</ContentItem>
				</Content>
			</Wrapper>
		);
	}
}
