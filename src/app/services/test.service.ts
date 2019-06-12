import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TestService {
  Url:string = 'http://192.168.1.27:8080/info';
  Url2:string = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http:HttpClient) { }

  addName(nam):Observable<any> {
    return this.http.post<any>(this.Url2, nam, httpOptions);
  }

  
}
