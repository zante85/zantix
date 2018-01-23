import {InjectionToken} from '@angular/core';

import {IAppConfig} from './iapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = {
  routes: {
    zantix: 'zantix',
    error404: '404'
  },
  endpoints: {
    zantix: 'http://localhost:4200/#'
  },
  repositoryURL: 'https://github.com/zante85/zantix'
};
