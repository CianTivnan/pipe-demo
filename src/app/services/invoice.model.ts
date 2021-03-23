import { stringify } from "@angular/compiler/src/util";

export class Invoice {
    invoiceNumber:string;
    date:string;
    name:string;
    netValue:string;
    vat:number;

    constructor(invoiceNumber:string, date:string, name:string, netValue:string, vat:number) {
        this.invoiceNumber = invoiceNumber;
        this.date = date;
        this.name = name;
        this.netValue = netValue;
        this.vat = vat;
    }
  }

