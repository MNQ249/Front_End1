export class Ticket {
  constructor(
    public ticketID: number,
    public available: boolean,
    public tDate: string,
    public eventtime: string,
    public eventName: string,
    public rate: number,
    public  comment: string,
    public rated: boolean
  ) {}
}
