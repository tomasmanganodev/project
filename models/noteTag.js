module.exports = class noteTag {

    constructor(id, note_id, tag_id){
        this.id = id;
        this.note_id = note_id;
        this.tag_id = tag_id;
        
    }
    //
    async save(){
        return await db.execute(`INSERT INTO notestags (tag_id, note_id) 
        VALUES (?, ?)`,
        [this.tag_id, this.note_id]
        );
    }

    static find_by_noteid(id){
        return db.execute(`SELECT id, tag_id, note_id
        FROM notetags
        WHERE note_id = ?`,
        [id]
        );
    }
}