CREATE DATABASE report_rendezvous_db;

\c report_rendezvous_db;

-- accounts DDL
CREATE TABLE accounts (
    id UUID PRIMARY KEY
);

-- account_profiles DDL
CREATE TABLE account_profiles (
    account_id UUID PRIMARY KEY,
    email TEXT NOT NULL,
    name TEXT NOT NULL,
    FOREIGN KEY (account_id) REFERENCES accounts(id)
);

-- articles DDL
-- resource
CREATE TABLE articles (
    id TEXT PRIMARY KEY
);

-- article_overviews
-- resource
CREATE TABLE article_overviews (
    article_id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    FOREIGN KEY (article_id) REFERENCES articles(id)
);

-- writings article
-- events
CREATE TABLE writings (
    article_id TEXT PRIMARY KEY,
    author_id UUID NOT NULL,
    created_at TIMESTAMP NOT NULL,
    FOREIGN KEY (article_id) REFERENCES articles(id)
);