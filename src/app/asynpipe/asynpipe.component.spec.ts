import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsynpipeComponent } from './asynpipe.component';

describe('AsynpipeComponent', () => {
  let component: AsynpipeComponent;
  let fixture: ComponentFixture<AsynpipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsynpipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsynpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
