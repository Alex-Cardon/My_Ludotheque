-- Deploy my_ludotheque:game_functions to pg
BEGIN;

CREATE FUNCTION add_game(game json) RETURNS game AS $$
INSERT INTO
    "game" (
        "title",
        "locale",
        "year",
        "age_min",
        "duration",
        "player_num_min",
        "player_num_max",
        "cover",
        "publisher_id"
    )
VALUES
    (
        (game ->> 'title'),
        (game ->> 'locale'),
        (game ->> 'year') :: pint,
        (game ->> 'age_min') :: pint,
        (game ->> 'duration') :: pint,
        (game ->> 'player_num_min') :: pint,
        (game ->> 'player_num_max') :: pint,
        (game ->> 'cover'),
        (game ->> 'publisher_id') :: int
    ) RETURNING *;

$$ LANGUAGE sql;

CREATE
OR REPLACE FUNCTION update_game(game_input json) RETURNS game AS $$
UPDATE
    "game"
SET
    "title" = game_input ->> 'title',
    "locale" = game_input ->> 'locale',
    "year" = (game_input ->> 'year') :: pint,
    "age_min" = (game_input ->> 'age_min') :: pint,
    "duration" = (game_input ->> 'duration') :: pint,
    "player_num_min" = (game_input ->> 'player_num_min') :: pint,
    "player_num_max" = (game_input ->> 'player_num_max') :: pint,
    "cover" = (game_input ->> 'cover') :: text,
    "publisher_id" = (game_input ->> 'publisher_id') :: int
WHERE
    "id" = (game_input ->> 'id') :: int RETURNING *;

$$ LANGUAGE sql;

CREATE
OR REPLACE FUNCTION delete_game(id_input int) RETURNS void AS $$
UPDATE
    "game"
SET
    "deleted_at" = now()
WHERE
    id = id_input $$ LANGUAGE sql;

COMMIT;