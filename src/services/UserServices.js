const connection = require('../database/connection');
const { search } = require('../services/StatesServices');
/** 
 * TODO:
 * 
 * CRUD in KNEX ORM
 */
module.exports = {
    async index(){
        return await connection('users').select('*');
    },
    
    async store( userId, stateId){
        const user = await connection('users').insert({
            id : userId, 
            stateId,
        });
        return user;
    },
    
    async update( userId, stateId ){
        const user = await connection('users').where('id', userId).select('*').first();
        
        return await connection('users').where('id', userId).update({
            stateId
        });
    },
    
    async searchUser( userId ){
        const user = await connection('users').where('id', userId).select('*').first();
        return user;
    },
    
    async usersState( stateId ){
        const users = await connection('users').where('stateId', stateId).select('*');
        return users;
    }
    
    
};