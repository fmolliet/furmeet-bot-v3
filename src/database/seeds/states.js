
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('states').del()
        .then(() =>{
            // Inserts seed entries
            return knex('states').insert([
                {name: 'São Paulo', uf: 'SP'},
                {name: 'Minas Gerais', uf: 'MG'},
                {name: 'Acre', uf: 'AC'},
                {name: 'Alagoas', uf: 'AL'},
                {name: 'Amazonas', uf: 'AM'},
                {name: 'Amapá', uf: 'AP'},
                {name: 'Bahia', uf: 'BA'},
                {name: 'Ceará', uf: 'CE'},
                {name: 'Distrito Federal', uf: 'DF'},
                {name: 'Espirito Santo', uf: 'ES'},
                {name: 'Goiânia', uf: 'GO'},
                {name: 'Maranhão', uf: 'MA'},
                {name: 'Mato Grosso do Sul', uf: 'MS'},
                {name: 'Mato Grosso', uf: 'MT'},
                {name: 'Pará', uf: 'PA'},
                {name: 'Paraíba', uf: 'PB'},
                {name: 'Pernambuco', uf: 'PE'},
                {name: 'Piauí', uf: 'PI'},
                {name: 'Parana', uf: 'PR'},
                {name: 'Rio de Janeiro', uf: 'RJ'},
                {name: 'Rio Grande do Norte', uf: 'RN'},
                {name: 'Rondonia', uf: 'RO'},
                {name: 'Roraima', uf: 'RR'},
                {name: 'Rio Grande do Sul', uf: 'RS'},
                {name: 'Santa Catarina', uf: 'SC'},
                {name: 'Sergipe', uf: 'SE'},
                {name: 'Tocantins', uf: 'TO'},
            ]);
        });
};
