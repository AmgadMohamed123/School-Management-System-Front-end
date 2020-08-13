import { Student } from './models/student';

export default class Utils {

  public static student: Student;


  /**
 * get array of names only for diagnostics
 * @param data :raw data handled from server
 */
  static getNames(data: Array<any>) {
    let names = [];
    data.forEach(record => names.push(record.name))
    return names;
  }

  /**
   * add is done false as init for all names
   * @param names : all diagnostics name to add is done to each
   */
  static addIsDone(names: Array<any>) {
    let items = [];
    names.forEach(name => items.push({ name, isDone: false }))
    return items
  }

  static getSelectedNames(records: Array<any>) {
    let selectedNames = [];
    records.filter(inspection => inspection.isDone).forEach(item => {
      selectedNames.push(item.name);
    });
    return selectedNames;
  }

}