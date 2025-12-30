import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-focus-input',
  imports: [],
  templateUrl: './focus-input.html',
  styleUrl: './focus-input.css',
})
export class FocusInput implements AfterViewInit {
  
  @ViewChild('nameInput') nameInputref!:ElementRef;
  ngAfterViewInit(): void {
    this.nameInputref.nativeElement.focus();
   this.nameInputref.nativeElement.color="red";
   console.log("ngAfterViewinit called")
  }

}
