import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { shoppingListService } from '../../services/shopping_list.service';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { Observable } from 'rxjs/Observable';
import { Items } from '../../models/items.model';
import firebase from 'firebase';
import 'rxjs/add/operator/map'
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  key;
  d;
  shoppingList$: Observable<Items[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private shopping: shoppingListService) {
    this.shoppingList$ = this.shopping.getShoppingList().snapshotChanges().map(changes => {
      
       return changes.map(d => ({
        key: d.payload.key, ...d.payload.val(),
      })) 
    });
}
Delete(item){
  var database = firebase.database();
  database.ref('/shopping-list/'+item.key).remove();
}
// Edit(item){
//   item.name = "sweets";
//   var database = firebase.database();
//   database.ref('/shopping-list/'+item.key).set({name:item.name});
// }

Edit(item){

this.navCtrl.push('EditItemsPage',{'item':item})

}
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
