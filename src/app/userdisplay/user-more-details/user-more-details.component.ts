import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-user-more-details',
  templateUrl: './user-more-details.component.html',
  styleUrls: ['./user-more-details.component.css']
})
export class UserMoreDetailsComponent implements OnInit {
name:string;
email:string;
password:string;
type:number;
  constructor(private _data:UserdataService) { }

  ngOnInit() {
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
