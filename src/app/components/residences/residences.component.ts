import { Component, OnInit } from '@angular/core';
import { Residence } from '../../core/models/residence';
import { ResidenceService } from 'src/app/services/residence.service';

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
  searchText: string = '';
  constructor(private r:ResidenceService){}
  ngOnInit() {
    this.residences = this.r.residences;
    console.log(this.hide);
    console.log(this.selectedResidence);
  }

  showAddress(residence: Residence) {
    this.hide = true;
    this.selectedResidence = residence;
  }

  filterResidence() {
    return this.residences.filter((r) =>
      r.address.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  listFavoris:Residence[]=[]
  addToFavoris(element:Residence) {
    let index = this.listFavoris.findIndex((r) => r.id == element.id);
    if (index == -1) {
      this.listFavoris.push(element);
    }
    else {
      this.listFavoris.splice(index, 1);
    }
    console.log(this.listFavoris)
  }

  isFavoris(residence: Residence) {
    return this.listFavoris.some((r) => r.id == residence.id);
  }
}
