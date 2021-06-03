-- Revert my_ludotheque:theme_function from pg

BEGIN;


DROP FUNCTION "add_theme";

DROP FUNCTION "update_theme";

DROP FUNCTION "delete_theme";

COMMIT;
