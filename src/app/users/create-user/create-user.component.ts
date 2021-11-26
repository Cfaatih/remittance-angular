import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApisService } from 'src/app/apis.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  signUpForm:FormGroup;
  lognInError:any;
  lognInRes:any;
  constructor(private formBuilder:FormBuilder, private apiData:ApisService) {
    this.signUpForm=formBuilder.group({
      email:['', [
        Validators.required,
        Validators.email                 
      ]
    ],
    fullName:['', Validators.required],
 
    password:['', Validators.required],
    confPassword:['', Validators.required]
    })
   }

  ngOnInit(): void {
  }
  postData(){
    console.log(this.signUpForm.value.fullName);
    console.log(this.signUpForm.value.email);
    console.log(this.signUpForm.value.password);
    

    let body={fullName:this.signUpForm.value.fullName, email:this.signUpForm.value.email, password:this.signUpForm.value.password};
    this.apiData.createUser_API(body)
    .then(result => {
      console.log(result.message); 
      this.lognInRes=result.message;
    }).catch(err=>{
      this.lognInError=err.error.error;
      console.log(err);

    });
  
    
  }

}
