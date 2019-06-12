import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Com1Component } from "../app/com1.component"
import { Com2Component } from "../app/com2.component"

const routes: Routes = [
  { path: "path1", component: Com1Component },
  { path: "path2", component: Com2Component },
  { path: "", redirectTo: "/path1", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
