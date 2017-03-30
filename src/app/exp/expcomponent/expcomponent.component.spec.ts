import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpcomponentComponent } from './expcomponent.component';
import { FormService } from '../../_services/form.service';

describe('ExpcomponentComponent', () => {
  let component: ExpcomponentComponent;
  let fixture: ComponentFixture<ExpcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpcomponentComponent ],
      providers: [
        FormService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
