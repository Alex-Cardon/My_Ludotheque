-- Revert my_ludotheque:publisher_functions from pg

BEGIN;

DROP FUNCTION "add_publisher";

DROP FUNCTION "update_publisher";

DROP FUNCTION "delete_publisher";

COMMIT;
