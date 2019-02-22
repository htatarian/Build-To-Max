//TODO: Add the third hero

let king = {
    insert: function (options, callback) {
        function txFunction(tx) {
            tx.executeSql("INSERT INTO king VALUES(NULL,?,?);",
                options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, function () {
            console.info("Success: King Level Inserted");
        });
    },
    getTimeLeft: function (options) {
        function txFunction(tx) {
            tx.executeSql("SELECT SUM(timeRequired) AS total FROM king WHERE id > ? AND townHallLevel <= ?;",
                options, successExecution, errorHandler);
        }
        function successExecution(tx, rs) {
            let txtKingTime = $("#txtKingTime");
            if(rs.rows.length > 0)
            {
                txtKingTime.val(rs.rows[0].total);
            }
            txtKingTime.val(hoursToDaysHours(txtKingTime.val()));
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
            tx.executeSql("INSERT INTO queen VALUES(NULL,?,?);",
                options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, function () {
            console.info("Success: Queen Level Inserted");
        });
    },
    getTimeLeft: function (options) {
        function txFunction(tx) {
            tx.executeSql("SELECT SUM(timeRequired) AS total FROM queen WHERE id > ? AND townHallLevel <= ?;",
                options, successExecution, errorHandler);
        }
        function successExecution(tx, rs) {
            let txtQueenTime = $("#txtQueenTime");
            if(rs.rows.length > 0)
            {
                txtQueenTime.val(rs.rows[0].total);
            }
            txtQueenTime.val(hoursToDaysHours(txtQueenTime.val()));
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
            tx.executeSql("INSERT INTO spell VALUES(NULL,?,?,?,?);",
                options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Success: Spell Level Inserted");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    getTime: function (options) {

        function txFunction(tx) {
            tx.executeSql("SELECT SUM(timeRequired) AS total FROM spell " +
                "WHERE name = ? AND spellFactoryLevel <= ? AND spellLevel > ?;",
                options, getSpecifiedSpellTimeCallback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, function () {
            console.info("Success: Spell Max Time Fetched");
        });
    }
};

let troop = {
    insert: function (options, callback) {
        function txFunction(tx) {
            tx.executeSql("INSERT INTO troop VALUES(NULL,?,?,?,?);"
                , options, callback, errorHandler);
        }
        db.transaction(txFunction, errorHandler, function () {
            console.info("Success: Troop Level Inserted");
        });
    },
    getTime: function (options) {

        function txFunction(tx) {
            tx.executeSql("SELECT SUM(timeRequired) AS total FROM troop " +
                "WHERE name = ? AND barracksLevel <= ? AND troopLevel > ?;",
                options, getSpecifiedTroopTimeCallback, errorHandler);
        }
        db.transaction(txFunction, errorHandler, function () {
            console.info("Success: Troop Max Time Fetched");
        });
    }
};