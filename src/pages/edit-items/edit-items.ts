import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item } from 'ionic-angular';
import firebase from 'firebase';
import { shoppingListService } from '../../services/shopping_list.service';

/**
 * Generated class for the EditItemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-items',
  templateUrl: 'edit-items.html',
})
export class EditItemsPage {
  name: any;
item: Item;
  constructor(public navCtrl: NavController, public navParams: NavParams, private shopping: shoppingListService) {
  }

  ionViewWilLoad() {
    console.log('ionViewDidLoad EditItemsPage');
    this.item = this.navParams.get('item');
  }
//   Save(item : Item){
//  this.shopping.editItem(Item)
//    this.navCtrl.setRoot('HomePage');
 
//}  
Save(item ){
  this.shopping.editItem(item)
    this.navCtrl.setRoot('HomePage');
  
 }
}