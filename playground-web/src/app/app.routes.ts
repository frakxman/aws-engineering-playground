import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./overview/overview.component').then(
        (m) => m.OverviewComponent
      )
  },
  {
    path: 'services',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./services/services.component').then(
            (m) => m.ServicesComponent
          )
      },
      {
        path: 'compute',
        loadComponent: () =>
          import('./services/compute/compute.component').then(
            (m) => m.ComputeComponent
          ),
        children: [
          {
            path: 'ec2',
            loadComponent: () =>
              import('./services/compute/ec2/ec2.component').then(
                (m) => m.Ec2Component
              )
          }
        ]
      }
    ]
  }
];
