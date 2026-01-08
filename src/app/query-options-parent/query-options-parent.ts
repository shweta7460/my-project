import { Component, computed, contentChildren, ElementRef, viewChild } from '@angular/core';
import { QueryOptionsChild } from '../query-options-child/query-options-child';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-query-options-parent',
  imports: [CommonModule],
  templateUrl: './query-options-parent.html',
  styleUrl: './query-options-parent.css',
})
export class QueryOptionsParent {
inputWrapperRef = viewChild('inputwrapper',{read:ElementRef})

allChildren = contentChildren(QueryOptionsChild, { descendants: true });
 allChildrenCount = computed(() => this.allChildren().length);

logInputWrapper(){
  console.log("ElementRef of #inputWrapper", this.inputWrapperRef());

}
}
