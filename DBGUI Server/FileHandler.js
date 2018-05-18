var fs = require('fs');

let FileHandler = function () { };

FileHandler.prototype.getAllUsers = function (filePath) {
    return (readJSONFile(__dirname + '/assets/tempDB.json'));
}

module.exports = new FileHandler();

readJSONFile = function (filePath) {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}