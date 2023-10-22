import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService) {

  }
  ngOnInit(): void {
    this.showSpinner()
  }

  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }


}
