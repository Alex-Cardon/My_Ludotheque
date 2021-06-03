-- Deploy my_ludotheque:extension_function to pg

BEGIN;

CREATE FUNCTION add_extension(extension json) RETURNS extension AS $$
INSERT INTO
    "extension" (
        "title",
        "year",
        "game_id"
    )
VALUES
    (
        (extension ->> 'title'),
        (extension ->> 'year') :: pint,
        (extension ->> 'game_id') :: int
    ) RETURNING *;

$$ LANGUAGE sql;

CREATE
OR REPLACE FUNCTION update_extension(extension_input json) RETURNS extension AS $$
UPDATE
    "extension"
SET
    "title" = extension_input ->> 'title',
    "year" = (extension_input ->> 'year') :: pint,
    "game_id" = (extension_input ->> 'game_id') :: int
WHERE
    "id" = (extension_input ->> 'id') :: int RETURNING *;

$$ LANGUAGE sql;

CREATE
OR REPLACE FUNCTION delete_extension(id_input int) RETURNS void AS $$
UPDATE
    "extension"
SET
    "deleted_at" = now()
WHERE
    id = id_input $$ LANGUAGE sql;

COMMIT;
