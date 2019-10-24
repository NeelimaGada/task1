import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NewComponent } from './new/new.component';
import { OnborderedComponent } from './onbordered/onbordered.component';
import { GenerateComponent } from './generate/generate.component';

const routes: Routes = [
  {
    path: '',
    component: NewComponent,
    children:[{
     path:'onboard',
        component:OnborderedComponent
      },
      {
        path:'generate',
        component:GenerateComponent
      }
]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
