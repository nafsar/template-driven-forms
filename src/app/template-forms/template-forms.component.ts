import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

  emails = ['', 'naser@consultant.io', '', 'test@gm.com',
    '', 'contractor@uiux.biz'];

  model = new Data('some', this.emails[0], 'Angular Template Driven Forms');

  submitted = false;
  title = 'name';
  emailAddress = 'Email Address';
  text = 'Message';
  emailAddressRes = ''; titleRes = ''; textRes = '';
  onSubmit(result) {
    this.titleRes = result.name;
    this.emailAddressRes = result.myEmails;
    this.textRes = result.textMessage;
    this.submitted = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
export class Data {
  constructor(
    public name: string,
    public myEmails?: string,
    public textMessage?: string
  ) { }

}
