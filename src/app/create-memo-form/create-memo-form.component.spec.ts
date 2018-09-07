import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMemoFormComponent } from './create-memo-form.component';

describe('CreateMemoFormComponent', () => {
  let component: CreateMemoFormComponent;
  let fixture: ComponentFixture<CreateMemoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMemoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMemoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
