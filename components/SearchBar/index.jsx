import React, { Component } from "react";
import { Bar, Label, CheckBoxList, CheckBox } from "./styles.jsx";

export default class SearchBar extends React.Component {
	state = {
		arrayStopsList: []
	};

	addAndDelete = event => {
		this.allStops.checked = false;
		const countStops = parseInt(
			event.target.attributes.getNamedItem("data-stops").value
		);

		const checkStateCheckbox = event.target.checked;

		if (checkStateCheckbox) {
			this.setState(
				{
					arrayStopsList: this.state.arrayStopsList.concat([
						countStops
					])
				},
				this.filterTricketsList
			);
		} else {
			this.setState(
				{
					arrayStopsList: this.state.arrayStopsList.filter(
						e => e != countStops
					)
				},
				this.filterTricketsList
			);
		}
	};

	filterTricketsList = event => {
		const tricketsListFilterStopes = this.props.ticketsList.tickets.filter(item => {
			let result;
			for (let i = 0; i < this.state.arrayStopsList.length; i++) {
				if (item.stops == this.state.arrayStopsList[i]) result = item;
			}
			return result;
		});
		console.log(tricketsListFilterStopes)
		this.props.filterTickets(tricketsListFilterStopes);
	};

	allTricketsList = event => {
		const checkStateCheckbox = event.target.checked;
		if (checkStateCheckbox) {
			this.setState({
				arrayStopsList: []
			},() => {
			this.props.filterTickets(this.state.arrayStopsList);
			this.withOutStops.checked = false;
			this.oneStops.checked = false;
			this.twoStops.checked = false;
			this.threeStops.checked = false;
				}
			)
			
		}
	};

	render() {
		return (
			<Bar>
				<Label>
					Количество Пересадок
				</Label>
				<CheckBoxList>
					<CheckBox>
						<input
							type="checkbox"
							onChange={this.allTricketsList}
							ref={input => {
								this.allStops = input;
							}}
						/>
						<span />
						Все
					</CheckBox>
					<CheckBox>
						<input
							type="checkbox"
							data-stops="0"
							onChange={this.addAndDelete}
							ref={input => {
								this.withOutStops = input;
							}}
						/>
						<span />
						Без пересадок
					</CheckBox>
					<CheckBox>
						<input
							type="checkbox"
							data-stops="1"
							onChange={this.addAndDelete}
							ref={input => {
								this.oneStops = input;
							}}
						/>
						<span />
						1 пересадка
					</CheckBox>
					<CheckBox>
						<input
							type="checkbox"
							data-stops="2"
							onChange={this.addAndDelete}
							ref={input => {
								this.twoStops = input;
							}}
						/>
						<span />
						2 пересадки
					</CheckBox>
					<CheckBox>
						<input
							type="checkbox"
							data-stops="3"
							onChange={this.addAndDelete}
							ref={input => {
								this.threeStops = input;
							}}
						/>
						<span />
						3 пересадки
					</CheckBox>
				</CheckBoxList>
			</Bar>
		);
	}
}
