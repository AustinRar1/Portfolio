import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { fadeIn, fadeInUp } from 'ng-animate';
import { Output, EventEmitter } from '@angular/core';
import { columnOneCards, columnTwoCards } from 'src/app/data/projectData';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn, {
      params: {timing: 1}
    }))]),
    trigger('fadeInUp', [transition('* => *', useAnimation(fadeInUp, {
      params: {timing: 1}
    }))])
      
  ],
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent {
  // card data
  columnOneCards = columnOneCards;
  columnTwoCards = columnTwoCards;

  fadeIn: any
  fadeInUp: any
  @Output() selectedProjectCard = new EventEmitter<object>();

  addProjectCard(value:object) {
    this.selectedProjectCard.emit(value);
  }

}
