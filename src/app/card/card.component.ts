import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  @Input() price;
  @Input() border;
  @Input() color;
  @Input() CardTitle;
  @Input() isvisible;
  @Input() currency;
  
  userdata;
  constructor() { }
  ngOnInit() {
  }



}
