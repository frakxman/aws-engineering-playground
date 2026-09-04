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

  get familyDecision(): string {
    switch (this.selectedFamily) {
      case 'c5':
        return 'Compute optimized → prioritizes CPU performance for workloads that are primarily compute bound.';

      case 'r5':
        return 'Memory optimized → provides significantly more memory per vCPU for in-memory databases, caches, and analytics.';

      default:
        return 'General purpose → balances compute, memory, and network resources for a broad range of workloads.';
    }
  }

  get sizeDecision(): string {
    switch (this.selectedSize) {
      case 'small':
        return 'Small → baseline resources for lightweight workloads and development environments.';

      case 'large':
        return 'Large → scales the baseline configuration to provide more CPU and memory for heavier workloads.';

      case 'xlarge':
        return 'XLarge → significantly increases CPU and memory capacity for demanding workloads.';

      default:
        return 'Medium → doubles the baseline CPU and memory configuration for a balanced workload.';
    }
  }

  get storageDecision(): string {
    if (this.selectedStorage === 'instance-store') {
      return 'Instance Store → local storage with very low latency, but data is temporary and tied to the instance lifecycle.';
    }

    return 'EBS → persistent block storage that remains independent from the compute lifecycle.';
  }
}
