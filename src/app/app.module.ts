import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UserdisplayComponent } from "./userdisplay/userdisplay.component";
import { MatTableModule, MatInputModule } from "@angular/material";
import { UsermenuComponent } from "./usermenu/usermenu.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import {  MatPaginatorModule } from "@angular/material";
import {  rouingarr} from "./app.routing";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { UseraddComponent } from './userdisplay/useradd/useradd.component';
import { UsereditComponent } from './userdisplay/useredit/useredit.component';
import { UserMoreDetailsComponent } from './userdisplay/user-more-details/user-more-details.component';
import { UserdeleteComponent } from './userdisplay/userdelete/userdelete.component';


@NgModule({
  declarations: [AppComponent, UserdisplayComponent, UsermenuComponent, UseraddComponent, UsereditComponent, UserMoreDetailsComponent, UserdeleteComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,rouingarr,
    MatPaginatorModule,MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
