import { Component } from '@angular/core';
import { ButtonComponent, ChipComponent } from '@ui-kit';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ButtonComponent, ChipComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
