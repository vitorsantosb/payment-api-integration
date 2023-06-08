const {serverInit} = require('./backend/init');

async function init(){
    await serverInit();
}

init().catch(function (err){
   console.log(err);
});
