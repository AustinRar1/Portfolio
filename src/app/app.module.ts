import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectsComponent } from './landing-page/projects/projects.component';
import { MatIconModule  } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { N12BrPipe } from './pipes/n12-br.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ProjectsComponent,
    ContactDialogComponent,
    N12BrPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    FontAwesomeModule,
    MatExpansionModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTooltipModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    N12BrPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
