import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApisService } from 'src/app/apis.service';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {
  isLoading:boolean=true;
  getUser:any=[];
  body:any;

  constructor(private apiData:ApisService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.queryParams.subscribe(param=>{
    //   console.log(param['id']);
     
    //   this.apiData.getUser_API(param['id'])
    // .then(result => {
    //   this.isLoading=false;
    //   this.getUser=result.data;
    //   console.log(result.data); 
    // }).catch(err=>{
    //   this.isLoading=false;
    //   console.log(err);
    // });
    // })
  }

  

}
