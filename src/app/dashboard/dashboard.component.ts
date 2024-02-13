import { Component, AfterViewInit } from '@angular/core';
import { DashboardService } from '../_services/dashboard.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from '../_services/snackbar.service';
import { GlobalConstants } from '../shared/global-constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements AfterViewInit {
  responseMessage: any;
  data: any;

  ngAfterViewInit() {}

  constructor(
    private dashboardService: DashboardService,
    private ngxService: NgxUiLoaderService,
    private snackbarService: SnackbarService
  ) {
    this.ngxService.start();
	this.dashboardData();
  }

  dashboardData() {
	this.dashboardService.getDetails().subscribe((response:any)=>{
		this.ngxService.stop();
		this.data = response;
	},(error:any)=>{
		this.ngxService.stop();
		console.log(error);
		if(error.error?.error){
			this.responseMessage = error.error?.message;
		}
		else {
			this.responseMessage = GlobalConstants.genericError;
		}
		this.snackbarService.openSnackbar(this.responseMessage, GlobalConstants.error)
	})
  }
}
