module.exports = class user{
    constructor(id, email, password){

        this.id = id;
        this.email = email;
        this.password = password;
    }
    //
    async save(){
        return await db.execute(`INSERT INTO users 
        ( email, passwrd) 
        VALUES (?,?)`,
        [this.email, this.password] 
        );
    }
    //	
   
    //
    static async find_by_id(id){
        return  await db.execute(`SELECT id, name, id_username, 
        id_salary, id_date_start, id_birth_date
        FROM users
        WHERE users.id = ?`,
        [id]
        );
    }
    //
    static async find_by_email(data){
        return await db.execute(`SELECT id
        FROM users
        WHERE users.email = ?`,
        [data]
        );
    }
}