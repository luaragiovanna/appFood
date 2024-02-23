import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-screen',
  templateUrl: './empty-screen.component.html',
  styleUrls: ['./empty-screen.component.scss'],
})
export class EmptyScreenComponent  implements OnInit {
@Input() model: any; //passa info da tela pro component

  constructor() { }

  ngOnInit() {}

}
