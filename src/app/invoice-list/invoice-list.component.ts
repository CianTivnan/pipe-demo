import { Component, OnInit } from '@angular/core';
import { Invoice } from '../services/invoice.model'
import { InvoiceService } from '../services/invoice.service'

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  constructor(
    private _invoiceService:InvoiceService,
    public invoices:Array<Invoice>
    ) {  }

  ngOnInit(): void {
   this.invoices = this._invoiceService.getInvoices()
   console.log(this.invoices);
  }

}
