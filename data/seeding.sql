INSERT INTO "author" ("firstname", "lastname", "birthdate", "deathdate", "country_iso_2") VALUES
('George R.R.', 'Martin', '1948-09-20', NULL, 'US'),
('J.R.R.', 'Tolkien', '1892-01-03', '1973-09-02', 'UK');

INSERT INTO "publisher" ("name", "country_iso_2") VALUES
('J''ai lu', 'fr') ,
('Pocket', 'fr');

INSERT INTO "genre" ("label")
VALUES ('heroic-fantasy'), 
('médieval fantastique');


INSERT INTO "book" ("title", "publisher_id", "reference", "year", "locale", "page_count", "chapter_count", "front_cover") VALUES
('Le trône de fer',1,'5591', 1996,'fr_FR', 600, 0, 'NA'),
('Le trône de fer : Le donjon rouge',1,'6037', 1996,'fr_FR', 600, 0, 'NA'),
('Le trône de fer : La bataille des rois',1,'6090', 1999,'fr_FR', 600, 0, 'NA'),
('Le seigneur des anneaux : La communauté de l''anneau',2,'2657', 1966,'fr_FR', 600, 0, 'NA'),
('Le seigneur des anneaux : Les deux tours',2,'2658', 1966,'fr_FR', 600, 0, 'NA'),
('Le seigneur des anneaux : le retour du roi',2,'2659', 1966,'fr_FR', 600, 0, 'NA');

INSERT INTO "book_has_author" ("book_id", "author_id") VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 2),
(5, 2),
(6, 2);

INSERT INTO "book_has_genre" ("book_id", "genre_id") VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 2),
(5, 2),
(6, 2),
(1, 2),
(2, 2),
(3, 2),
(4, 1),
(5, 1),
(6, 1);