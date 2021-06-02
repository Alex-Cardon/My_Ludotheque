-- Deploy my_ludotheque:publisher_functions to pg

BEGIN;

CREATE FUNCTION add_publisher(publisher json) RETURNS publisher AS $$
    INSERT INTO "publisher"
    ("name")
    VALUES(
        (publisher->>'name')
    ) RETURNING *;
$$ LANGUAGE sql;


CREATE FUNCTION update_publisher(publisher_input json) RETURNS publisher AS $$
    UPDATE "publisher" SET
    "name" = publisher_input->>'name'
    WHERE "id" = (publisher_input->>'id')::int
    RETURNING *;
$$ LANGUAGE sql;

CREATE FUNCTION delete_publisher(id_input int) RETURNS void AS $$
    UPDATE "publisher" SET
    "deleted_at" = now()
    WHERE id = id_input
$$ LANGUAGE sql;

COMMIT;
