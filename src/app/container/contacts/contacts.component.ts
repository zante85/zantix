import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent {
  
  rForm: FormGroup;
  post:any;                     // A property for our submitted form
  description:string = '';
  name:string = '';
  email:string = '';
  titleAlert:string = 'Campo obbligatorio';

  constructor(private fb: FormBuilder) { 

    this.rForm = fb.group({
      'name' : [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'email' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'description' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'validate' : ''
    });

  }

  ngOnInit() {
    this.rForm.get('validate').valueChanges.subscribe(

      (validate) => {

          if (validate == '1') {
              this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
              this.titleAlert = 'Devi inserire almeno 3 caratteri';
          } else {
              this.rForm.get('name').setValidators(Validators.required);
          }
          this.rForm.get('name').updateValueAndValidity();

      });
  }

  addPost(post) {
    this.description = post.description;
    this.name = post.name;
  }

  

}
