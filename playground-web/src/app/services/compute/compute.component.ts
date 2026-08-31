import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-compute',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './compute.component.html',
  styleUrl: './compute.component.scss'
})
export class ComputeComponent {

}
