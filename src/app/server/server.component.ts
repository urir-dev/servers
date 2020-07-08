import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  @Input() name: string;
  @Input() location: string;
  @Input() clientName: string;


  constructor() { }

  ngOnInit(): void {
  }

}
