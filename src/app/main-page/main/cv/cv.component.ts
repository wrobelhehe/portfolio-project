import { Component } from '@angular/core';
import { MOCK_CV_DATA } from '../../../data/mocks/cv.mock';
import { FileDownloadService } from '../../../data/services/file-download.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {

  cvMock = MOCK_CV_DATA

  constructor(private fileDownloadService: FileDownloadService) { }

  downloadAndOpenPdf() {
    const pdfUrl = '../../../../assets/pdf/Wiktor_Wróbel_Resume_2023.pdf';
    const pdfName = 'Wiktor_Wróbel_Resume_2023.pdf';

    this.fileDownloadService.downloadFile(pdfUrl).subscribe(blob => {
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = pdfName;
      link.target = '_blank';
      link.click();
    });

  }
}
