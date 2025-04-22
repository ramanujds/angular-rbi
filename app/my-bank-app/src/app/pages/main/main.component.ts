import { Component } from '@angular/core';
import { AccountsFromComponent } from "../../features/accounts/accounts-from/accounts-from.component";
import { AccountsListsComponent } from "../../features/accounts/accounts-lists/accounts-lists.component";

@Component({
  selector: 'app-main',
  imports: [AccountsFromComponent, AccountsListsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
