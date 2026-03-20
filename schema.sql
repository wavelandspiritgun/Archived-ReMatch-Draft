-- schema.sql
-- Run this in your Cloudflare D1 Console

DROP TABLE IF EXISTS intake_submissions;

CREATE TABLE IF NOT EXISTS intake_submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    alias TEXT NOT NULL,
    email TEXT,
    location TEXT,
    delivery_preference TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    -- Store the entire raw form data as JSON for the deep research pipeline
    raw_data JSON NOT NULL
);

-- Optional: Indexing for faster lookups during the "Ghost" search phase
CREATE INDEX idx_alias ON intake_submissions(alias);
CREATE INDEX idx_created ON intake_submissions(created_at);
