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
  defaultCard: IProject = {title: 'About Me', description: `I'm a software developer focused on building scalable, user-friendly applications using JavaScript and TypeScript. While I specialize in React and Angular, I’ve consistently demonstrated the ability to quickly learn new languages and adapt to different architectures when needed. I’m also experienced with SQL, C#, and have worked with AWS and other cloud platforms.

    Much of my experience has been in modernizing legacy systems and refactoring existing applications to align with current best practices. I take pride in writing clean, maintainable code that balances performance with usability. I'm currently seeking a new opportunity that offers room for growth, learning, and meaningful collaboration.
    
    Outside of work, I'm a dedicated family man and spend much of my time with my children. In my downtime, I’m an avid board game player and enjoy 3D printing and painting miniatures as a creative outlet.`};
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
