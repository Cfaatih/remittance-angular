import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/apis.service';

@Component({
  selector: 'app-show-all-remittances',
  templateUrl: './show-all-remittances.component.html',
  styleUrls: ['./show-all-remittances.component.css']
})
export class ShowAllRemittancesComponent implements OnInit {

  constructor(private apiData:ApisService) { }
  isLoading:boolean=true;
  allRemittances:any=[];
  lognInError:any;
  ngOnInit(): void {
    this.apiData.getRemmitancies_API()
    .then(result => {
      this.isLoading=false;
      console.log(result.data);
     this.allRemittances = result.data;
    }).catch(err => {
      this.isLoading=false;
      console.log(err);
      this.lognInError=err.error.error;
      
    })
  }

}
