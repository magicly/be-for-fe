// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdd from '../../../app/controller/add';
import ExportHome from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    add: ExportAdd;
    home: ExportHome;
  }
}
