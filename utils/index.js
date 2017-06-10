module.exports = {
	getMonthFromNumber: function(monthFromNumber) {
		const month = monthFromNumber.split(".");
		let returnMonth;

		switch (month[1]) {
			case "01":
				returnMonth = `${month[0]} янв 20${month[2]}`;
				break;
			case "02":
				returnMonth = `${month[0]} фев 20${month[2]}`;
				break;
			case "03":
				returnMonth = `${month[0]} мар 20${month[2]}`;
				break;
			case "04":
				returnMonth = `${month[0]} апр 20${month[2]}`;
				break;
			case "05":
				returnMonth = `${month[0]} мая 20${month[2]}`;
				break;
			case "06":
				returnMonth = `${month[0]} июл 20${month[2]}`;
				break;
			case "07":
				returnMonth = `${month[0]} июн 20${month[2]}`;
				break;
			case "08":
				returnMonth = `${month[0]} авг 20${month[2]}`;
				break;
			case "09":
				returnMonth = `${month[0]} сен 20${month[2]}`;
				break;
			case "10":
				returnMonth = `${month[0]} окт 20${month[2]}`;
				break;
			case "11":
				returnMonth = `${month[0]} ноя 20${month[2]}`;
				break;
			case "12":
				returnMonth = `${month[0]} дек 20${month[2]}`;
				break;
		}

		return returnMonth;
	},
	numberWithSpaces: function(number) {
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	},
	declOfNum: function(number, titles) {
		if (number == 0) return "";
		number = Math.abs(number);
		const cases = [2, 0, 1, 1, 1, 2];
		return (
			number +
			" " +
			titles[
				number % 100 > 4 && number % 100 < 20
					? 2
					: cases[number % 10 < 5 ? number % 10 : 5]
			]
		);
	},
	getWeekFromData: function(data) {
		const weekDay = new Date(
			data.toString().replace(/(\d+)[^\d]+(\d+)[^\d]+(\d+)/, "$2/$1/$3")
		).getDay();

		const weekList = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

		return weekList[weekDay];
	}
};
