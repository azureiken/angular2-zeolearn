import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { AuthRoutes } from './auth/index';
import { XMenRoutes } from './xmen/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...AuthRoutes,
  ...XMenRoutes
];
