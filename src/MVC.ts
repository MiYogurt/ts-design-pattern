class Student {
   private rollNo: string;
   private name: string;
   getRollNo(): string {
      return this.rollNo;
   }
   setRollNo(rollNo: string) {
      this.rollNo = rollNo;
   }
   getName(): string {
      return this.name;
   }
   setName(name: string) {
      this.name = name;
   }
}

class StudentView {
   printStudentDetails(studentName: string,studentRollNo: string){
      console.log("Student: ");
      console.log("Name: " + studentName);
      console.log("Roll No: " + studentRollNo);
   }
}

class StudentController {
   private model: Student;
   private view: StudentView;

   constructor(model: Student,view: StudentView){
      this.model = model;
      this.view = view;
   }

   setStudentName(name: string){
      this.model.setName(name);      
   }

   getStudentName(){
      return this.model.getName();      
   }

   setStudentRollNo(rollNo: string){
      this.model.setRollNo(rollNo);      
   }

   getStudentRollNo(): string{
      return this.model.getRollNo();      
   }

   updateView(){            
      this.view.printStudentDetails(this.model.getName(), this.model.getRollNo());
   }   
}

function retriveStudentFromDatabase(){
   let student = new Student();
   student.setName("Robert");
   student.setRollNo("10");
   return student;
}

//从数据可获取学生记录
let model  = retriveStudentFromDatabase();

//创建一个视图：把学生详细信息输出到控制台
let view = new StudentView();

let controller = new StudentController(model, view);

controller.updateView();

//更新模型数据
controller.setStudentName("John");

controller.updateView();


