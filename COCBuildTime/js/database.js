let db;

function errorHandler(tx, error){
    console.error("SQL Error: " + tx + " ( " + error.code + " ) : " + error.message );
}

let DB  = {
    createDatabase: function(){
        let shortName = "BuildTimeDB";
        let version = "1.0";
        let displayName = "COC Build Time Database";
        let dbSize = 2 * 1024 * 1024;

        function dbCreateSuccess() {
            console.info("Success: Database created successfully.");
        }
        db = openDatabase(shortName, version, displayName, dbSize, dbCreateSuccess);
    },
    createTables: function (){
        function txFunction(tx) {

            let sql = [
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
                "spellLevel INTEGER NOT NULL," +
                "timeRequired INTEGER NOT NULL," +
                "spellFactoryLevel INTEGER NOT NULL);",
                // CREATE SPELL TABLE
                "CREATE TABLE IF NOT EXISTS troop(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "name VARCHAR(30) NOT NULL," +
                "troopLevel INTEGER NOT NULL," +
                "timeRequired INTEGER NOT NULL," +
                "barracksLevel INTEGER NOT NULL);"
            ];

            function successCreate() {
                console.info("Success: Table created successfully ");
            }

            for(let i = 0; i < sql.length; i++){
                tx.executeSql(sql[i], [], successCreate, errorHandler);
            }
        }

        function successTransaction() {
            console.info("Create tables transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    dropTables: function(){
        function txFunction(tx) {
            let sql = [
                "DROP TABLE IF EXISTS king;",
                "DROP TABLE IF EXISTS queen;",
                "DROP TABLE IF EXISTS spell;",
                "DROP TABLE IF EXISTS troop;"
                ];

            function successDrop() {
                console.info("Success: Table dropped successfully");
            }

            for(let i = 0; i < sql.length; i++)
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