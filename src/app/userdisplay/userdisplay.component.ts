import { Component, OnInit, ViewChild } from "@angular/core";
import { UserdataService } from "./userdata.service";
import { MatTableDataSource, MatSort, MatPaginator, MatDialogRef, MatDialog } from "@angular/material";
import { Router } from '@angular/router';
import { UserMoreDetailsComponent } from './user-more-details/user-more-details.component';

@Component({
  selector: "app-userdisplay",
  templateUrl: "./userdisplay.component.html",
  styleUrls: ["./userdisplay.component.css"]
})
export class UserdisplayComponent implements OnInit {
  userarr: user[] = [];
  displayedColumns: string[] = ["name", "email", "password","action"];
  dataSource=new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private _data: UserdataService,private _router:Router,public _dailog:MatDialog) {
  }
  ngOnInit() {
    this._data.getAllUser().subscribe((data: user[]) => {
      this.userarr = data;
      console.log(data);
      this.dataSource.data = this.userarr;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  OnDeleteClick(item:user)
  {
    let position = this.userarr.indexOf(item);
    if (confirm("do you want to delete?")) {
      this._data.deleteUser(item.uid).subscribe((data: any) => {
        console.log(data);
        this.userarr.splice(position,1);
      });
    }
  }
  OnAddClick() {
    this._router.navigate(['adduser']);
  }


  onUpdateClick(item: user) {
    this._router.navigate(["/edituser", item.uid]);
  }
  OnViewMoreClick(item:user){
    this._dailog.open(UserMoreDetailsComponent,{
      data:item
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
