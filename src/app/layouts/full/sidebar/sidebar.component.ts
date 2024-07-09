import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, computed, Input, OnDestroy, signal } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

export type MenuItem = {
  state: string;
  icon: string;
  route: string;
  role: string;
};

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class AppSidebarComponent implements OnDestroy {
  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      state: 'Dashboard',
      route: 'dashboard',
      role: '',
    },
    {
      icon: 'category',
      state: 'Categorias',
      route: 'category',
      role: 'admin',
    },
    {
      icon: 'inventory_2',
      state: 'Produtos',
      route: 'product',
      role: 'admin',
    },
    {
      icon: 'list_alt',
      state: 'Pedidos',
      route: 'order',
      role: '',
    },
    {
      icon: 'import_contacts',
      state: 'Contas',
      route: 'bill',
      role: '',
    },
    {
      icon: 'people',
      state: 'Usuários',
      route: 'user',
      role: 'admin',
    },
  ]);

  sideNavCollpsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.sideNavCollpsed.set(val);
  }

  profilePicSiza = computed(() => (this.sideNavCollpsed() ? '32' : '100'));

  mobileQuery: MediaQueryList;
  token: any = localStorage.getItem('token');
  tokenPayload: any;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.tokenPayload = jwtDecode(this.token);
    this.mobileQuery = media.matchMedia('(min-width: 768px)');

    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
