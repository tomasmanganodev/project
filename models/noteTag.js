module.exports = class noteTag {}

    constructor(id, note_id, tag_id){
        this.id = id;
        
    }
    //
    async save(){
        return await db.execute(`INSERT INTO notestags () 
        VALUES (?)`,
        []
        );
    }
}