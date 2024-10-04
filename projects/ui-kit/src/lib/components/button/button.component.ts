import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label?: string;
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  get buttonClass() {
    return {
      'btn-primary': this.type === 'primary',
      'btn-secondary': this.type === 'secondary',
      'btn-small': this.size === 'small',
      'btn-medium': this.size === 'medium',
      'btn-large': this.size === 'large',
    };
  }
}
