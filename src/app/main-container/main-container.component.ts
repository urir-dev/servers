import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { AlertService } from '../alert-service.service';


@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {
   
  servers: Iserver[] = [];

  constructor(private service: AlertService) { }

  ngOnInit() {

  }
  listenAlarm(server: string) {
    // save the king
    console.log('server', server);

    this.service.setAlarm(server);
  }
  goHome(e) {
    console.log(e);
  }

}
