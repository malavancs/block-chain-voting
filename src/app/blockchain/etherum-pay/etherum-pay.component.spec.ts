import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtherumPayComponent } from './etherum-pay.component';

describe('EtherumPayComponent', () => {
  let component: EtherumPayComponent;
  let fixture: ComponentFixture<EtherumPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtherumPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtherumPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
