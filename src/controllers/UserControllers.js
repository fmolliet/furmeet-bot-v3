/** 
 * //TODO:
 * 
 *  Adapt all validators
 */
const { searchUser, update, store, usersState } = require('../services/UserServices');

module.exports = { 
    async registerUser(userId, location){
        const validState = await search(location.toUpperCase());
        
        if(searchUser(userId) && validState){
            await update(userId, validState.stateId );
            return 'Seu estado foi atualizado para '+ location.toUpperCase();
        } else if( validState ){
            await store(userId, validState.stateId);
            return 'Cadastrado com sucesso!';
        }
        
    },
    
    async listUsersFrom( location ){
        const validState = await search(location.toUpperCase());
        
        const users = await usersState(validState.stateId);
        return users;
    }
    
    
};

function getStateName(location){
    return db.get('states')
        .find({ UF : location.toUpperCase()})
        .map('estado')
        .value();
}

function listByLocation(location){
    if(validateState(location))
        return db.get('users')
            .filter({state: location.toUpperCase()})
            .map('id')
            .value();
    
    else 
        console.log('ERRO-UF');
 
}
