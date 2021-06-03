-- Revert my_ludotheque:extension_function from pg

BEGIN;

DROP FUNCTION "add_extension";

DROP FUNCTION "update_extension";

DROP FUNCTION "delete_extension";

COMMIT;
