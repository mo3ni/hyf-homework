
-- School database
-- Create a new database containing the following tables:
-- Class: with the columns: id, name, begins (date), ends (date)
-- Student: with the columns: id, name, email, phone, class_id (foreign key)
-- If you are done with the above tasks, you can continue with these advanced tasks:
-- Create an index on the name column of the student table.
-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
---------------------------------------------------------------
create database school;
use school;
create table `class` (`id` int(10) not null auto_increment, 
`name` varchar(255) not null, 
`begins_date` datetime not null,
`end_date` datetime not null,
primary key (`id`)) engine= innodb default charset= utf8mb4 collate=utf8mb4_unicode_ci;
select * from class;
create table `student` (`id` int(10) not null auto_increment,
`name` varchar(255) not null,
`email` varchar(255), `phone` varchar(255), 
`class_id` int(10) not null,
primary key (`id`),
constraint `fk_class_id` foreign key(`class_id`) references `class` (`id`) on delete cascade) 
engine =InnoDB default charset = utf8mb4 collate = utf8mb4_unicode_ci;

create index auto_name on class(name);
--  cheats: CREATE INDEX [index name] ON [table name]([column name]);

select * from class;
alter table class add column status varchar(255) after name;
alter table class drop status;
alter table class add column status enum ('not_started','on_going','fineshed');
select * from class;

create table `mine` (`id` int(10) not null auto_increment, `name` varchar (255) not null, `email` varchar (255), primary key(`id`))
engine= innoDB default charset = utf8mb4 collate = utf8mb4_unicode_ci;
create table `you` (`id` int(10) not null auto_increment,`name` varchar(255),`email` varchar(255), `class_id` int(10) not null,
primary key(`id`), constraint `fk_id` foreign key (`class_id`) references `mine`(`id`)) engine= innodb default char set= utf8mb4 collate= utf8mb4_unicode_ci;



