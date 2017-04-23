namespace DataAccessObject{
   class Student {
      private name: string;
      private rollNo: number;

      constructor(name: string,rollNo: number){
         this.name = name;
         this.rollNo = rollNo;
      }

      getName(): string {
         return this.name;
      }

      setName(name: string) {
         this.name = name;
      }

      getRollNo(): number {
         return this.rollNo;
      }

      setRollNo(rollNo: number) {
         this.rollNo = rollNo;
      }
   }

   interface StudentDao {
      getAllStudents() : Array<Student> ;
      getStudent(rollNo: number): Student;
      updateStudent(student: Student);
      deleteStudent(student: Student);
   }

   class StudentDaoImpl implements StudentDao {
      
      students: Array<Student>;

      constructor(){
         this.students = new Array<Student>();
         let student1 = new Student("Robert",0);
         let student2 = new Student("John",1);
         this.students.push(student1);
         this.students.push(student2);      
      }

      deleteStudent(student: Student) {
         this.students.splice(student.getRollNo(), 1);
         console.log("Student: Roll No " + student.getRollNo() 
            +", deleted from database");
      }

      //从数据库中检索学生名单
      getAllStudents(): Student[] {
         return this.students;
      }

      getStudent(rollNo: number) {
         return this.students[rollNo];
      }

      updateStudent(student: Student) {
         this.students[student.getRollNo()].setName(student.getName());
         console.log("Student: Roll No " + student.getRollNo() 
            +", updated in the database");
      }
   }

   let studentDao = new StudentDaoImpl();

   //输出所有的学生
   for (let student of studentDao.getAllStudents()) {
      console.log("Student: [RollNo : "
         +student.getRollNo()+", Name : "+student.getName()+" ]");
   }


   //更新学生
   let student = studentDao.getAllStudents()[0];
   student.setName("Michael");
   studentDao.updateStudent(student);

   //获取学生
   studentDao.getStudent(0);
   console.log("Student: [RollNo : "
      +student.getRollNo()+", Name : "+student.getName()+" ]");   


}
