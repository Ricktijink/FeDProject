import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemocardListComponent } from './memocard-list.component';

describe('MemocardListComponent', () => {
  let component: MemocardListComponent;
  let fixture: ComponentFixture<MemocardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemocardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemocardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
