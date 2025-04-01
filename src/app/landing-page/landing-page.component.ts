import { Component } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFile, faEnvelope, faXmarkCircle } from '@fortawesome/free-regular-svg-icons'
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialogComponent } from '../contact-dialog/contact-dialog.component';
import { IProject } from '../interfaces/interfaces';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn, {
      params: {timing: 1}
    }))])
  ],
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  fadeIn: any;

  email: string = 'ajrardin@gmail.com';
  defaultCard: IProject = {title: 'About Me', description: 'test'};
  selectedProjectCard: IProject = this.defaultCard;

  //icons
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faFile = faFile;
  faEnvelope = faEnvelope;
  faXmarkCircle = faXmarkCircle;
  isExpanded = false;
  projectSelected = false;
  
  projectDataHandler(data: any) {
    this.projectSelected = true;
    this.selectedProjectCard = data[0];
  }

  revertToDefault() {
    this.projectSelected = false;
    this.selectedProjectCard = this.defaultCard
  }

  constructor(public dialog: MatDialog){}

  openDialog() {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      width: '50rem', 
      data: {email: this.email}
    });

    dialogRef.afterClosed()
  }
}
