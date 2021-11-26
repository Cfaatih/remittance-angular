import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from 'src/app/apis.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  isLoading:boolean=true;
  allUsers:any=[];
  lognInError:any;
  
  constructor(private apiData:ApisService, private route:Router) { }

  ngOnInit(): void {
    this.apiData.getAllUsers_API()
    .then(result => {
      this.isLoading=false;
      console.log(result);
     this.allUsers = result.data;
    }).catch(err => {
      this.isLoading=false;
      console.log(err);
      this.lognInError=err.error.error;
    })
  }

  viewUser(user:any){
    this.route.navigateByUrl('getUserts?id='+user.userid)
    // this.apiData.getUserPost_API(user.id)
    //   .then(result => {
    //     console.log(result); 
    //   })
  }
  
  
    

}
