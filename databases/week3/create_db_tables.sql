use mealsharing;
show tables;

create table `meal` (`id` int(10) primary key not null,`title` varchar(255), `description` text(255),
`location` varchar(255),`when` datetime, `max_reservations` int(10),`price` decimal(10,2),
`created_date` date);

create table `reservation` (`id` int not null primary key, `number_of_guests` int(10),`meal_id` int(10),`created_date` date ,
constraint `fk_meal_id` foreign key (`meal_id`) references `meal` (`id`) on delete cascade)
engine= InnoDB default charset = utf8mb4 collate = utf8mb4_unicode_ci;

create table `review` (`id` int(10) primary key not null, `title` varchar(255),`description` text(255),
`meal_id` int(10),`stars` int(10), `created_date` date, 
constraint `frk_meal_id` foreign key (`meal_id`) references `meal` (`id`) on delete cascade)
engine = innodb  default charset = utf8mb4 collate= utf8mb4_unicode_ci;

show tables;

