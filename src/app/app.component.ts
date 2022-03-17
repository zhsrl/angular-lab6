import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{


  constructor(private dialogRef: MatDialog){
  }


  openDialog(){
    this.dialogRef.open(PopUpComponent);
  }





}
