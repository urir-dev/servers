import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';

export interface Iserver {
  id: number;
  name: string;
  location: string;
  clientName: string;
  numAlerts: number;
}
const SERVERS: Iserver[] = [
  { id: 1, name: 'MyServer', location: 'Norway', clientName: 'George The Frog', numAlerts: 0},
  { id: 2, name: 'HisServer', location: 'Lapland - Bakulto', clientName: 'No Client Avilable', numAlerts: 0},
  { id: 3, name: 'ThemServer',  location: 'The Great Great Britan', clientName: 'cardoMardo', numAlerts: 0},
  { id: 4, name: 'NoServer', location: 'Israel', clientName: 'Client X', numAlerts: 0},
];

@Injectable({
  providedIn: 'root'
})

export class AlertService {

  private _alerts$ = new ReplaySubject<Iserver>(1);

  public get alert$(): Observable<Iserver> {
    return this._alerts$.asObservable();
  }

  constructor() {
    this._alerts$.subscribe(res => {
      console.log('_alerts$', res);
    });

  }

  public setAlarm(server: string) {
    if (!!server && server.length === 1) {
      this._alerts$.next(server);
    }

  }

}


  // knockKnock(username, password) {
  //   if (password === PASSWORD) {
  //     const knight = KNIGHTS.find(k => k.name === username);
  //     if (!!knight) {

  //       this.newKnightEnter(knight);
  //     }
  //   }
  // }
  // newKnightEnter(knight: IKnight) {
  //   this._knights$.next(knight);

  // }
