-- Assignment week 2 (Database Mysql)
-- Add a task with the these attributes: title, description, created, updated, dueDate, statusID, userID
use hyf19;
show tables;
select * from task;
select * from status;
insert into task (title,description,created,updated,due_date,status_id,user_id) values ('homework','assingment', '2019-08-20 11:24:08','2019-08-20 11:24:08','2019-08-24 11:24:08',2,8);
-- Change the title of a task with these attributes: taskID, newTitle
update task set title='worker' where id= 4;
-- Change the task due date with these attributes: taskID, newDueDate
update task set due_date='2019-04-25 12:20:30' where id = 3;
-- Change the task status with these attributes: taskID, newStatus
update task set status_id = 3 where id= 5;
-- Mark a task as complete with this attribute: taskID
update task set status_id = 3 where id=7;
-- Delete task with this attribute: taskID
delete from task where id = 9;