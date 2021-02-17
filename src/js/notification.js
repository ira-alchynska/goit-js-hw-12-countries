import { info, error, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';
defaultModules.set(PNotifyMobile, {});

function showNotificationToMany() {
  info({
    text: 'Too many matches found. Please enter a more specific query!',
  });
}

function showNotificationFail() {
  error({
    title: 'STOP!',
    text: 'Enter correct country name!',
    delay: 2000,
  });
}

export { showNotificationToMany, showNotificationFail };
