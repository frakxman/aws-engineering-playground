import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { InstancePlaygroundComponent } from './instance-playground/instance-playground.component';

@Component({
  selector: 'app-ec2',
  standalone: true,
  imports: [RouterLink, InstancePlaygroundComponent],
  templateUrl: './ec2.component.html',
  styleUrl: './ec2.component.scss'
})
export class Ec2Component {}
