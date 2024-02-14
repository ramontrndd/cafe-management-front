import { MediaMatcher } from '@angular/cdk/layout';
import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  AfterViewInit,
  signal,
  computed,
} from '@angular/core';

/** @title Responsive sidenav */
@Component({
  selector: 'app-full-layout',
  templateUrl: 'full.component.html',
  styleUrls: ['./full.component.scss'],
})
export class FullComponent implements OnDestroy, AfterViewInit {
  constructor() {}

  ngOnDestroy(): void {}
  ngAfterViewInit() {}

  collapsed = signal(false)

  sidenavWidth = computed(()=> this.collapsed() ? '65px' : '250px')

}
