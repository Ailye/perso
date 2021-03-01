import { Component, OnInit } from '@angular/core';
import 'bootstrap/dist/js/bootstrap.bundle';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor() { }

  currentFeature: any;

  featuresArray = [
    { name: "Tableau de compétences (TODO)", url: "url1" },
    { name: "CV et projet professionnel", url: "url2" },
    { name: "Compteur de mot (TODO)", url: "url3" },
    { name: "Générateur de citation (TODO)", url: "url4" },
    { name: "Pierre, feuille, ciseau (TODO)", url: "url5" },
    { name: "Bot (TODO)", url: "url6" },
    { name: "Dashboard (TODO)", url: "url7" },
  ]

  ngOnInit(): void {
    this.currentFeature = { name: "Current feature", url: "currentFeatureURL" }
  }

}
