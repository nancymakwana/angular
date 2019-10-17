import { Routes, RouterModule, RoutesRecognized } from "@angular/router";
import { UserdisplayComponent } from "./userdisplay/userdisplay.component";
import { UseraddComponent } from './userdisplay/useradd/useradd.component';
import { UsereditComponent } from './userdisplay/useredit/useredit.component';
import { UserdeleteComponent } from './userdisplay/userdelete/userdelete.component';
import { UserMoreDetailsComponent } from './userdisplay/user-more-details/user-more-details.component';
const arr: Routes = [
  { path: "", component: UserdisplayComponent },
  { path: "useradd", component: UseraddComponent},
  { path: "useredit", component: UsereditComponent },
  { path: "userdelete", component: UserdeleteComponent},
  { path: "viewmore", component: UserMoreDetailsComponent},
  // { path: "pagenotfound", component: PagenotfoundComponent },
  // { path: '**', redirectTo: "/pagenotgound" }
];
export const rouingarr = RouterModule.forRoot(arr);
