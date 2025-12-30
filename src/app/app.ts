import { Component, NgModule, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCard,} from './user-card/user-card';
import { Card } from './card/card';
import { Logger } from './logger/logger';
import { CommonModule } from '@angular/common';
import { Child } from './child/child';
import { Parent } from './parent/parent';
import { FocusInput } from './focus-input/focus-input';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UserCard,Card,Logger,CommonModule,Child,Parent,FocusInput],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('My-Demo-Application');

   shweta = "1234";
   messageFromParent ='Hello message from parent';
showLoggerComponent=true;
changeMessage(){
  this.messageFromParent='updated at updated at '+new Date().toLocaleTimeString();
}
toggleLogger(){
  this.showLoggerComponent=!this.showLoggerComponent;
}


}
