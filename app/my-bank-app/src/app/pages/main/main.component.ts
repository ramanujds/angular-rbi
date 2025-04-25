import { Component } from '@angular/core';
import { AccountsFromComponent } from "../../features/accounts/accounts-from/accounts-from.component";
import { AccountsListsComponent } from "../../features/accounts/accounts-lists/accounts-lists.component";
import { AccountsFormReactiveComponent } from "../../features/accounts/accounts-form-reactive/accounts-form-reactive.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [AccountsFromComponent, AccountsListsComponent, AccountsFormReactiveComponent, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
