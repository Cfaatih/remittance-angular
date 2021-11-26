import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyApiService {

  constructor(private api:HttpClient) { }
  /*  ------- APi Calling starts here ------ */

  /* This function gets all users*/
  getAllUsers_API(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.api.get('http://localhost:5000/v1/operations/getCountries')
        .toPromise()
        .then(result => {
          if (result) {
            resolve(result);
          }
        }).catch(err => {
          reject(err)
        });
    });
  }

//get single user
getUser_API(id:number): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    this.api.get('http://localhost:5000/v1/operations/getCountries'+id)
      .toPromise()
      .then(result => {
        if (result) {
          resolve(result);
        }
      }).catch(err => {
        reject(err)
      });
  });
}







  // To POST the values
  addNewTodo_API(): Promise<any> {

    const param = new HttpParams().set('userId', 100).set('branchId', 222);
    const header = new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'Authorization': 'Angular-Training',
      'MyKey' : 'MyValue'
    });
    

    var options = {
      headers: header,
      withCredentials: true,
      params: param
    }

    var body: {
      completed: false
      id: 201
      title: "delectus aut autem"
      userId: 1
    };
    return new Promise<any>((resolve, reject) => {
      this.api.post('https://jsonplaceholder.typicode.com/todos', body, options)
        .toPromise()
        .then(result => {
          if (result) {
            resolve(result);
          }
        }).catch(err => {
          reject(err)
        });
    });
  }


}
