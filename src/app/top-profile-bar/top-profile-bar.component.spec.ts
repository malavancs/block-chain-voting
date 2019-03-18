import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopProfileBarComponent } from './top-profile-bar.component';

describe('TopProfileBarComponent', () => {
  let component: TopProfileBarComponent;
  let fixture: ComponentFixture<TopProfileBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopProfileBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopProfileBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
