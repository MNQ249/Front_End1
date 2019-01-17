import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Events} from './event.model';
import {Ticket} from '../ticket/ticket.model';
import {Comments} from './Comments';
import {Rate} from '../ticket/rate';



const headers = new HttpHeaders().set('Content-Type', 'application/json');
const API_ARGS = {headers: headers};


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) {
  }

  getEvents(): Observable<Events[]> {
    return this.http.get<Events[]>('api/event/list');
  }

  getAprrovedEvents(): Observable<Events[]> {
    return this.http.get<Events[]>('api/event/listApprove');
  }

  getNotAprrovedEvents(): Observable<Events[]> {
    return this.http.get<Events[]>('api/event/listNotApprove');
  }

  getMyEvents(orgnaizerid: number): Observable<Events[]> {
    return this.http.get<Events[]>(`api/event/myEvent/${orgnaizerid}`);
  }

  addEvents(orgnaizerid: number, a): Observable<Events> {
    return this.http.post<Events>(`api/event/add/${orgnaizerid}`, JSON.stringify(a.value), API_ARGS);
  }

  //
  getEvent(eventId: number): Observable<Events> {
    return this.http.get<Events>(`api/event/${eventId}`);
  }

  updateEvent(eventId: number, a): Observable<Events> {
    return this.http.put<Events>(`api/event/edit/${eventId}`, JSON.stringify(a.value), API_ARGS);
  }

  deleteEvent(eventId: number): Observable<Events> {
    return this.http.delete<Events>(`api/event/delete/${eventId}`);
  }

  approveEvent(eventId: number): Observable<Events> {
    return this.http.get<Events>(`api/event/approve/${eventId}`);
  }

  rejectEvent(eventId: number): Observable<Events> {
    return this.http.get<Events>(`api/event/disApprove/${eventId}`);
  }

  bookEvent(eventId: number, id: number): Observable<Events> {
    return this.http.get<Events>(`api/ticket/add/${eventId}/${id}`);
  }


  getMyTickets(id: number): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`api/ticket/myTickets/${id}`);
  }

  getAttendedTickets(id: number): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`/api/ticket/attendedTickets/${id}`);
  }

  getEventsTickets(eventId: number): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`api/ticket/events/tickets/${eventId}`);
  }

  cancelTicket(ticketID: number): Observable<Events> {
    return this.http.get<Events>(`api/ticket/cancelTicket/${ticketID}`);
  }


  getComments(eventId: number): Observable<Comments[]> {
    return this.http.get<Comments[]>(`api/event/comment/${eventId}`);
  }

  addComment(id: number , eventId: number, a): Observable<Comments> {
    return this.http.post<Comments>(`api/comment/${id} / ${eventId}`, JSON.stringify(a.value), API_ARGS);
  }

  addRate(ticketID: number, a): Observable<Rate> {
    return this.http.post<Rate>(`api/rating/add/${ticketID}`, JSON.stringify(a.value), API_ARGS);
  }
  serachByCity(eventCity: string): Observable<Events[]> {
    return this.http.get<Events[]>('/api/event /SearchByCity/{eventCity}');
  }
}
