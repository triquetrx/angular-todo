import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss'],
})
export class BottomComponent implements OnInit {
  currentYear: Date = new Date();

  constructor() {}

  ngOnInit(): void {}
}
