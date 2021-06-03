-- Deploy my_ludotheque:mechanics_functions to pg

BEGIN;

CREATE FUNCTION add_mechanics(mechanics json) RETURNS mechanics AS $$
    INSERT INTO "mechanics"
    ("label")
    VALUES(
        (mechanics->>'label')
    ) RETURNING *;
$$ LANGUAGE sql;


CREATE FUNCTION update_mechanics(mechanics_input json) RETURNS mechanics AS $$
    UPDATE "mechanics" SET
    "label" = mechanics_input->>'label'
    WHERE "id" = (mechanics_input->>'id')::int
    RETURNING *;
$$ LANGUAGE sql;

CREATE FUNCTION delete_mechanics(id_input int) RETURNS void AS $$
    UPDATE "mechanics" SET
    "deleted_at" = now()
    WHERE id = id_input
$$ LANGUAGE sql;

COMMIT;
