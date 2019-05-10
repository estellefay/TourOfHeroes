import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // La variable hero est corespondante au model Hero
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
