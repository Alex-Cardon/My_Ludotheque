-- Deploy my_ludotheque:author_functions to pg

BEGIN;


CREATE FUNCTION add_author(author json) RETURNS author AS $$
    INSERT INTO "author"
    ("firstname", "lastname")
    VALUES(
        (author->>'firstname'),
        (author->>'lastname')
    ) RETURNING *;
$$ LANGUAGE sql;


CREATE FUNCTION update_author(author_input json) RETURNS author AS $$
    UPDATE "author" SET
    "firstname" = author_input->>'firstname', 
    "lastname" = author_input->>'lastname'
    WHERE "id" = (author_input->>'id')::int
    RETURNING *;
$$ LANGUAGE sql;

CREATE FUNCTION delete_author(id_input int) RETURNS void AS $$
    UPDATE "author" SET
    "deleted_at" = now()
    WHERE id = id_input
$$ LANGUAGE sql;

COMMIT;
