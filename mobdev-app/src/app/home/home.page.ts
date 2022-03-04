import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

myVariable: string = "the force is with me!"
randomTXT: boolean = true;
updateMyValue(){
  this.myVariable = "now the force is even stronger!";

}


}
