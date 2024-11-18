import { Component, OnInit } from '@angular/core';
import { Residence } from '../../core/models/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
})
export class ResidencesComponent implements OnInit {
  title: string = 'Liste des résidences';
  residences: Residence[] = [];
  hide: boolean = false;
  selectedResidence: Residence = new Residence();
  ngOnInit() {
    this.residences = [
      {
        id: 1,
        name: 'El fel',
        address: 'Borj Cedria',
        image: '../../assets/images/R1.jpg',
        status: 'Disponible',
      },
      {
        id: 2,
        name: 'El yasmine',
        address: 'Ezzahra',
        image: '../../assets/images/R2.jpg',
        status: 'Disponible',
      },
      {
        id: 3,
        name: 'El Arij',
        address: 'Rades',
        image: '../../assets/images/R3.jpg',
        status: 'Vendu',
      },
      {
        id: 4,
        name: 'El Anber',
        address: 'inconnu',
        image: '../../assets/images/R4.jpg',
        status: 'En Construction',
      },
    ];
    console.log(this.hide)
    console.log(this.selectedResidence)
  }

  showAddress(residence: Residence) {
    this.hide = true;
    this.selectedResidence = residence;
  }
}
