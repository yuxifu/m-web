import { Component, OnInit } from '@angular/core';
import { Car } from '../../domain/car';
import { CarService } from '../../service/carservice';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-primeng',
  templateUrl: './primeng.component.html',
  styleUrls: ['./primeng.component.css']
})
export class PrimengComponent implements OnInit {

  // ----- Data Table -----
  cars: Car[];

  cols: any[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCarsSmall().then(cars => this.cars = cars);

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];

    //images
    this.images = [];
    this.images.push({ source: 'assets/pics/pic1.jpg', alt: '', title: 'Dog' });
    this.images.push({ source: 'assets/pics/pic2.jpg', alt: '', title: 'Blue' });
    this.images.push({ source: 'assets/pics/pic3.jpg', alt: '', title: 'Coloration' });

    //chart
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#4bc0c0'
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#565656'
        }
      ]
    }

  }

  // ----- Message -----
  msgs: Message[] = [];
  msgs2: Message[] = [];
  
  showSuccess() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
  }

  showInfo() {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
  }

  showWarn() {
    this.msgs = [];
    this.msgs.push({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
  }

  showError() {
    this.msgs = [];
    this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
  }

  showMultiple() {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Message 1', detail: 'PrimeNG rocks' });
    this.msgs.push({ severity: 'info', summary: 'Message 2', detail: 'PrimeUI rocks' });
    this.msgs.push({ severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks' });
  }

  clear() {
    this.msgs = [];
  }

  //
  images: any[];

  //chart
  data: any;

  selectData(event) {
    this.msgs2 = [];
    this.msgs2.push({ severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index] });
  }

  public anyMessage() {
    return this.msgs.length > 0;
  }

}