-- Active: 1704141279448@@localhost@3306@notesens
CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL,
    passwrd VARCHAR(200) NOT NULL,
    PRIMARY key (id)
)

CREATE TABLE IF NOT EXISTS tags (
    id INT NOT NULL AUTO_INCREMENT,
    tags VARCHAR(100) NOT NULL,
    PRIMARY key (id)
)

CREATE TABLE IF NOT EXISTS notes(
    id INT NOT NULL AUTO_INCREMENT,
    noteText TEXT NOT NULL,
    user_id INT NOT NULL,
    archivied BOOLEAN NOT NULL,
    PRIMARY key (id),
    FOREIGN KEY (user_id) REFERENCES users(id)
)

CREATE TABLE IF NOT EXISTS notesTags (
    id INT NOT NULL AUTO_INCREMENT,
    tag_id INT NOT NULL,
    note_id INT NOT NULL,
    PRIMARY key (id),
    FOREIGN KEY (tag_id) REFERENCES tags(id),
    FOREIGN KEY (note_id) REFERENCES notes(id)
)