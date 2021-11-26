import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { ApisService } from 'src/app/apis.service';
@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.css']
})
export class SendMoneyComponent implements OnInit {
sendMoney:FormGroup;
lognInError:any;
lognInRes:any;
  constructor(private formBuilder:FormBuilder, private apiData:ApisService) {
    this.sendMoney=formBuilder.group({
      customer_id:['',Validators.required],
      sending_amount:['',Validators.required],
      receiving_amount:['',Validators.required],
      currency_id:['',Validators.required],
      country_id:['',Validators.required],
      state_id:['',Validators.required],
      city_id:['', Validators.required],
      charge_id:['', Validators.required],
      payment_id:['', Validators.required],
      USERID:['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  postData(){
    console.log(this.sendMoney.value);
  
      console.log(this.sendMoney.value.fullName);
      console.log(this.sendMoney.value.email);
      console.log(this.sendMoney.value.password);
      
  
      let body={customer_id:this.sendMoney.value.customer_id, sending_amount:this.sendMoney.value.sending_amount, receiving_amount:this.sendMoney.value.receiving_amount,
        currency_id:this.sendMoney.value.currency_id, country_id:this.sendMoney.value.country_id, 
        state_id:this.sendMoney.value.state_id,
        city_id:this.sendMoney.value.city_id, charge_id:this.sendMoney.value.charge_id,
        payment_id:this.sendMoney.value.payment_id, USERID:this.sendMoney.value.USERID};
      this.apiData.sendMoney_API(body)
      .then(result => {
        console.log(result.data); 
        console.log(result.message);
        this.lognInRes=result.message;
      }).catch(err=>{
        console.log(err);
        this.lognInError=err.error.error;
      });
    
      
    }
  
    
  }


