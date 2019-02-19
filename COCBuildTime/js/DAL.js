let king = {
    insert: function (options, callback) {
        function txFunction(tx) {
            let sql = "INSERT INTO king(townHallLevel, timeRequired) VALUES(?,?);";
            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Success: King Level Inserted");
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
                $("#txtKingTime").val("0 Days");
            }
        }
        function successTransaction(){
            console.info("Success: King Max Time Fetched");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};

let queen = {
    insert: function (options, callback) {
        function txFunction(tx) {
            let sql = "INSERT INTO queen(townHallLevel, timeRequired) VALUES(?,?);";
            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Success: Queen Level Inserted");
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
                $("#txtQueenTime").val("0 Days");
            }
        }
        function successTransaction(){
            console.info("Success: Queen Max Time Fetched");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};

let spell = {
    insert: function (options, callback) {
        function txFunction(tx) {
            let sql = "INSERT INTO spell(name, spellLevel, timeRequired, spellFactoryLevel) VALUES(?,?,?,?);";
            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Success: Spell Level Inserted");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    getSpecifiedSpellTime: function (options) {

        function txFunction(tx) {

            let sql = "SELECT * FROM spell " +
                "WHERE name = ? AND spellFactoryLevel <= ? AND spellLevel > ?;";

            tx.executeSql(sql, options, getSpecifiedSpellTimeCallback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, function () {
            console.info("Success: Spell Max Time Fetched");
        });
    }
};

let troop = {
    insert: function (options, callback) {
        function txFunction(tx) {
            let sql = "INSERT INTO troop(name, troopLevel, timeRequired, barracksLevel) VALUES(?,?,?,?);";
            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Success: Troop Level Inserted");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    getSpecifiedTroopTime: function (options) {

        function txFunction(tx) {

            let sql = "SELECT * FROM troop " +
                "WHERE name = ? AND barracksLevel <= ? AND troopLevel > ?;";

            tx.executeSql(sql, options, getSpecifiedTroopTimeCallback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, function () {
            console.info("Success: Troop Max Time Fetched");
        });
    }
};