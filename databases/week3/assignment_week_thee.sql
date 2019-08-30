select * from meal;
insert into meal values('1','polse','for breakfast','frederiksberg','2019-08-12',2,25.00,'2019-08-10');
insert into meal values('2','egg','for breakfast','vanlose','2019-08-13',2,25.00,'2019-08-11');
insert into meal values('3','buger','for lunch','rodovre','2019-08-14',2,22.00,'2019-08-12');
insert into meal values('4','tea','for afternoon','norrebro','2019-08-15',2,15.00,'2019-08-14');
insert into meal values('5','tea','for afternoon','norrebro','2019-08-15',2,15.00,'2019-08-14');
select * from meal where id=3;
 update meal set title ='for dinner' where id =4;
 delete from meal where id=5;
 
 select * from reservation;
 insert into reservation values (1,5,2,'2019-08-23');
 insert into reservation values (2,4,3,'2019-07-12');
 insert into reservation values (3,1,2,'2019-07-1');
 insert into reservation values (4,6,1,'2019-07-6');
 insert into reservation values (5,7,4,'2019-07-22');
 insert into reservation values (6,9,4,'2019-07-24');
select * from reservation where id=6;
update reservation set number_of_guests = 20 , created_date ='2018-05-01' where id = 4;
delete from reservation where id =6;

select * from review;
describe review;
insert into review values(1,'paid','paid by ahmad',2,5,'2019-10-08');
insert into review values(2,'remain','should pay ali',3,2,'2019-1-08');
insert into review values(3,'halfpaid',' by classmates',4,4,'2019-07-08');
insert into review values(4,'discount','for mentors',2,5,'2019-04-08');
insert into review values(5,'gratis','for all over 50 yrs old',1,7,'2019-10-08');
select * from review where title = 'paid by ahmad';
update review set stars = 10 where id=3;
delete from review where id =5;

-- additional queries 
select * from meal;
select * from meal where price <22;
select * from reservation;
select * from meal join reservation on meal.id = reservation.meal_id;
select * from meal where title like '%rod grod med%';
select * from meal where created_date >= '2019-08-12' and created_date <= '2019-08-13';
select * from meal limit 5;
select * from review;
select * from meal join review on meal.id = review.meal_id where stars>5;
select * from meal join reservation on meal.id= reservation.meal_id order by reservation.created_date asc;
select meal.* ,avg(review.stars) as avg_srats from meal left join review on meal.id = review.meal_id order by stars asc; 