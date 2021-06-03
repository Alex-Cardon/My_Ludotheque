-- Revert my_ludotheque:mechanics_functions from pg

BEGIN;

DROP FUNCTION "add_mechanics";

DROP FUNCTION "update_mechanics";

DROP FUNCTION "delete_mechanics";

COMMIT;
