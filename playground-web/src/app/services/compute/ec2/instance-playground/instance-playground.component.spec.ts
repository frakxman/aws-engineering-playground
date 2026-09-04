import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstancePlaygroundComponent } from './instance-playground.component';

describe('InstancePlaygroundComponent', () => {
  let component: InstancePlaygroundComponent;
  let fixture: ComponentFixture<InstancePlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstancePlaygroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstancePlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
