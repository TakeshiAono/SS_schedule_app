import { registerProjectRecord } from '@/main';

declare let global: any;
global.registerProjectRecord = registerProjectRecord;  // スプレッドシートの編集トリガーとしても使える
global.registerProjectRecord = registerProjectRecord;