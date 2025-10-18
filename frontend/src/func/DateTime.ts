class DateTime {
  date: Date;

  
  constructor() {
    this.date = new Date();
  }

  findDay() {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[this.date.getDay()];
  }

  findTime() {
    return this.date.getHours() + ":" + this.date.getMinutes();
  }

  findDate() {
    return (
      this.date.getDate() +
      "-" +
      (this.date.getMonth() + 1) +
      "-" +
      this.date.getFullYear()
    );
  }
}


export default DateTime;