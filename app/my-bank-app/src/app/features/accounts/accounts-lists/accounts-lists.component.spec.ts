import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsListsComponent } from './accounts-lists.component';

describe('AccountsListsComponent', () => {
  let component: AccountsListsComponent;
  let fixture: ComponentFixture<AccountsListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountsListsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountsListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
