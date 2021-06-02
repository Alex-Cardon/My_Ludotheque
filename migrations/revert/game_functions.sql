-- Revert my_ludotheque:game_functions from pg

BEGIN;

DROP FUNCTION "add_game";

DROP FUNCTION "update_game";

DROP FUNCTION "delete_game";

COMMIT;
