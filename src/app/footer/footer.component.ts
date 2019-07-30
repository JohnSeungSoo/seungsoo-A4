import { Component, OnInit, Input } from '@angular/core';
import { formatDate } from '@angular/common';
import { Seungsoo } from '../seungsoo';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

	@Input() userInfo: Seungsoo;
	today: string ="";

  constructor() { 
		this.today = formatDate(new Date(), 'yyyy/MM/dd', 'en');
	}

  ngOnInit() {
  }

}
