import { registerProjectRecord, registerScheduleRecord, registerUserRecord } from '@/main';

declare let global: any;
global.registerProjectRecord = registerProjectRecord;
// global.registerScheduleRecord = registerScheduleRecord;
// global.registerUserRecord = registerUserRecord;