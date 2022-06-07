import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablepersonasComponent } from './tablepersonas.component';

describe('TablepersonasComponent', () => {
  let component: TablepersonasComponent;
  let fixture: ComponentFixture<TablepersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablepersonasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablepersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
