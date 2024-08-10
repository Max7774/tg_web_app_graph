/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vite/client" />

interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
}

interface InitDataUnsafe {
  user?: TelegramUser;
  query_id?: string;
  auth_date?: number;
  hash?: string;
}

interface WebApp {
  initData: string;
  initDataUnsafe: any;
  // Добавьте другие методы и свойства WebApp, если это необходимо
}

interface Telegram {
  WebApp: any;
}

interface Window {
  Telegram: Telegram;
}
