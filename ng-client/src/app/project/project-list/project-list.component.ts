import {Component, OnInit} from '@angular/core';
import {Project} from '../project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})

	export class ProjectListComponent implements OnInit {
	projects: Project[];
	ngOnInit() {
		this.projects =  [
			new Project({
				_id: "8ur384ofj2",
				name: "Awesome Project",
				description: "Just a CRUD app"
			}),
			new Project({
				_id: "9fewa23ja3",
				name: "Better Tracking",
				description: "A better tracker than this one"
			}),
			new Project({
				_id: "9234jfsij3",
				name: "Tetris",
				description: "Because everyone needs a hobby"
			}),
		];
	}
}
