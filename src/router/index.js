import { createRouter, createWebHashHistory } from 'vue-router';

import Dashboard from '../pages/master/DashboardPage';
import Home from '../pages/HomePage';
import Profile from '../pages/ProfilePage';
import Message from '../pages/MessagePage';
import Download from '../pages/DownloadPage';
import Setting from '../pages/SettingPage';

const routes = [
  {
    name: 'Dashboard',
    path: '/',
    component: Dashboard,
    children: [
      { path: '/home', component: Home, name: 'Home' },
      { path: '/profile', component: Profile, name: 'Profile' },
      { path: '/message', component: Message, name: 'Message' },
      { path: '/download', component: Download, name: 'Download' },
      { path: '/setting', component: Setting, name: 'Setting' },
    ],
  },
];

const router = Router();

export default router;

function Router() {
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });
  return router;
}
