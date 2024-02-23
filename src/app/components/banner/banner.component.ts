import { Component, Input, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent  implements OnInit {
  swiperModules =[IonicSlides];  //controlar os slides
  @Input() bannerImages; //qualquer pag cm esse cmponent pode dar input
  constructor() { }

  ngOnInit() {}

}
