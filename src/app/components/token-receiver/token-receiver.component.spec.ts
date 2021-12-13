import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenReceiverComponent } from './token-receiver.component';

describe('TokenReceiverComponent', () => {
  let component: TokenReceiverComponent;
  let fixture: ComponentFixture<TokenReceiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenReceiverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
