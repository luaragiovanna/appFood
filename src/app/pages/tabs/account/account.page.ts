import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
//componentizar pedidos e quando n faz pedido nenhum
//passar model diferente 
restaurants: any[] = [];
isLoading: boolean = false;
banners: any[]=[];

model: any = {
  icon: "fast-food-sharp",
  title: "Nenhum pedido foi feito! Vamos pedir algo?"
};

order: any[] = [];



  ngOnInit() {
      this.isLoading = true;
    setTimeout(() => {
      this.banners = [
        {banner: 'assets/imgs/img1.jpeg'},
        {banner: 'assets/imgs/img2.jpeg'},
        {banner: 'assets/imgs/img3.jpeg'}
      ];
      this.restaurants = [
        {
          cover: 'assets/imgs/img1.jpeg',
          name: 'Dom Henrique 1',
          short_name: 'domhenrique1',
          cuisines:[
            'Almoço',
            'Café',
            'Hamburguer'
          ],
          order:[
            'Pizza',
            'Coca-cola 2L',
            
          ],
          rating: 5,
          delivery_time: 25,
          distance: 2.5,
          price: 100
        },
        {
          cover: 'assets/imgs/img2.jpeg',
          name: 'Dom Henrique 2',
          short_name: 'domhenrique2',
          cuisines:[
            'Almoço',
            'Café',
            'Hamburguer'
          ],
          order:[
            'Hamburguer Veg',
            'Suco de Laranja'
            
          ],
          rating: 5,
          delivery_time: 25,
          distance: 2.5,
          price: 88
        },
        {
          cover: 'assets/imgs/img3.jpeg',
          name: 'Dom Henrique 3',
          short_name: 'domhenrique3',
          cuisines:[
          /* 'Almoço',
            'Café',
            'Hamburguer'*/
          ],
          order:[
            'Sushi',
          ],
          rating: 5,
          delivery_time: 25,
          distance: 2.5,
          price: 100
        },
        ];
      this.isLoading = false;
    }, 3000)


    }
   
    
    filteredRestaurants(): any[] {
      return this.restaurants.filter(restaurant => restaurant.order && restaurant.order.length > 0);
    }
    
}
