import { Component, Inject, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTooltip } from '@angular/material/tooltip';
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { FormBuilder } from '@angular/forms';

export interface DialogData {
  email: string;
}
@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.scss']
})

export class ContactDialogComponent {
  @ViewChild('tooltip') _matTooltip!: MatTooltip;
  secretKey: string = "xqakrppy";
  
  faCopy = faCopy;
  copiedTooltipDisabled = true;

  emailForm = this.fb.group({
    name: [""],
    email: [""],
    message: [""]
  });
  
  constructor(
    public dialogRef: MatDialogRef<ContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder, private httpClient: HttpClient ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  sendEmail(name: String, email: String, message: String) {
    let url = "https://formspree.io/f/" + this.secretKey;
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      })
    };

    let data = `name=${name}&email=${email}&message=${message}`;
    let errorMessage: string = "";

    this.httpClient.post<any>(url, data, httpOptions).subscribe({
        next: data => {
            console.log("email sent" + JSON.stringify(data));
        },
        error: error => {
            errorMessage = error.message;
            console.log('error!', errorMessage);
        }
    })}


  copyEmail() {
    navigator.clipboard.writeText("ajrardin@gmail.com");
    
    this.copiedTooltipDisabled = false;
    setTimeout(() => this._matTooltip.show());
    setTimeout(() => {
      this.copiedTooltipDisabled = true;
      this._matTooltip.hide();
    }, 1000);
  }
}
