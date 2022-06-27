import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { Project1Component } from './project1/project1.component';




const routes: Routes = [{
  path: 'test', component: TestComponent,
  children: [{ path: 'project1', component: Project1Component }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
