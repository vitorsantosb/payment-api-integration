const {uuidv4, validate} = require('uuid');

function GenerateUserId(){
	return uuidv4();
}
function ValidateGeneratedId(id){
	return validate(id);
}

module.exports = {GenerateUserId, ValidateGeneratedId};