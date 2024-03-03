
DROP TABLE IF EXISTS report_rendezvous.account;
CREATE TABLE account(
  id VARCHAR(36) NOT NULL PRIMARY KEY,
  name VARCHAR(32) NOT NULL,
  email TEXT NOT NULL
);

DROP TABLE IF EXISTS report_rendezvous.user;
CREATE TABLE `user`(
  id VARCHAR(36) NOT NULL PRIMARY KEY
);

DROP TABLE IF EXISTS report_rendezvous.user_profile;
CREATE TABLE user_profile(
  id VARCHAR(36) NOT NULL PRIMARY KEY,
  name VARCHAR(32) NOT NULL,
  email TEXT NOT NULL
);

DROP TABLE IF EXISTS report_rendezvous.active_user;
CREATE TABLE active_user(
  id VARCHAR(36) NOT NULL PRIMARY KEY
);

DROP TABLE IF EXISTS report_rendezvous.deactive_user;
CREATE TABLE deactive_user(
  id VARCHAR(36) NOT NULL PRIMARY KEY
);