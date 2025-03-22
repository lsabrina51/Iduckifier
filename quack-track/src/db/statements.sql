DROP TABLE IF EXISTS sightings;

CREATE TABLE sightings (
    address TEXT,
    ducktype TEXT,
    time1 DATETIME
);

INSERT INTO sightings (address, ducktype, time1)
VALUES
    ('1100 North University Building, 1100 N. University Ave, Ann Arbor, MI 48109', 'Rubber', '2008-11-11'),
    ('930 N University Ave, Ann Arbor, MI 48109', 'Rubber', '2008-11-11');

 