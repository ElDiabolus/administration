import {Component, Input, OnInit} from '@angular/core';
import {PdfService} from "../../../../api/services/pdf.service";

@Component({
  selector: 'app-card-pdf-renderer',
  templateUrl: './card-pdf-renderer.component.html',
  styleUrls: ['./card-pdf-renderer.component.scss']
})
export class CardPdfRendererComponent implements OnInit {

  constructor(protected pdfService: PdfService) { }

  @Input()
  public id;

  ngOnInit(): void {
  }

  download() {
    this.pdfService.apiPdfCardIdGet({id: this.id}).subscribe({
      error(err: any): void {
      }, next(value: void): void {
        var a = document.createElement("a");
        // @ts-ignore
        const url= 'data:application/pdf;base64,'+value.file;
        a.href = url;
        a.target = '_blank';
        a.click();
      }
    });
  }

}
