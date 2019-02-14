var db;

function errorHandler(tx, error){
    console.error("SQL Error: " + tx + " ( " + error.code + " ) : " + error.message );
}

var DB  = {
    createDatabase: function(){
        var shortName = "BuildTimeDB";
        var version = "1.0";
        var displayName = "COC Build Time Database";
        var dbSize = 2 * 1024 * 1024;

        function dbCreateSuccess() {
            console.info("Success: Database created successfully.");
        }
        db = openDatabase(shortName, version, displayName, dbSize, dbCreateSuccess);
    },
    createTables: function (){

        function txFunction(tx) {
            var sql = "CREATE TABLE IF NOT EXISTS king(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "townHallLevel INTEGER NOT NULL," +
                "timeRequired INTEGER NOT NULL);";

            var options = [];


            function successCreate() {
                console.info("Success: Table king created successfully ");
            }

            tx.executeSql(sql, options, successCreate, errorHandler);

            var sql1 = "CREATE TABLE IF NOT EXISTS queen(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "townHallLevel INTEGER NOT NULL," +
                "timeRequired INTEGER NOT NULL);";

            var options1 = [];


            function successCreate() {
                console.info("Success: Table queen created successfully ");
            }

            tx.executeSql(sql1, options1, successCreate, errorHandler);
        }

        function successTransaction() {
            console.info("Create table transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    dropTables: function(){
        function txFunction(tx) {
            var sql = "DROP TABLE IF EXISTS king;";
            var options = [];

            function successDrop() {
                console.info("Success: king table dropped successfully");
            }
            tx.executeSql(sql, options, successDrop, errorHandler);

            var sql1 = "DROP TABLE IF EXISTS queen;";
            var options1 = [];

            function successDrop() {
                console.info("Success: queen table dropped successfully");
            }

            tx.executeSql(sql1, options1, successDrop, errorHandler);
        }

        function successTransaction() {
            console.info("Drop table transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};