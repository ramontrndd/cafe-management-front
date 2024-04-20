import { Component, computed, HostListener, OnInit, signal } from '@angular/core';

/** @title Responsive sidenav */
@Component({
  selector: 'app-full-layout',
  templateUrl: 'full.component.html',
  styleUrls: ['./full.component.scss'],
})
export class FullComponent implements OnInit {
  constructor() {}

  collapsed = signal(false);

  sidenavWidth = computed(() => (this.collapsed() ? '65px' : '250px'));

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateSidenavVisibility();
  }

  ngOnInit() {
    this.updateSidenavVisibility();
  }

  private updateSidenavVisibility() {
    if (window.innerWidth >= 768) {
      this.collapsed.set(false);
    } else {
      this.collapsed.set(true);
    }
  }
}
