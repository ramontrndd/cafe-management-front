import { Component, OnInit } from '@angular/core';
import { BillService } from '../../_services/bill.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from '../../_services/snackbar.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { GlobalConstants } from '../../shared/global-constants';
import { ViewBillProductsComponent } from '../dialog/view-bill-products/view-bill-products.component';
import { ConfirmationComponent } from '../dialog/confirmation/confirmation.component';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-view-bill',
  templateUrl: './view-bill.component.html',
  styleUrl: './view-bill.component.scss',
})
export class ViewBillComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'email',
    'contactNumber',
    'paymentMethod',
    'total',
    'view',
  ];
  dataSource: any;
  responseMessage: any;

  constructor(
    private billService: BillService,
    private ngxService: NgxUiLoaderService,
    private snackbarService: SnackbarService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.ngxService.start();
    this.tableData();
  }

  tableData() {
    this.billService.getBills().subscribe(
      (response: any) => {
        this.ngxService.stop();
        this.dataSource = new MatTableDataSource(response);
      },
      (error: any) => {
        this.ngxService.stop();
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        } else {
          this.responseMessage = GlobalConstants.genericError;
        }
        this.snackbarService.openSnackbar(
          this.responseMessage,
          GlobalConstants.error
        );
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  handleViewAction(values: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      data: values,
    };
    dialogConfig.width = '100%';
    const dialogRef = this.dialog.open(ViewBillProductsComponent, dialogConfig);
    this.router.events.subscribe(() => {
      dialogRef.close();
    });
  }
  downloadReportAction(values: any) {
    this.ngxService.start();
    var data = {
      name: values.name,
      email: values.email,
      uuid: values.uuid,
      contactNumber: values.contactNumber,
      paymentMethod: values.paymentMethod,
      totalAmout: values.totalAmout,
      productDetails: values.productDetails,
    };
    this.billService.getPDF(data).subscribe((response) => {
      saveAs(response, values.uuid + 'pdf');
      this.ngxService.stop();
    });
  }

  handleDeleteAction(values: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      message: 'deletar a ' + values.name + ' Conta ',
    };
    const dialogRef = this.dialog.open(ConfirmationComponent, dialogConfig);
    const sub = dialogRef.componentInstance.onEmitStatusChange.subscribe(
      (response) => {
        this.ngxService.start();
        this.deleteProduct(values.id);
        dialogRef.close();
      }
    );
  }

  deleteProduct(id: any) {
    this.billService.delete(id).subscribe(
      (response: any) => {
        this.ngxService.stop();
        this.tableData();
        this.responseMessage = response?.message;
        this.snackbarService.openSnackbar(this.responseMessage, 'Success');
      },
      (error: any) => {
        this.ngxService.stop();
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        } else {
          this.responseMessage = GlobalConstants.genericError;
        }
        this.snackbarService.openSnackbar(
          this.responseMessage,
          GlobalConstants.error
        );
      }
    );
  }
}
