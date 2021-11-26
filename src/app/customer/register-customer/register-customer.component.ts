import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {
  signUpForm:FormGroup;
  lognInError:any;
  lognInRes:any;
  constructor(private formBuilder:FormBuilder) { 
    this.signUpForm=formBuilder.group({
      email:['', [
        Validators.required,
        Validators.email                 
      ]
    ],
    customerName:['', Validators.required],
    customerAddress:['', Validators.required],
    MobileNumber:['', Validators.required],
    gender:['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  postData(){
    console.log(this.signUpForm.value);
    
  }

  

}
