import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent  implements OnInit {
  @Input() restaurant: any;
  constructor() { }

  ngOnInit() {}


  getOrder(order){ // quebra e coloca espaço na hr de exibir
    return order.join(', ');
  }

}
