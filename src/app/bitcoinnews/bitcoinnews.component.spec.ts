import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinnewsComponent } from './bitcoinnews.component';

describe('BitcoinnewsComponent', () => {
  let component: BitcoinnewsComponent;
  let fixture: ComponentFixture<BitcoinnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitcoinnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
