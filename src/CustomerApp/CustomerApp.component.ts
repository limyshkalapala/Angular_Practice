import { Component } from '@angular/core';
import  {Customer} from './CustomerApp.model'

@Component({
  selector: 'app-root',
  templateUrl: './CustomerApp.view.html',
})
export class CustomerComponent {
  title = 'CustomerApplication';
  CustomerModel : Customer = new Customer();
}
