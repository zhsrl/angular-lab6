import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private appComp: AppComponent) { }

  ngOnInit(): void {
  }


  openPop(){
    this.appComp.openDialog();
  }


}
