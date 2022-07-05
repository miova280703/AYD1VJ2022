const Student = require("../models/Student.js");
var utils = require("../utils.js");


exports.miembros = async function (req,res,next) {
    const studentGrupo = await getStudents();
    if(studentGrupo!=null){
        return res.status(200).send(studentGrupo);
    }
    next(utils.error(404));
};

function getStudents() {
    const student1 = new Student({carnet: 201700387, name: "CLAUDIA IOVANA MIRANDA ALVAREZ"});
    const student2 = new Student({carnet: 201602880, name: "BRYAN ALEXANDER PORTILLO ALVARADO"});
    const student3 = new Student({carnet: 201404106, name: "FERNANDO ALBERTO AMBROSIO ALEMÁN"});
    const student4 = new Student({carnet: 200925238, name: "SAMUEL ALBERTO PEREZ JIMENEZ"});
    const student5 = new Student({carnet: 201800516, name: "MYNOR ALISÓN ISAI SABAN CHE"});
    const studenetG = [];
    studenetG.push(student1,student2,student3,student4,student5);
    return studenetG;
}