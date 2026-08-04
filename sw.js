// سرویس‌ورکر ساده فقط برای فعال شدن قابلیت نصب (Add to Home Screen)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', () => {});
