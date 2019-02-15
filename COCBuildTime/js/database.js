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

            var sql = [
                // CREATE KING TABLE
                "CREATE TABLE IF NOT EXISTS king(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "townHallLevel INTEGER NOT NULL," +
                "timeRequired INTEGER NOT NULL);",
                // CREATE QUEEN TABLE
                "CREATE TABLE IF NOT EXISTS queen(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "townHallLevel INTEGER NOT NULL," +
                "timeRequired INTEGER NOT NULL);",
                // CREATE SPELL TABLE
                "CREATE TABLE IF NOT EXISTS spell(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "name VARCHAR(30) NOT NULL," +
                "spellFactoryLevel INTEGER NOT NULL," +
                "timeRequired INTEGER NOT NULL);"
            ];

            function successCreate() {
                console.info("Success: Table king created successfully ");
            }

            for(var i = 0; i < sql.length; i++){
                tx.executeSql(sql[i], [], successCreate, errorHandler);
            }
        }

        function successTransaction() {
            console.info("Create table transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    dropTables: function(){
        function txFunction(tx) {
            var sql = [
                "DROP TABLE IF EXISTS king;",
                "DROP TABLE IF EXISTS queen;",
                "DROP TABLE IF EXISTS spell;"
                ];

            function successDrop() {
                console.info("Success: Table dropped successfully");
            }

            for(var i = 0; i < sql.length; i++)
            {
                tx.executeSql(sql[i], [], successDrop, errorHandler);
            }
        }
        function successTransaction() {
            console.info("Drop table transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};