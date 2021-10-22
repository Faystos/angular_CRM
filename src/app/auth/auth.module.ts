import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { AuthComponent } from "./auth.component";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [AuthComponent]
})
export class AuthModule {}
