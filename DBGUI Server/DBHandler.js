const sql = require('mssql/msnodesqlv8');

let DBHandler = function () { };

DBHandler.prototype.addNewUser = function (input) {
    console.log('----------------------------');
    console.log(Object.values(JSON.parse(input)).join('\',\''));
    let queryParam = '';
    queryParam += '\'';
    queryParam += Object.values(JSON.parse(input)).join('\',\'');
    queryParam += '\'';
    console.log(queryParam);
    let query = "insert into users values (" + queryParam + ")";
    console.log(query);
    executeQuery(query);
}

DBHandler.prototype.getAllUsers = function (filePath) {
    return readFromDB("select * from users");
}

module.exports = new DBHandler();

let config = {
    driver: 'msnodesqlv8',
    server: '(local)',
    database: 'UsersDB',
    options: {
        trustedConnection: true,
        useUTC: true
    }
}

readFromDB = function (queryString) {
    return sql.connect(config).then(pool => {
        return pool.request().query(queryString);
    }).then(result => {
        sql.close();
        return result;
    });
}

executeQuery = function (queryString) {
    sql.connect(config).then(pool => {
        pool.request().query(queryString).then(result => {
            sql.close();
        });
    });
}