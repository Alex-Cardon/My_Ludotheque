-- Revert my_ludotheque:init from pg

BEGIN;

DROP TABLE "game_has_author";

DROP TABLE "game_has_theme";

DROP TABLE "game_has_mechanics";

DROP TABLE "extension";

DROP TABLE "game";

DROP TABLE "publisher";

DROP TABLE "author";

DROP TABLE "mechanics";

DROP TABLE "theme";

DROP DOMAIN "url";

DROP DOMAIN "pint";

COMMIT;
