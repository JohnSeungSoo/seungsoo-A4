import { Component } from '@angular/core';
import { Seungsoo } from './seungsoo';
import { Dragon } from './IDragon';
import { Tiger } from './ITiger';
import dragons from '../assets/data/dragons.json';
import tigers from '../assets/data/tigers.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	title = 'seungsoo-A4';
	
	user: Seungsoo = {
		studentId: 991494887,
		studentName: "Seungsoo Kang",
		loginName: "seungsoo",
		campus: "Trafalgar",
		assignmentTitle: "Assignment4"
	};

	dragonData : Dragon[] = dragons.data;
	tigerData : Tiger[] = tigers.data;
}

