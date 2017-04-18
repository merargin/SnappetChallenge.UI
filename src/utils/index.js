let lastId = 0;
let clsName = '';

const getId = () => {
    return lastId++;
}

const getStudents = (batch) => {
    let students = [];
    for(let i = 0; i < batch.total; i++){
        if(i < batch.good){
            clsName = 'pupil__listitem-content--good';
        } else if(i > (batch.total - batch.excellent)){
            clsName = 'pupil__listitem-content--excellent'
        } else {
            clsName = 'pupil__listitem-content--average'
        }
        students.push('pupil__listitem-content ' + clsName);
    }
    return students;
}

export default { getId, getStudents }
