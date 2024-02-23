import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-order',
  templateUrl: './loading-order.component.html',
  styleUrls: ['./loading-order.component.scss'],
})
export class LoadingOrderComponent  implements OnInit {
  dummy = Array(10);
  constructor() { }

  ngOnInit() {}

}
