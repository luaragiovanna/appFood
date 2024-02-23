import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  model: any = {};
  deliveryCharge = 20; //funcao em back pra fazer calc
  constructor(private router: Router) { }

  ngOnInit() {
    this.getCartData();
  }

  getCart(){
    return Preferences.get({key: 'cart'});

  }

  async getCartData(){
    //carregamento de dados
    let data: any = await this.getCart();
    if(data?.value){ //se tem item no carrinho
      this.model = await JSON.parse(data.value); //quebra info
      console.log(this.model);
      this.calculate();
    }
  }
  async calculate(){
    //items rrya de cooisa dentro do carrinho
    let item = this.model.items.filter(x => x.quantity > 0);
    this.model.items = item;
    this.model.totalPrice = 0;
    this.model.totalItem = 0;
    this.model.deliverycharge = 0;
    this.model.grandTotal = 0; //itens somadoss com o preco da entrega
    item.forEach(element =>{
      //cad aitem q tiver
      this.model.totalItem += element.quantity;
      this.model.totalPrice += (parseFloat(element.price) * parseFloat(element.quantity));
    });
    this.model.deliverycharge = this.deliveryCharge;
    this.model.totalPrice = parseFloat(this.model.totalPrice).toFixed(2);
    this.model.grandTotal = (parseFloat(this.model.totalPrice) + parseFloat(this.model.deliverycharge)).toFixed(2);
    if(this.model.totalItem == 0){
      this.model.totalItem = 0;
      this.model.totalPrice = 0;
      this.model.grandTotal = 0;
      await this.clearCart(); //limap cart
      this.model = 0;
    }


  }

  clearCart(){
    return Preferences.remove({key: 'cart'});
    //async vai demorar e n pode seguir em frente ate x acontecer
    //nao depdende de uma seq de codigo, só termina quando awai for concluido
  }

  quantityPlus(index){}

  quantityMinus(index){}
  addAddress(){}
  changeAddress(){}

}
