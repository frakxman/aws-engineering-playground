import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-instance-playground',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './instance-playground.component.html',
  styleUrl: './instance-playground.component.scss'
})
export class InstancePlaygroundComponent {
  instanceFamilies = [
    {
      id: 't3',
      name: 'T3',
      type: 'GENERAL PURPOSE',
      description: 'Balanced compute for variable workloads.',
      vcpu: 2,
      memory: 4
    },
    {
      id: 'c5',
      name: 'C5',
      type: 'COMPUTE OPTIMIZED',
      description: 'Higher CPU performance for compute-intensive workloads.',
      vcpu: 2,
      memory: 4
    },
    {
      id: 'r5',
      name: 'R5',
      type: 'MEMORY OPTIMIZED',
      description: 'More memory for memory-intensive workloads.',
      vcpu: 2,
      memory: 16
    }
  ];

  selectedFamily = 't3';

  sizes = [
    {
      id: 'small',
      name: 'small',
      multiplier: 1
    },
    {
      id: 'medium',
      name: 'medium',
      multiplier: 2
    },
    {
      id: 'large',
      name: 'large',
      multiplier: 4
    },
    {
      id: 'xlarge',
      name: 'xlarge',
      multiplier: 8
    }
  ];

  selectedSize = 'medium';

  storageOptions = [
    {
      id: 'ebs',
      name: 'EBS',
      description: 'Persistent block storage'
    },
    {
      id: 'instance-store',
      name: 'Instance Store',
      description: 'Temporary local storage'
    }
  ];

  selectedStorage = 'ebs';

  selectFamily(id: string): void {
    this.selectedFamily = id;
  }

  selectSize(id: string): void {
    this.selectedSize = id;
  }

  selectStorage(id: string): void {
    this.selectedStorage = id;
  }

  get selectedFamilyData() {
    return this.instanceFamilies.find(
      family => family.id === this.selectedFamily
    )!;
  }

  get selectedSizeData() {
    return this.sizes.find(
      size => size.id === this.selectedSize
    )!;
  }

  get vcpu(): number {
    return this.selectedFamilyData.vcpu * this.selectedSizeData.multiplier;
  }

  get memory(): number {
    return this.selectedFamilyData.memory * this.selectedSizeData.multiplier;
  }

  get instanceName(): string {
    return `${this.selectedFamily}.${this.selectedSize}`;
  }
}
