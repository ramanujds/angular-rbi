import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsFormReactiveComponent } from './accounts-form-reactive.component';

describe('AccountsFormReactiveComponent', () => {
  let component: AccountsFormReactiveComponent;
  let fixture: ComponentFixture<AccountsFormReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountsFormReactiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountsFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
