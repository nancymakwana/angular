import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserdataService {
  private url: string = "http://localhost:3000/user/";
  constructor(public _http: HttpClient) {}
  getAllUser() {
    return this._http.get(this.url);
  }


  deleteUser(id: number) {
    let header = new HttpHeaders().set("Content-Type", "application/json");

    return this._http.delete(this.url + id, { headers: header });
  }
  addUser(item: FormData) {
    return this._http.post(this.url,item);
  }
  getUserById(id: number) {
    let header = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.get(this.url + id, { headers: header });
  }

  UpdateUser(item: user) {
    let body = JSON.stringify(item);
    let header = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.put(this.url + item.uid, body, { headers: header });

  return this._http.put(this.url+item.uid,item);
 }

}
