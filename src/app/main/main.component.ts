import { Component, OnInit, Input } from '@angular/core';
import { Dragon } from '../IDragon';
import { Tiger } from '../ITiger';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	@Input() dragonList: Dragon[];
	@Input() tigerList: Tiger[];
	
  constructor() { }

  ngOnInit() {
  }

}
