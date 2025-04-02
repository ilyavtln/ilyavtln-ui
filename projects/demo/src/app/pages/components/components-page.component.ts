import { Component } from '@angular/core';
import {ButtonComponent, ChipComponent} from "@ui-kit";

@Component({
  selector: 'app-components',
  standalone: true,
    imports: [
        ButtonComponent,
        ChipComponent
    ],
  templateUrl: './components-page.component.html',
  styleUrl: './components-page.component.scss'
})
export class ComponentsPageComponent {

}
