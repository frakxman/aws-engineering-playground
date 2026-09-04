import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-compute',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './compute.component.html',
  styleUrl: './compute.component.scss'
})
export class ComputeComponent {

  constructor(private router: Router) {}

  get isEc2Route(): boolean {
    return this.router.url === '/services/compute/ec2';
  }

}
