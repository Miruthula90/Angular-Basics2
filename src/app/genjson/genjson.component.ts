import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-genjson',
  templateUrl: './genjson.component.html',
  styleUrls: ['./genjson.component.css']
})
export class GenjsonComponent implements OnInit {

  userform:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
