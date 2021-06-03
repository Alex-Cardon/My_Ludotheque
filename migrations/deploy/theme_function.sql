-- Deploy my_ludotheque:theme_function to pg

BEGIN;

CREATE FUNCTION add_theme(theme json) RETURNS theme AS $$
    INSERT INTO "theme"
    ("label")
    VALUES(
        (theme->>'label')
    ) RETURNING *;
$$ LANGUAGE sql;


CREATE FUNCTION update_theme(theme_input json) RETURNS theme AS $$
    UPDATE "theme" SET
    "label" = theme_input->>'label'
    WHERE "id" = (theme_input->>'id')::int
    RETURNING *;
$$ LANGUAGE sql;

CREATE FUNCTION delete_theme(id_input int) RETURNS void AS $$
    UPDATE "theme" SET
    "deleted_at" = now()
    WHERE id = id_input
$$ LANGUAGE sql;

COMMIT;
