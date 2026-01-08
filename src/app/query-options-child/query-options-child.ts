import { Component } from '@angular/core';
import { QueryOptionsNestedchild } from "../query-options-nestedchild/query-options-nestedchild";

@Component({
  selector: 'app-query-options-child',
  imports: [QueryOptionsNestedchild],
  template: `
  <div>
    <p>Direct Child Component</p>
    <app-query-options-nestedchild></app-query-options-nestedchild>

  </div>
  `,

  
})
export class QueryOptionsChild {

}
