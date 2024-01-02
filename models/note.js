module.exports = class note{
    constructor(id, noteText, archivied, user_id){
        this.id = id;
        this.noteText = noteText;
        this.archivied = archivied;
        this.user_id = user_id;
    }
    //
    async save(){
        return await db.execute(`INSERT INTO notes (noteText, archivied, user_id) 
        VALUES (?)`,
        [this.noteText, this.archivied ,this.user_id]
        );
    }
    //	
    static find_by_user(id){
        return db.execute(`SELECT id, noteText, archivied, user_id
        FROM notes
        WHERE user_id = ?`,
        [id]
        );
    }
    //
    static find_by_id(id){
        return db.execute(`SELECT id, noteText, archivied
        FROM notes
        WHERE noteText.id = ?`,
        [id]
        );
    }
  
    static delete_by_id(id){
        return db.execute(`DELETE FROM notes
        WHERE notes.id = ?` ,
        [id]
        );
    }
    // 
    static update_by_id(id, noteText, archivied){
        return db.execute(`UPDATE notes 
        SET noteText = ?
        SET archivied= ?
        WHERE noteText.id = ?`, [noteText, archivied ,id]);
    }
    //

    static getArchivied(id){
        return db.execute(`SELECT id, noteText, archivied, user_id
        FROM notes
        WHERE user_id = ? AND archivied = TRUE`,
        [id]
        );
    }

    static getActive(id){
        return db.execute(`SELECT id, noteText, archivied, user_id
        FROM notes
        WHERE user_id = ? AND archivied = FALSE`,
        [id]
        );
    }
          
}