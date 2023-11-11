import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalnewsComponent } from './globalnews.component';

describe('GlobalnewsComponent', () => {
  let component: GlobalnewsComponent;
  let fixture: ComponentFixture<GlobalnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
