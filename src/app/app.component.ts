import { Component } from '@angular/core';
import { Seungsoo } from './seungsoo';

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
}
