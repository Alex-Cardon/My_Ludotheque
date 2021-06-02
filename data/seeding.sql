INSERT INTO "author" ("firstname", "lastname") VALUES
('Antoine', 'Bauza'),
('Frédéric', 'Henry'),
('Unknown', 'Unknown');

INSERT INTO "publisher" ("name") VALUES
('Repos Production') ,
('Bombyx ');

INSERT INTO "mechanics" ("label") VALUES
('Collection'),
('Pouvoirs'),
('Cartes'),
('Draft'),
('Simultanéité'),
('Construction');

INSERT INTO "theme" ("label")
VALUES ('Antiquité'), 
('Moyen Age');


INSERT INTO "game" ("title", "publisher_id", "age_min", "year", "locale", "duration", "player_num_min", "player_num_max") VALUES
('7 Wonders',1, 10, 2007,'fr_FR', 45, 3, 7),
('Les Bâtisseurs - Moyen-Âge', 2, 10, 2012,'fr_FR', 45, 2, 4);


INSERT INTO "extension" ("title", "year", "game_id", )
VALUES ('Leaders', '2012' 1);

INSERT INTO "game_has_author" ("game_id", "author_id") VALUES
(1, 1),
(2, 2);

INSERT INTO "game_has_theme" ("game_id", "theme_id") VALUES
(1, 1),
(2, 2);

INSERT INTO "game_has_mechanics" ("game_id", "mechanics_id") VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(2, 6);