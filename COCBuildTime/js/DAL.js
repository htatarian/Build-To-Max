var king = {
    insert: function (options, callback) {
        function txFunction(tx) {
            var sql = "INSERT INTO king(townHallLevel, timeRequired) VALUES(?,?);";
            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Success: insert transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    getTimeLeft: function (options) {
        function txFunction(tx) {
            tx.executeSql("SELECT timeRequired FROM king WHERE id > ? AND townHallLevel <= ?;", options, successTransaction, errorHandler);
        }
        function successTransaction(tx, rs) {
            $("#txtKingTime").val(getHeroTimeRemaining(rs));
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
};

var queen = {
    insert: function (options, callback) {
        function txFunction(tx) {
            var sql = "INSERT INTO queen(townHallLevel, timeRequired) VALUES(?,?);";
            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Success: insert transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    getTimeLeft: function (options) {
        function txFunction(tx) {
            tx.executeSql("SELECT timeRequired FROM queen WHERE id > ? AND townHallLevel <= ?;", options, successTransaction, errorHandler);
        }
        function successTransaction(tx, rs) {
            $("#txtQueenTime").val(getHeroTimeRemaining(rs));
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
};

var spell = {
    insert: function (options, callback) {
        function txFunction(tx) {
            var sql = "INSERT INTO spell(spellName, townHallLevel, timeRequired) VALUES(?,?);";
            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Success: insert transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    getSpellTime: function (options, callback) {
        var sql = "SELECT timeRequired FROM spell " +
        "WHERE spellName"
    }
};