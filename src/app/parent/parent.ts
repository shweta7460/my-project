import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, Component,ContentChild, DoCheck, ElementRef, OnInit } from '@angular/core';
import { Child } from "../child/child";

@Component({
  selector: 'app-parent',
  imports: [CommonModule, Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent implements OnInit,AfterContentInit,DoCheck,AfterContentChecked {
  @ContentChild('projectedContent') projectedContent!:ElementRef;
counter =0;

ngOnInit():void{
  console.log("parent: ngOnInit initializing");
};

ngDoCheck():void{
   console.log("Parent:Checking for changes");
   this.counter++;
};

ngAfterContentInit():void{
   console.log("Parent:Projected content is ready");
  //  console.log("projected content element",this.projectedContent.nativeElement)
};

ngAfterContentChecked():void{
   console.log("parent: projected content is checked");
};



}
