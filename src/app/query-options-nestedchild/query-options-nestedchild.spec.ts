import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryOptionsNestedchild } from './query-options-nestedchild';

describe('QueryOptionsNestedchild', () => {
  let component: QueryOptionsNestedchild;
  let fixture: ComponentFixture<QueryOptionsNestedchild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryOptionsNestedchild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryOptionsNestedchild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
