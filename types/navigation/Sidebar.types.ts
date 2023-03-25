import { RouteLocationRaw } from 'vue-router';

export interface SidebarItem {
  name: string;
  to: string | RouteLocationRaw;
  target?: '_blank' | '_parent' | '_self' | '_top' | (string & object) | null;
  icon: string;

  badge?: string;
}
