import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule
} from "@angular/material";

@Component({
  selector: "app-user-more-details",
  templateUrl: "./user-more-details.component.html",
  styleUrls: ["./user-more-details.component.css"]
})
export class UserMoreDetailsComponent implements OnInit {
  name: string;
  email: string;
  password: string;
  type: number;
  constructor() {} //public dailogref:MatDialogRef<UserMoreDetailsComponent>,
  //@Inject(MAT_DIALOG_DATA) public  data:user,) { }

  ngOnInit() {
    // this.name=this.data.name;
    // this.password=this.data.password;
    // this.email=this.data.email;
    // this.type=this.data.type;
  }
  // getUserById(uid:number)
  // {
  //   return this._data.getUserById(uid).subscribe(
  //     (data:user)=>{
  //       console.log(data);
  //       this.userarr=data;
  //       console.log(this.userarr);
  //     }
  //   )
  // }
}
