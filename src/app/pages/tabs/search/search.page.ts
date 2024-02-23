import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
@ViewChild('searchInput') sInput; //igual o ngmodel var de busca
allRestaurant : any [] = [];
restaurants : any [] = [];
query: any;
isLoading: boolean = false; //manda carregar components

model: any = {
  icon: 'search-outline',
  title: 'Nenhum pedido foi feito.'
};
  constructor() {
    setTimeout(()=>{this.sInput.setFocus()},500);
   }

  ngOnInit() {
    this.allRestaurant = [
      {
        uid:'dh1',
        cover: 'assets/imgs/img1.jpeg',
        name: 'Dom Henrique 1',
        short_name: 'domhenrique1', //pra busca
        cuisines:[
          'Almoço',
          'Café',
          'Hamburguer'
        ],
        order:[
          /*'Pizza',
          'Marmita',
          'Arroz'*/
        ],
        rating: 5,
        delivery_time: 25,
        distance: 2.5,
        price: 100
      },
      {
        uid:'dh2',
        cover: 'assets/imgs/img2.jpeg',
        name: 'Dom Henrique 2',
        short_name: 'domhenrique2',
        cuisines:[
          'Almoço',
          'Café',
          'Hamburguer'
        ],
        order:[
          /*'Pizza',
          'Marmita',
          'Arroz'*/
        ],
        rating: 5,
        delivery_time: 25,
        distance: 2.5,
        price: 100
      },
      {
        uid:'dh3',
        cover: 'assets/imgs/img3.jpeg',
        name: 'Dom Henrique 3',
        short_name: 'domhenrique3',
        cuisines:[
          'Almoço',
          'Café',
          'Hamburguer'
        ],
        order:[
          /*'Pizza',
          'Marmita',
          'Arroz'*/
        ],
        rating: 5,
        delivery_time: 25,
        distance: 2.5,
        price: 100
      },
      ]; //só restaurante 
  }

  //met busca
  async onSearchChange(event){
    this.query = event.detail.value.toLowerCase(); //pega em minusculo pra comparar cm shortname
    this.restaurants = []; //limpar busca
    if(this.query.length>0){
      this.isLoading = true; //aparecer enq faz a usca
      setTimeout(async()=>{
        this.restaurants = await this.allRestaurant.filter((element: any)=>{return element.short_name.includes(this.query)})
        console.log(this.restaurants);
        this.isLoading = false;
      },3000);
    }

    }

}
