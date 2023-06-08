import {v4 as uuidv4, validate} from 'uuid';

function GenerateUserId(){
    return uuidv4();
}
function ValidateGeneratedId(id){
    return validate(id);
}

module.exports = {GenerateUserId, ValidateGeneratedId};