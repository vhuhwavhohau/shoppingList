import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Items } from "../../src/models/items.model"
import firebase from "firebase";


@Injectable()
export class shoppingListService{

    item: Items;
    private shoppingListRef = this.db.list<Items>('shopping-list')
    constructor(private db :AngularFireDatabase, ){

    }
    getShoppingList(){
        return this.shoppingListRef;
    }

    addItem(item: Items){
    return this.shoppingListRef.push(item);
        
    }
    // editItem(item: Items){
    //     return this.shoppingListRef.set(item.key, item);
    // }

    editItem(item : Items){
        var database = firebase.database();
        database.ref('/shopping-list/'+item.key).set(item);
        console.log(item.key)
    }
}

