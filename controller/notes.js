const Note = require ("../models/note.js");
const Tag = require ("../models/tag.js");
const NoteTag = require ("../models/noteTag.js");


exports.postADD_Note = async (req, res, next) =>{
    const archivied = req.body.archivied;
    const noteText = req.body.noteText;
    const user_id = req.body.user_id;
    const NOTE = new Note (null, noteText, archivied, user_id);
    NOTE.save();
}

exports.postUPD_Note = async (req, res, next) =>{
    const archivied = req.body.archivied;
    const noteText = req.body.noteText;
    const note_id = req.body.note_id;
    Note.update_by_id(note_id, noteText, archivied);
}

exports.deleteNote = async (req, res, next) =>{
    const note_id = req.body.note_id;
    Note.delete_by_id(note_id);
}

exports.getUserNotes = async (req,res, next) =>{
    try {
        const NOTE = await Note.find_by_user();
        res.status(201).json({
          list: NOTE[0],
        });
      } catch (error) {
        next(error);
      }
}

exports.getActiveNotes = async (req, res, next) =>{
   
    try {
        const NOTE = await Note.getActive();
        res.status(201).json({
          list: NOTE[0],
        });
      } catch (error) {
        next(error);
      }
}

exports.getArchiviedNotes = async (req, res, next) =>{
   
    try {
        const NOTE = await Note.getArchivied();
        res.status(201).json({
          list: NOTE[0],
        });
      } catch (error) {
        next(error);
      }
}

exports.postADD_Tag = async (req, res, next) =>{
    const tag = require.body.tag;
    const TAG = new Tag(null, tag);
    TAG.save();
}

exports.postADD_NoteTag = async (req, res, next) =>{
  const tag = require.body.tag_id;
  const note = require.body.note_id;
  const nt = new NoteTag(null, tag_id, note_id);
  nt.save();
}

exports.getNotetag = async (req, res, next) =>{
  try {
    const note = req.param.note_id
    const NOTE = await NoteTag.find_by_noteid(note);
    res.status(201).json({
      list: NOTE[0],
    });
  } catch (error) {
    next(error);
  }
  
  
}