import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsComponent } from './graphics.component';
import { PanoramaEquirectangularComponent } from '../panorama-equirectangular/panorama-equirectangular.component';
import { CubeComponent } from '../cube/cube.component';

describe('GraphicsComponent', () => {
  let component: GraphicsComponent;
  let fixture: ComponentFixture<GraphicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicsComponent, PanoramaEquirectangularComponent, CubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
