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
            tx.executeSql("SELECT timeRequired FROM king WHERE id > ? AND townHallLevel <= ?;",
                options, successExecution, errorHandler);
        }
        function successExecution(tx, rs) {
            if(rs.rows.length > 0)
            {
                $("#txtKingTime").val(getHeroTimeRemaining(rs));
            }
            else
            {
                $("#txtKingTime").val("Zero Days");
            }
        }
        function successTransaction(tx, rs){
            console.info("King transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
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
            tx.executeSql("SELECT timeRequired FROM queen WHERE id > ? AND townHallLevel <= ?;",
                options, successExecution, errorHandler);
        }
        function successExecution(tx, rs) {
            if(rs.rows.length > 0)
            {
                $("#txtQueenTime").val(getHeroTimeRemaining(rs));
            }
            else
            {
                $("#txtQueenTime").val("Zero Days");
            }
        }
        function successTransaction(tx, rs){
            console.info("Queen transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};

var spell = {
    insert: function (options, callback) {
        function txFunction(tx) {
            var sql = "INSERT INTO spell(name, timeRequired, spellFactoryLevel) VALUES(?,?,?);";
            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Success: insert transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    getSpellTime: function (options, callback) {
        var sql = "SELECT timeRequired FROM spell " +
        "WHERE "
    }
};