import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  signUpForm:FormGroup;
  constructor(private formBuilder:FormBuilder) {
    this.signUpForm=formBuilder.group({
      email:['', [
        Validators.required,
        Validators.email                 
      ]
    ],
      password:['', Validators.required]
      
    })
   }

  ngOnInit(): void {
  }
  postData(){
    console.log(this.signUpForm.value);
    
  }

}
