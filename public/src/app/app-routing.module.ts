import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import for you custom components
import { SampleOneComponent } from './SampleOne/SampleOne.component';
import { SampleTwoComponent } from './sample-two/sample-two.component';

//PageNotFound is built by hand
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SampleThreeComponent } from './sample-three/sample-three.component';

const routes: Routes = [
  //Routes to custom components
  {path:'home',component:SampleOneComponent},
  {path:'elsewhere',component:SampleTwoComponent, children:[
    {path:'nested/:id',component:SampleThreeComponent},
  ]
},

  //The following two routes are probably here to stay
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
