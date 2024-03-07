import React from "react";

class CalendarWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedYear: this.getCurrYear(),
      selectedMonth: this.getCurrMonth(),
    };
  }

  getCurrDate() {
    return new Date();
  }

  getCurrYear() {
    let currDate = this.getCurrDate();
    return currDate.getFullYear();
  }

  getCurrMonth() {
    let currDate = this.getCurrDate();
    return currDate.getMonth();
  }

  getMonthName() {
    console.log(1111);
    let selectedDate = new Date(
      this.state.selectedYear,
      this.state.selectedMonth,
      1
    );
    console.log(1111);

    return selectedDate.toLocaleString("default", { month: "long" });
  }

  getCurrMonthLength() {
    return this.getMonthLength(
      this.state.selectedYear,
      this.state.selectedMonth
    );
  }

  getMonthLength(year, month) {
    return 32 - new Date(year, month, 32).getDate();
  }

  getDayName(year, month) {
    let firstDayInMonth = new Date(year, month, 1);
    return firstDayInMonth.toLocaleDateString("en-US", { weekday: "long" });
  }

  getDayCells() {
    let lastMonhtCellsCount = 0;
    let nextMonhtCellsCount = 0;
    let lastMonhtCells = [];
    let nextMonhtCells = [];
    let days = [];

    switch (
      this.getDayName(this.state.selectedYear, this.state.selectedMonth)
    ) {
      case "Tuesday":
        lastMonhtCellsCount = 1;
        break;
      case "Wednesday":
        lastMonhtCellsCount = 2;
        break;
      case "Thursday":
        lastMonhtCellsCount = 3;
        break;
      case "Friday":
        lastMonhtCellsCount = 4;
        break;
      case "Saturday":
        lastMonhtCellsCount = 5;
        break;
      case "Sunday":
        lastMonhtCellsCount = 6;
        break;
    }

    lastMonhtCells = Array.from(
      Array(
        this.getMonthLength(
          this.state.selectedYear,
          this.state.selectedMonth - 1
        ) + 1
      ).keys()
    );
    lastMonhtCells.splice(0, lastMonhtCells.length - lastMonhtCellsCount);
    lastMonhtCells = lastMonhtCells.map((text) => (
      <div className="cell cell--unselectable">{text}</div>
    ));

    days = Array.from(Array(this.getCurrMonthLength() + 1).keys());
    days.splice(0, 1);
    days = days.map((text) => <div className="cell">{text}</div>);

    nextMonhtCells = Array.from(
      Array(
        this.getMonthLength(
          this.state.selectedYear,
          this.state.selectedMonth + 1
        ) + 1
      ).keys()
    );
    nextMonhtCells.splice(0, 1);

    nextMonhtCellsCount = 42 - lastMonhtCellsCount - this.getCurrMonthLength();
    nextMonhtCells.splice(
      nextMonhtCellsCount,
      nextMonhtCells.length - nextMonhtCellsCount
    );

    nextMonhtCells = nextMonhtCells.map((text) => (
      <div className="cell cell--unselectable">{text}</div>
    ));

    days = lastMonhtCells.concat(days).concat(nextMonhtCells);

    return days;
  }

  goToPrevMonth() {
    let newMonth = this.state.selectedMonth - 1;
    let newYear = this.state.selectedYear;
    if (newMonth === 0) {
      newMonth = 12;
      newYear--;
    }

    this.setState({
      selectedYear: newYear,
      selectedMonth: newMonth,
    });
  }

  goToCurrMonth() {
    this.setState({
      selectedYear: this.getCurrYear(),
      selectedMonth: this.getCurrMonth(),
    });
  }

  goToNextMonth() {
    let newMonth = this.state.selectedMonth + 1;
    let newYear = this.state.selectedYear;
    if (newMonth === 13) {
      newMonth = 0;
      newYear++;
    }

    this.setState({
      selectedYear: newYear,
      selectedMonth: newMonth,
    });
  }

  render() {
    let dayNames = ["M", "T", "W", "T", "F", "S", "S"];
    let monthText = "";
    if (this.state.selectedYear === this.getCurrYear()) {
      monthText = this.getMonthName();
    } else {
      monthText = this.getMonthName() + ", " + this.state.selectedYear;
    }

    return (
      <div className="calendarWidget">
        <div className="date-text">{monthText}</div>
        <div className="button" onClick={this.goToPrevMonth.bind(this)}>
          «
        </div>
        <div className="button" onClick={this.goToCurrMonth.bind(this)}>
          📅
        </div>
        <div className="button" onClick={this.goToNextMonth.bind(this)}>
          »
        </div>
        {dayNames.map((text) => (
          <div className="cell cell--unselectable cell--extra-margin">
            {text}
          </div>
        ))}
        {this.getDayCells()}
      </div>
    );
  }
}

export default CalendarWidget;
