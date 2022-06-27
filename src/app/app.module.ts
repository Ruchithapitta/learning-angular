import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Project1Component } from './project1/project1.component';
import { TestComponent } from './test/test.component';
import { CustomstyleDirective } from './customstyle.directive';
import { ChildComponent } from './child/child.component';
import { DigitcountPipe } from './digitcount.pipe';
import { ReactiveComponent } from './reactive/reactive.component';
import { DebugComponent } from './debug/debug.component';
import { EntryComponent } from './entry/entry.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationComponent } from './animation/animation.component';
import { ReactiveFormsModule } from '@angular/forms';

import { environment } from '../environments/environment';






@NgModule({
  declarations: [
    AppComponent,
    Project1Component,
    TestComponent,
    CustomstyleDirective,
    ChildComponent,
    DigitcountPipe,
    ReactiveComponent,
    DebugComponent,
    EntryComponent,
    AnimationComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
