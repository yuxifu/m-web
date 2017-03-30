import { Injectable } from '@angular/core';     // added
import { FormData } from '../_models';

@Injectable()     
export class FormService {
    private forms: Array<FormData> = [];

    getAllForms() {
        return this.forms;
    }

    setForms(newForms: Array<FormData>) {
        this.forms = newForms;
    }

    getForm(formId: number): FormData {
        let form = this.forms.find((form) => form.id === formId);

        if (!form) {
            form = null;
        }

        return form;
    }

}