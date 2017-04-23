// 业务对象（Business Object） - 为传输对象填充数据的业务服务。
// 传输对象（Transfer Object） - 简单的 POJO，只有设置/获取属性的方法。
// 客户端（Client） - 客户端可以发送请求或者发送传输对象到业务对象


class StudentVO {
   private name: string;
   private rollNo: number;

   constructor(name: string, rollNo: number){
      this.name = name;
      this.rollNo = rollNo;
   }

   getName() {
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

class StudentBO {
   
   //列表是当作一个数据库
   students: Array<StudentVO>;

   constructor(){
      let students = new Array<StudentVO>();
      let student1 = new StudentVO("Robert",0);
      let student2 = new StudentVO("John",1);
      students.push(student1);
      students.push(student2);      
   }
   deleteStudent(student: StudentVO) {
      this.students.splice(student.getRollNo(), 1);
      console.log("Student: Roll No " 
      + student.getRollNo() +", deleted from database");
   }

   //从数据库中检索学生名单
   getAllStudents(): Array<StudentVO> {
      return this.students;
   }

   getStudent(rollNo: number) {
      return this.students[rollNo];
   }

   updateStudent(student: StudentVO) {
      this.students[student.getRollNo()].setName(student.getName());
      console.log("Student: Roll No " 
      + student.getRollNo() +", updated in the database");
   }
}


let studentBusinessObject = new StudentBO();

//输出所有的学生
for (let student of studentBusinessObject.getAllStudents()) {
   console.log("Student: [RollNo : "
   +student.getRollNo()+", Name : "+student.getName()+" ]");
}

//更新学生
let student =studentBusinessObject.getAllStudents().get(0);
student.setName("Michael");
studentBusinessObject.updateStudent(student);

//获取学生
studentBusinessObject.getStudent(0);
console.log("Student: [RollNo : "
+student.getRollNo()+", Name : "+student.getName()+" ]");