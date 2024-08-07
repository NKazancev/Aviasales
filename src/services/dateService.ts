export default class DateService {
  date: string;
  duration: number;
  departureHrs: number;
  departureMins: number;
  arrivalHrs: number;
  arrivalMins: number;

  constructor(date: string, duration: number) {
    this.date = date;
    this.duration = duration;
    this.departureHrs = new Date(date).getUTCHours();
    this.departureMins = new Date(date).getUTCMinutes();
    this.arrivalHrs = (this.departureHrs + Math.floor(duration / 60)) % 24;
    this.arrivalMins = (this.departureMins + duration) % 60;
  }

  static formatTime(time: number) {
    return time < 10 ? String(time).padStart(2, '0') : time;
  }

  getDepartureTime() {
    const hrs = DateService.formatTime(this.departureHrs);
    const mins = DateService.formatTime(this.departureMins);
    return `${hrs}:${mins}`;
  }

  getArrivalTime() {
    const hrs = DateService.formatTime(this.arrivalHrs);
    const mins = DateService.formatTime(this.arrivalMins);
    return `${hrs}:${mins}`;
  }

  getTotalTime() {
    const hrs = Math.floor(this.duration / 60);
    const mins = this.duration % 60;
    return `${DateService.formatTime(hrs)}ч ${DateService.formatTime(mins)}м`;
  }
}
