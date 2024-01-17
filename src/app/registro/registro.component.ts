import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  states = [
    {name: 'Almeria', abbreviation: 'AL'},
    {name: 'Cadiz', abbreviation: 'CA'},
    {name: 'Cordoba', abbreviation: 'CO'},
    {name: 'Granada', abbreviation: 'GR'},
    {name: 'Huelva', abbreviation: 'HE'},
    {name: 'Jaen', abbreviation: 'JA'},
    {name: 'Malaga', abbreviation: 'MA'},
    {name: 'Sevilla', abbreviation: 'SE'},
    {name: 'Huesca', abbreviation: 'HU'},
    {name: 'Teruel', abbreviation: 'TE'},
    {name: 'Zaragoza', abbreviation: 'ZA'},
    {name: 'Asturias', abbreviation: 'AS'},
    {name: 'Oviedo', abbreviation: 'OV'},
    {name: 'Pontevedra', abbreviation: 'PO'},
    {name: 'Valladolid', abbreviation: 'VA'},
    {name: 'Badajoz', abbreviation: 'BA'},
    {name: 'Caceres', abbreviation: 'CA'},
    {name: 'Alicante', abbreviation: 'AL'},
    {name: 'Albacete', abbreviation: 'AB'}
  ];

  onSubmit(): void {
    alert('Thanks!');
  }
}
