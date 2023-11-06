import { Component } from '@angular/core';
import { MOCK_CV_DATA } from '../../../data/mocks/cv.mock';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {


  cvMock = MOCK_CV_DATA
}
