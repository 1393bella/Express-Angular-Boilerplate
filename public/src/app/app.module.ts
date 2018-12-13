import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// <*> Input form processor. Pretty much mandatory
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// <*> Added automatically
import { HttpFetchService } from './http-fetch.service';
import { SampleOneComponent } from './SampleOne/SampleOne.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SampleTwoComponent } from './sample-two/sample-two.component';
import { HttpClientModule } from '@angular/common/http';
import { SampleThreeComponent } from './sample-three/sample-three.component';

@NgModule({
   declarations: [
      AppComponent,
      SampleOneComponent,
      SampleTwoComponent,
      SampleThreeComponent,
      PageNotFoundComponent,
   ],
   // <*> FormsModule and HttpClientModule added by hand
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   //<*> Any additional services have to be added
   //here manually
   providers: [
      HttpFetchService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
