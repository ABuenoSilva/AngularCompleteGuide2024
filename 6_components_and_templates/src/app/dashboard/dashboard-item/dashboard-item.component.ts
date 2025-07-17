import { Component, /*Input,*/ input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  // @Input para versões anteriores à 17 (continua funcionando após)
  // @Input({ required: true }) image!: { src: string; alt: string };
  // @Input({ required: true }) title!: string;
  // input() somente a partir da versão 17 - é um signal
  image = input.required<{ src: string; alt: string }>();
  title = input.required<string>();
}
