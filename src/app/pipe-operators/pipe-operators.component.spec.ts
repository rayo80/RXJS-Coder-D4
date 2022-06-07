import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeOperatorsComponent } from './pipe-operators.component';

describe('PipeOperatorsComponent', () => {
  let component: PipeOperatorsComponent;
  let fixture: ComponentFixture<PipeOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeOperatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
