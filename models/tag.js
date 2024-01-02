module.exports = class tag{
    constructor(id, tag){
        this.id = id;
        this.tag = tag;
    }
    //
    async save(){
        return await db.execute(`INSERT INTO tag (tag) 
        VALUES (?)`,
        [this.tag]
        );
    }
    //	
    static find_all(){
        return db.execute(`SELECT id, tag
        FROM tag`);
    }
    //
    static find_by_id(id){
        return db.execute(`SELECT id, tag
        FROM tag
        WHERE tag.id = ?`,
        [id]
        );
    }
    static async find_by_tag(data){
        return await db.execute(`SELECT id
        FROM tag
        WHERE tag.tag = ?`,
        [data]
        );
    }
    //
    static delete_by_id(id){
        return db.execute(`DELETE FROM tag
        WHERE tag.id = ?` ,
        [id]
        );
    }
    // 
    static update_by_id(id, tag){
        return db.execute(`UPDATE tag 
        SET tag = ?
        WHERE tag.id = ?`, [tag, id]);
    }       
}