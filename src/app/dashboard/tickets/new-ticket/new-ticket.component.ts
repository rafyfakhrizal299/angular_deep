import { Component } from '@angular/core';
import {ButtonComponent} from "../../../shared/components/button/button.component";
import {ControlComponent} from "../../../shared/components/control/control.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [
    ButtonComponent,
    ControlComponent
  ],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

}
