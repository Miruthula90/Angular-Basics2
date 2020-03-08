import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  cards=[{price:'50000',border:'border-left-primary',CardTitle:'Earnings (monthly)',color:'text-primary',currency:'RS'},
  {price:'76700',border:'border-left-success',CardTitle:'Earnings (Annual)',color:'text-success',currency:'YEN'},
  {price:'90780',border:'border-left-info',CardTitle:'Tasks',color:'text-info',currency:'EUR'},
  {price:'23000',border:'border-left-warning',CardTitle:'Pending Requests',color:'text-warning',currency:'$'}]

  show=true;
  
addcard()
{
  this.cards.push({price:'85000',border:'border-left-danger',CardTitle:'Earnings (Weekly)',color:'text-danger',currency:'AUD'})
}

toggle()
{
  this.show=!this.show;
}
}

0c92ea2bca09cf5fd1cef920e0d7651b
