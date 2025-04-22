import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsFromComponent } from './accounts-from.component';

describe('AccountsFromComponent', () => {
  let component: AccountsFromComponent;
  let fixture: ComponentFixture<AccountsFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountsFromComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountsFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
