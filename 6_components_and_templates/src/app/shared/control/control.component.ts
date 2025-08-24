import {
  Component,
  ElementRef,
  inject,
  input,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  //Pode-se utilizar o decorator @HostBinding('class') para adicionar uma classe ao componente
  //É preferível utilizar no @Component porque HostBinding é para retrocompatibilidade
  //@HostBinding('class') className = 'control';

  //Também existe o decorator @HostListener() para eventos, que também é tratado no @Component de preferência
  //@HostListener('click') onClick() { console.log('clicked'); }

  label = input.required<string>();
  private el = inject(ElementRef);

  onClick() {
    console.log('clicked');
    console.log(this.el);
  }
}
