import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/apis.service';

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.css']
})
export class AllCustomersComponent implements OnInit {
  isLoading:boolean=true;
  allCustomers:any=[];
  lognInError:any;
  constructor(private apiData:ApisService) { }

  ngOnInit(): void {
    this.apiData.getAllCustomeries()
    .then(result => {
      this.isLoading=false;
      console.log(result);
     this.allCustomers = result.data;
    }).catch(err => {
      this.isLoading=false;
      console.log(err);
      this.lognInError=err.error.error;
    })
  }

}
