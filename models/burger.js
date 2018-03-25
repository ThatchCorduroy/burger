var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
 
  insertOne: function(column1, column2, value1, value2, cb) {
    orm.insertOne("burgers", column1, column2, value1, value2, function(res) {
      cb(res);
    });
  },
  updateOne: function(setcolumn, setvalue, whereCol, whereVal, cb) {
    orm.updateOne("burgers", setcolumn, setvalue, whereCol, whereVal, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;