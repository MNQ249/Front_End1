export class Events {
  constructor(
    public eventId: number,
    public eventName: string,
    public eventCity: string,
    public eventMaxCapacity: number,
    public eventDate: string,
    public eventTime: string,
    public approved: boolean
  ) {}
}
