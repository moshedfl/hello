import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collor',
  templateUrl: './collor.component.html',
  styleUrls: ['./collor.component.css']
})
export class CollorComponent implements OnInit {

  myCollur: string;

  constructor() { 
    this.myCollur = "yellow";
  }

  changeCollur(){
    this.myCollur = "red";
  }
  ngOnInit() {
  }

}
