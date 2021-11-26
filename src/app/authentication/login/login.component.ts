import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApisService } from 'src/app/apis.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signInForm:FormGroup;
  lognInError:any;
  
  constructor(private formBuilder:FormBuilder, private apiData:ApisService,private route:Router) {
    this.signInForm=formBuilder.group({
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

  lognIn(){
    console.log(this.signInForm.value);
    this.apiData.login_API(this.signInForm.value)
    .then(result => {
      console.log(result.data.accessToken); 
      localStorage.setItem('jwtToken',result.data.accessToken)
      this.route.navigateByUrl('home')
      
    }).catch(err=>{
      
      console.log(err.error.error);
      this.lognInError=err.error.error;
      
    });
    
  }
}


