import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtherumBalanceComponent } from './etherum-balance.component';

describe('EtherumBalanceComponent', () => {
  let component: EtherumBalanceComponent;
  let fixture: ComponentFixture<EtherumBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtherumBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtherumBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
