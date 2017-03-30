import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {
  OrderListModule, DataTableModule, SharedModule,
  MessagesModule, ButtonModule, GalleriaModule, ChartModule,
  GrowlModule
} from 'primeng/primeng';
import { PrimengComponent } from './primeng.component';
import { CarService } from '../../service/carservice';

describe('PrimengComponent', () => {
  let component: PrimengComponent;
  let fixture: ComponentFixture<PrimengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrimengComponent],
      imports: [HttpModule, FormsModule,
        OrderListModule, DataTableModule, SharedModule, MessagesModule,
        ButtonModule, GalleriaModule, ChartModule, GrowlModule],
      providers: [CarService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
