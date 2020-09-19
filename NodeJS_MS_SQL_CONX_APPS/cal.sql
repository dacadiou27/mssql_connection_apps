CREATE DATABASE calendar;

USE calendar;

DROP TABLE events;

CREATE TABLE events (
    id int IDENTITY(1,1) PRIMARY KEY CLUSTERED NOT NULL
    , userId nvarchar(50) NOT NULL
    , title nvarchar(200) NOT NULL
    , [description] nvarchar(1000) NULL
    , startDate date NOT NULL
    , startTime time(0) NULL
    , endDAte date NULL
    , endTime time(0) NULL
    , INDEX idx_events_userId ( userId )
)

INSERT INTO events (userId, title, [description], startDate, startTime, endDate ,endTime)
VALUES ('user1234', N'appointement', N'description stuff','2020-03-31','14:30',NULL,NULL),
('user1234', N'online conf', N'description stuff','2020-04-01',NULL,'2020-04-02',NULL)

SELECT * FROM events