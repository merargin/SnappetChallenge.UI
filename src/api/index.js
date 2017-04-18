import grades from '../store/grades';
import details from '../store/details';


const getGrades = () => {
    return grades;
};

const getDetails = (level) => {
    return details['grade'+level];
}

export default { getGrades, getDetails }
