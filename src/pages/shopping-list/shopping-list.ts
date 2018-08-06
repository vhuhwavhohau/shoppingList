import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Items } from '../../models/items.model';
import { shoppingListService } from '../../services/shopping_list.service';

/**
 * Generated class for the ShoppingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
item: Items = {
  name: ' ',
}
  constructor(public navCtrl: NavController, public navParams: NavParams, private shopping: shoppingListService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingListPage');
  }

  addItem(item: Items){
    this.shopping.addItem(item).then(ref => {
     this.navCtrl.setRoot('HomePage', {key: ref.key})
    })
  }
}
