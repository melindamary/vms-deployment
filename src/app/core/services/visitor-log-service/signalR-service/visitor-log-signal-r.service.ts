import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { Subject } from 'rxjs';
import {URL} from '../../../environment';

@Injectable({
  providedIn: 'root'
})
export class VisitorLogSignalRService {

  private hubConnection: signalR.HubConnection;
  public reloadVisitorLog = new Subject<void>();

  constructor() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${URL}/VisitorHub`)
      .build();

    this.hubConnection.on('ReloadVisitorLog', () => {
      this.reloadVisitorLog.next();
    });

    this.hubConnection.start().catch(err => console.error('Error starting SignalR connection:', err));
  }
}
