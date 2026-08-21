CREATE TABLE categories (
    id BIGSERIAL PRIMARY KEY,
    code VARCHAR(64) NOT NULL UNIQUE,
    name VARCHAR(128) NOT NULL,
    description TEXT
);

CREATE TABLE scenarios (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(180) NOT NULL,
    situation TEXT NOT NULL,
    category_id BIGINT NOT NULL REFERENCES categories(id),
    position INTEGER NOT NULL,
    active BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE answer_options (
    id BIGSERIAL PRIMARY KEY,
    scenario_id BIGINT NOT NULL REFERENCES scenarios(id) ON DELETE CASCADE,
    answer_text TEXT NOT NULL,
    score INTEGER NOT NULL CHECK (score >= 0),
    max_score INTEGER NOT NULL CHECK (max_score > 0),
    consequence TEXT NOT NULL,
    explanation TEXT NOT NULL,
    recommendation TEXT NOT NULL,
    position INTEGER NOT NULL
);

CREATE TABLE attempts (
    id UUID PRIMARY KEY,
    started_at TIMESTAMPTZ NOT NULL,
    completed_at TIMESTAMPTZ,
    security_index INTEGER CHECK (security_index BETWEEN 0 AND 100),
    profile VARCHAR(64)
);

CREATE TABLE attempt_answers (
    id BIGSERIAL PRIMARY KEY,
    attempt_id UUID NOT NULL REFERENCES attempts(id) ON DELETE CASCADE,
    scenario_id BIGINT NOT NULL REFERENCES scenarios(id),
    answer_option_id BIGINT NOT NULL REFERENCES answer_options(id),
    score INTEGER NOT NULL,
    answered_at TIMESTAMPTZ NOT NULL,
    UNIQUE (attempt_id, scenario_id)
);

CREATE INDEX idx_attempts_completed_at ON attempts(completed_at);
CREATE INDEX idx_attempt_answers_option ON attempt_answers(answer_option_id);

