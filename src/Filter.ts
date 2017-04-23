    class Person{
        constructor(public name: string, public gender: string, public maritalStatus: string){}
    }


    interface Criteria{
        meetCriteria(persons: Person[])
    }


    class CriteriaMale implements Criteria {
        meetCriteria(persons: Person[]){
            return persons.filter((Person) => Person.gender.toLowerCase() == 'male');
        }
    }

    class CriteriaFemale implements Criteria{
        meetCriteria(persons: Person[]){
            return persons.filter((Person) => Person.gender.toLowerCase() == 'female');
        }
    }

    class CriteriaSingle implements Criteria{
        meetCriteria(persons: Person[]){
            return persons.filter((Person) => Person.maritalStatus.toLowerCase() == 'single');
        }
    }

    class AndCriteria implements Criteria{
        constructor(public criteria: Criteria, public otherCriteria: Criteria){}

        meetCriteria(persons: Person[]){
            let firstCriteriaPersons = this.criteria.meetCriteria(persons);
            return this.otherCriteria.meetCriteria(firstCriteriaPersons);
        }
    }

    class OrCriteria implements Criteria{
        constructor(public criteria: Criteria, public otherCriteria: Criteria){}

        meetCriteria(persons: Person[]){
            let firstCriteriaPersons = <Person[]>this.criteria.meetCriteria(persons);
            let secondCriteriaPersons =  <Person[]>this.otherCriteria.meetCriteria(firstCriteriaPersons);

            firstCriteriaPersons.forEach((person) => {
                if(!secondCriteriaPersons.find(p => p === person)){ // 假如 person 不在 secondCriteriaPersons 中
                    secondCriteriaPersons.push(person);
                }
            });

            return secondCriteriaPersons;
        }
    }


let persons = new Array<Person>();

persons.push(new Person('Robert', 'Male', 'Single'));
persons.push(new Person("John", "Male", "Married"));
persons.push(new Person('Laura','Female','Married'));
persons.push(new Person("Diana", "Female", "Single"));
persons.push(new Person("Mike","Male","Single"));
persons.push(new Person("Boggy","Male","Single"));

let male = new CriteriaMale();
let female = new CriteriaFemale();
let single = new CriteriaSingle();

let singleMale = new AndCriteria(single, male);
let singleOrFemal = new OrCriteria(single, female);


function getFilter(propName : keyof Person, key: string){
    return (persons: Person[]) => {
        return persons.filter(p => (p[propName] as string).toLocaleLowerCase() == key)
    }
}

let femaleFilter = getFilter("gender", "female");

function maleFilter(persons : Person[]){
    return persons.filter(p => p.gender.toLocaleLowerCase() == 'male')
}

console.log(male.meetCriteria(persons));

console.log(maleFilter(persons));

console.log(female.meetCriteria(persons));

console.log(femaleFilter(persons));

console.log(singleMale.meetCriteria(persons));



