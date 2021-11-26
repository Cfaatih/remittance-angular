import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private api:HttpClient) { }
  /*  ------- APi Calling starts here ------ */

  /* This function gets all users*/
  getAllUsers_API(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.api.get('http://localhost:5000/v1/users')
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

 
//get all remittances
    getRemmitancies_API(): Promise<any> {
      return new Promise<any>((resolve, reject) => {
        this.api.get('http://localhost:5000/v1/remittances/getRemittancies')
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

//create user
createUser_API(createUser: any): Promise<any> {
  const httpHeaders = new HttpHeaders();
  httpHeaders.append('Content-Type','application/json' );

  return new Promise<any>((resolve, reject) => {
    this.api.post('http://localhost:5000/v1/users/create', createUser, {headers:httpHeaders})
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

//send money
sendMoney_API(sendMoney: any): Promise<any> {
  const httpHeaders = new HttpHeaders();
  httpHeaders.append('Content-Type','application/json' );

  return new Promise<any>((resolve, reject) => {
    this.api.post('http://localhost:5000/v1/remittances/createRemittance', sendMoney, {headers:httpHeaders})
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

//login api
login_API(userLogin: any): Promise<any> {
  const httpHeaders = new HttpHeaders();
  httpHeaders.append('Content-Type','application/json' );

  return new Promise<any>((resolve, reject) => {
    this.api.post('http://localhost:5000/v1/authen/login', userLogin, {headers:httpHeaders})
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

