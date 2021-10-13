import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class AutoBotService {
  //lastSeenId
  getLastSeenId() {
    return fs.readFileSync('./src/auto-bot/log/last-seen-id.txt');
  }
  updateLastSeenId(id) {
    fs.writeFileSync('./src/auto-bot/log/last-seen-id.txt', id);
  }
  //Log
  getLog() {
    return fs.readFileSync('./src/auto-bot/log/log.txt', 'utf-8');
  }
  updateLog(log) {
    const oldLog = fs.readFileSync('./src/auto-bot/log/log.txt', 'utf-8');
    fs.appendFileSync('./src/auto-bot/log/log.txt', ' \n' + log);
    console.log(oldLog);
  }
}
