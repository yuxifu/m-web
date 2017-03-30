import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
    RouterTestingModule
} from '@angular/router/testing';
import { HeroesPanelComponent } from './heroes-panel.component';

describe('HeroesPanelComponent', () => {
  let component: HeroesPanelComponent;
  let fixture: ComponentFixture<HeroesPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesPanelComponent ],
      imports: [ RouterTestingModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
