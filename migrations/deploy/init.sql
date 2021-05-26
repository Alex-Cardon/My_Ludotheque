-- Deploy my_ludotheque:init to pg

BEGIN;


CREATE DOMAIN url AS text
CHECK (VALUE ~ 'https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,255}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&\/\/=]*)');
COMMENT ON DOMAIN url IS 'match URLs (http or https)';

CREATE DOMAIN pint AS int
CHECK (VALUE >= 0);
COMMENT ON DOMAIN pint IS 'only positive integer is accepted';

CREATE TABLE "publisher" (
    "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL UNIQUE,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz,
    "deleted_at" timestamptz
);

CREATE TABLE "author" (
    "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "firstname" text NOT NULL,
    "lastname" text NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz,
    "deleted_at" timestamptz
);

CREATE TABLE "theme" (
    "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" text NOT NULL UNIQUE,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz,
    "deleted_at" timestamptz
);


CREATE TABLE "mechanics" (
    "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" text NOT NULL UNIQUE,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz,
    "deleted_at" timestamptz
);

CREATE TABLE "game" (
    "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" text NOT NULL,
    "locale" text NOT NULL DEFAULT 'fr_FR',
    "year" pint,
    "age_min" pint,
    "duration" pint,
    "player_num_min" pint NOT NULL DEFAULT 1,
    "player_num_max" pint,
    "cover" url,
    "publisher_id" integer NOT NULL REFERENCES "publisher"("id") ON DELETE CASCADE,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz,
    "deleted_at" timestamptz,
    UNIQUE ("publisher_id", "title")
);

CREATE TABLE "extension" (
    "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" text NOT NULL UNIQUE,
    "year" pint,
    "game_id" integer NOT NULL REFERENCES "game"("id") ON DELETE CASCADE,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz,
    "deleted_at" timestamptz,
    UNIQUE ("game_id", "title")
);

CREATE TABLE "game_has_author" (
    "game_id" integer NOT NULL REFERENCES "game"("id") ON DELETE CASCADE,
    "author_id" integer NOT NULL REFERENCES "author"("id") ON DELETE CASCADE,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    PRIMARY KEY ("game_id", "author_id")
);

CREATE TABLE "game_has_theme" (
    "game_id" integer NOT NULL REFERENCES "game"("id") ON DELETE CASCADE,
    "theme_id" integer NOT NULL REFERENCES "theme"("id") ON DELETE CASCADE,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    PRIMARY KEY ("game_id", "theme_id")
);

CREATE TABLE "game_has_mechanics" (
    "game_id" integer NOT NULL REFERENCES "game"("id") ON DELETE CASCADE,
    "mechanics_id" integer NOT NULL REFERENCES "mechanics"("id") ON DELETE CASCADE,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    PRIMARY KEY ("game_id", "mechanics_id")
);


COMMIT;
