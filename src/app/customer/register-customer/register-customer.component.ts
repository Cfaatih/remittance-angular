import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApisService } from 'src/app/apis.service';
@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {
  signUpForm:FormGroup;
  lognInError:any;
  lognInRes:any;
  constructor(private formBuilder:FormBuilder, private apiData:ApisService) { 
    this.signUpForm=formBuilder.group({
      customer_email:['', [
        Validators.required,
        Validators.email                 
      ]
    ],
    customer_name:['', Validators.required],
    address:['', Validators.required],
    mobile_no:['', Validators.required],
    gender:['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  postData(){
    console.log(this.signUpForm.value);
    this.apiData.registerCustomer_API(this.signUpForm.value)
    .then(result => {
      console.log(result.message); 
      this.lognInRes=result.message;
      
    }).catch(err=>{
      
      console.log(err.error.error);
      this.lognInError=err.error.error;
      
    });
    
    
  }

  

}
