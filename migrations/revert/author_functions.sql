-- Revert my_ludotheque:author_functions from pg

BEGIN;

DROP FUNCTION "add_author";

DROP FUNCTION "update_author";

DROP FUNCTION "delete_author";

COMMIT;
