/**
 * Definition for Employee.
 * class Employee {
 *     id: number
 *     importance: number
 *     subordinates: number
 *     constructor(id: number, importance: number, subordinates: number[]) {
 *         this.id = (id === undefined) ? 0 : id;
 *         this.importance = (importance === undefined) ? 0 : importance;
 *         this.subordinates = (subordinates === undefined) ? [] : subordinates;
 *     }
 * }
 */

function getImportance(employees: Employee[], id: number): number {
  let importance = 0;
  const getSubImportance = (id: number, importance: number): number => {
    const [employee] = employees.filter(
      (employee: Employee) => employee.id === id
    );
    const subIdArray = employee.subordinates;
    if (subIdArray.length === 0) return employee.importance;
    const result = subIdArray.reduce(
      (acc: number, id: number) => acc + getSubImportance(id, importance)
    );
    importance += result;
    return result;
  };

  getSubImportance(id, importance);
  return importance;
}
