import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.page.html',
  styleUrls: ['./itens.page.scss'],
})
export class ItensPage implements OnInit {

  restaurants = [
    {
      uid:'dh1',
      cover: 'assets/imgs/img1.jpeg',
      name: 'Dom Henrique 1',
      address: 'Guarapuava-PR',
      short_name: 'domhenrique1',
      cuisines:[
        'Almoço',
        'Café',
        'Hamburguer'
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
      rating: 5,
      delivery_time: 25,
      distance: 2.5,
      price: 100
    },
    ];
  categories: any[] = [
      {
        id: "e00",
        name: "Italiana",
        uid: "dh1"
      },
      {
        id: "e01",
        name: "Mexicana",
        uid: "dh1"
      }
    ];
  allItems = [
      {
        category_id: "e00",
        cover: "assets/imgs/pizza.jpeg",
        desc: "Pizza de Calabreza",
        id: "i1",
        name: "Pizza",
        price: 80,
        rating: 0,
        status: true,
        uid: "dh1",
        variation: false,
        veg: false
      },
      {
        category_id: "e00",
        cover: "assets/imgs/salada.jpeg",
        desc: "Salada Especial",
        id: "i2",
        name: "Salada",
        price: 40,
        rating: 0,
        status: true,
        uid: "dh1",
        variation: false,
        veg: true
      },
      {
        category_id: "e01",
        cover: "assets/imgs/carne.jpeg",
        desc: "Medalhão de Mignon",
        id: "i3",
        name: "Carne",
        price: 120,
        rating: 0,
        status: true,
        uid: "dh1",
        variation: false,
        veg: false
      }
    ];


  data: any ={};
  cartData: any ={}; //dados ddentro do carrinho
  storeData: any={};
  items: any[];
  id: any;
  veg: boolean = false;
  constructor(private route: ActivatedRoute, private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('restaurantId')){ //se n acho id 
        this.navCtrl.back();//manda voltar
        return;
      }
      this.id = paramMap.get('restaurantId');
      //console.log(this.id); //so pra ver o q ta chegando
    }); //destrinchar o q vem de parametro
    this.getItems();
  }

  async getItems(){
    this.data = {};
    let data: any = this.restaurants.filter(x=> x.uid === this.id);
    this.data = data[0]; //como só vem 1 id o array setado de tamamho 1
    //console.log(this.data);
    this.items = this.allItems.filter(x=> x.uid === this.id);
    this.categories = this.categories.filter(x=> x.uid === this.id);
    this.cartData = {};
    this.storeData = {};
    let cart: any = await this.getCart();
    if(cart?.value){
      this.storeData = JSON.parse(cart.value);
      if(this.id == this.storeData.restaurant.uid && this.allItems.length > 0){
        //tem coisa salva no carrinho tem q percorrer
        this.allItems.forEach((element: any)=>{
          this.storeData.items.forEach(ele=>{
            if(element.id != ele.id) return;
            element.quantity = ele.quantity; //percorre array geral e o dentro do carrinho e compara 
          });
        });
    
      }
    }
    this.cartData.totalItem = this.storeData.totalItem;
    this.cartData.totalPrice = this.storeData.totalPrice;

  }

  getCart(){
    return Preferences.get({key: 'cart'}); //retorna o q ta salvo na chave cart
  }

  quantityPlus(item, index){
    //aumenta 
    try{
      if(!this.items[index].quantity || this.items[index].quantity == 0){
        //se qnt n existir ou for igual a zero =1
        this.items[index].quantity = 1;
      }else{//senao aumenta em 1
        this.items[index].quantity += 1;
      }
      this.calculate(); //calcula carrinho
    }catch(e){
      console.log(e);
    }
  }

  quantityMinus(item,index){
    //decrementa se for totalmente diferente de zero 
    if(this.items[index].quantity !== 0){
      this.items[index].quantity -= 1;
    }else{
      this.items[index].quantity = 0;
    }
    this.calculate();
  }

  calculate(){
    //itens ja no carrinho
    this.cartData.items = []; //filtra e se for maior q zero poe no carrinho
    let item = this.items.filter(x=> x.quantity>0);
    this.cartData.items = item; //add os itens ao carrinho
    console.log(this.cartData); //imprime dado do carrinho
    this.cartData.totalPrice = 0;
    this.cartData.totalItem = 0;
    item.forEach(element=>{
      this.cartData.totalItem += element.quantity;
      this.cartData.totalPrice += (parseFloat(element.price)* parseFloat(element.quantity)); //multiplica preco pelo num de emento
    });

    this.cartData.totalPrice = parseFloat(this.cartData.totalPrice).toFixed(2); //taman fixado
    if(this.cartData.totalItem == 0){
      //zera duas var
      this.cartData.totalPrice = 0;
      this.cartData.totalItem = 0;

    }
  }

 async  saveToCart(){
    try{
      this.cartData.restaurant = {};
      this.cartData.restaurant = this.data;
      await Preferences.set({
        key: 'cart',
        value: JSON.stringify(this.cartData)
      });

    }catch(e){
      console.log(e);
    }
  }
  //fun pra visualizar carrino
  async viewCart(){
    if(this.cartData.items && this.cartData.items.length > 0){
      //tem items nocaaro
      await this.saveToCart();
    }
    this.router.navigate([this.router.url + '/cart']);
  }

  getCuisine(cuisine){ // quebra e coloca espaço na hr de exibir
    return cuisine.join(', ');
  }

  vegOnly(event){
    this.items = [];
    if(event.detail.checked == true){
      this.items = this.allItems.filter(x => x.veg === true)
    }else{
      this.items = this.allItems;
    }
    console.log(event.detail.checked);
  }
}
