const mongoose = require('mongoose');
require('dotenv/config');

class Database {
    constructor(){
        this.mongoDataBase();
    }

    mongoDataBase(){
        let url = `mongodb+srv://${process.env.DB_USER || 'public'}:${process.env.USER_DB_PASSWORD || 'wzXqSkfGz7XktGwm'}@cluster0.xxc0e.mongodb.net/${process.env.DB_NAME || 'teste'}?retryWrites=true&w=majority`;
        this.conection = mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("Conexão realizada com sucesso");
        }).catch((error)=>{
            console.log(`Error: ${error}`);
        })
    }
}

module.exports = new Database();
