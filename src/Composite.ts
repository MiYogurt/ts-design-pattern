class Employee{
    name: string;
    dept: string;
    salary: number;

    subordinates: Employee[] = new Array<Employee>();

    constructor(name:  string, dept: string, sal: number){
        this.name = name;
        this.dept = dept;
        this.salary = sal;
    }

    add(e: Employee){
        this.subordinates.push(e);
    }

    remove(e: Employee){
        let index = this.subordinates.findIndex( item => item == e)
        if(index){
            this.subordinates.splice(index, 1);
        }
    }

    toString(){
        return ("Employee :[ Name : "+ this.name +", dept : "+ this.dept + ", salary :"+ this.salary+" ] \n");
    }
}

      let CEO = new Employee("John","CEO", 30000);

      let headSales = new Employee("Robert","Head Sales", 20000);

      let headMarketing = new Employee("Michel","Head Marketing", 20000);

      let clerk1 = new Employee("Laura","Marketing", 10000);
      let clerk2 = new Employee("Bob","Marketing", 10000);

      let salesExecutive1 = new Employee("Richard","Sales", 10000);
      let salesExecutive2 = new Employee("Rob","Sales", 10000);

      CEO.add(headSales);
      CEO.add(headMarketing);

      headSales.add(salesExecutive1);
      headSales.add(salesExecutive2);

      headMarketing.add(clerk1);
      headMarketing.add(clerk2);

      for(let person of CEO.subordinates){
          console.log(person);
          for(let nextPerson of person.subordinates){
              console.log(" \t " + nextPerson);
          }
      }