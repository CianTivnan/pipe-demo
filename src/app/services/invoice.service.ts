import { newArray } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Invoice } from '../services/invoice.model'

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor() { }


  invoice: Invoice;

  invoiceList = [new Invoice('500', '2019/12/07', 'Acme Services', '502.12', .175),
  new Invoice('600', '2020/07/23', 'Bababooey Industries', '600', .42)]
  //

  getInvoices() {
    return this.invoiceList;
  }
}



