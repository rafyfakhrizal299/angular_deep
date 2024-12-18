import {Component, ElementRef, EventEmitter, output, Output, viewChild, ViewChild, ViewChildren} from '@angular/core';
import {ButtonComponent} from "../../../shared/components/button/button.component";
import {ControlComponent} from "../../../shared/components/control/control.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
    imports: [
        ButtonComponent,
        ControlComponent,
        FormsModule
    ],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
    // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
    private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
    enteredTitle = '';
    enteredText = '' ;
    // @Output() add = new EventEmitter();
    add = output<{title: string; text: string}>();

    ngOnInit(){
        console.log('ONINIT');
        console.log(this.form()?.nativeElement);
    }
    ngAfterViewInit(){
        console.log('After View Init');
        console.log(this.form()?.nativeElement);
    }
    onSubmit() {
        console.log();
        this.add.emit({title: this.enteredTitle, text: this.enteredText});
        // this.form()?.nativeElement.reset();
        this.enteredText = '';
        this.enteredTitle = '';
    }
}
