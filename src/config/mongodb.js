const MongoClient = require("mongodb").MongoClient;
var connection = null;
var db = null;

function connect(callback){
    if(connection) return callback(null, db);
    console.log(process.env.MONGO_CONNECTION);
    
    MongoClient.connect(process.env.MONGO_CONNECTION,{ useUnifiedTopology: true, useNewUrlParser: true },(err, conn) => {
        if(err) 
            return callback(err, null);
        else {
            connection = conn;
            db = conn.db(process.env.DATABASE_NAME);
            return callback(null, db);
        }
    })
}

function disconnect(){
    if(!connection) return true;
    connection.close();
    connection = null;
    return true;
}

module.exports = { connect, disconnect }