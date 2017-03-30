import { Component, OnInit } from '@angular/core';

import { FormService } from '../../_services/form.service';
import { FormData, Question } from '../../_models/';

@Component({
  selector: 'app-expcomponent',
  templateUrl: './expcomponent.component.html',
  styleUrls: ['./expcomponent.component.css']
})
export class ExpcomponentComponent implements OnInit {
  forms: FormData[];

  constructor(private formService: FormService) {
    formService.setForms([
      {
        id: 1,
        questions: [
          {
            controlType: 'radio',
            id: 'like',
            label: 'Do you like pizza?',
            options: [
              { label: 'Yes', value: 1 },
              { label: 'Of Course', value: 2 }
            ],
            required: true
          },
          {
            controlType: 'text',
            id: 'toppings',
            label: 'What toppings do you like?',
            required: false
          }
        ],
        title: 'Pizza Perfection'
      },
      {
        id: 5,
        questions: [
          {
            controlType: 'select',
            id: 'delicious',
            label: 'What is the best cheese for a burger?',
            options: [
              { label: '', value: 'no-cheese' },
              { label: 'American', value: 'american' },
              { label: 'Cheddar', value: 'cheddar' },
              { label: 'Provolone', value: 'provolone' },
              { label: 'Swiss', value: 'swiss' }
            ],
            required: true
          },
          {
            controlType: 'textarea',
            id: 'perfection',
            label: 'Describe your perfect burger:',
            required: true
          }
        ],
        title: 'Burger Bonanza'
      }
    ]);
    this.forms = formService.getAllForms();
  }

  ngOnInit() {
  }

}
