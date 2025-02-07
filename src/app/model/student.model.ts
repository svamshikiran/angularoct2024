export class Student{
    rollno: String;
    name: String;
    city: String;
    createdby: String;
    createddate: String;
    modifiedby: String;
    modifieddate: String;
    courseid: String;

    constructor(rollno: String, name: String, city: String, createdby: String, createddate: String, modifiedby: String, modifieddate:String, courseid: String){
        this.rollno = rollno;
        this.name = name;
        this.city = city;
        this.createdby = createdby;
        this.createddate = createddate;
        this.modifiedby = modifiedby;
        this.modifieddate = modifieddate;
        this.courseid = courseid;
    }
}