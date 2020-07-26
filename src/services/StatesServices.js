const connection = require('../database/connection');

module.exports = {
    async search( uf ){
        const state = await connection('states').where('uf', uf).select('*').first();
        return state;
    }
};
