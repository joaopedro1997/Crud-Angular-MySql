const db = require('../util/database');


module.exports = class Mercado{
  constructor(id, item){
    this.id = id;
    this.item = item;

  }

  static fetchAll(){
    return db.execute('SELECT * FROM produtos');
  }

  static post(item){
    return db.execute('INSERT INTO produtos (item) VALUES (?) ', [item])
  }
  static update(id, item){
    return db.execute('UPDATE produtos set item = ? WHERE id = ? ', [item,id])
  }
  static delete(id){
    return db.execute('DELETE FROM  produtos WHERE id = ? ', [id])
  }

};

