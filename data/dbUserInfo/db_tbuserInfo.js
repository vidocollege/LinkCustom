var config = require('../dbConfig');
var sql = require('mssql');

async function getUser(){
    try {
        let pool = await sql.connect(config);
        let student = await pool.request().query("select * from userInfo");
        return student.recordsets
         
    } catch (error) {
        console.log(error)
    } 
}
module.exports = {
    getUser : getUser
}