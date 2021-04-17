const pg = require('pg');

class PostgresService {

    constructor() {
        this.connectionString = "postgresql://postgres:postgres@localhost:5432/tuhabitat"
        this.pool = new pg.Pool({connectionString:this.connectionString});

        
    }
    async executeSQL(sql) {
        let result = await this.pool.query(sql);
        return result;
    }
}

module.exports = PostgresService;



