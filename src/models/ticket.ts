export interface ITicketSegment {
  origin: string;
  destination: string;
  date: string;
  duration: number;
  stops: Array<string>;
}

export interface ITicket {
  price: number;
  carrier: string;
  segments: Array<ITicketSegment>;
}

export interface ITickets {
  tickets: Array<ITicket>;
}
