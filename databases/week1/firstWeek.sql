-- find out how many tasks are in the task table 
USE hyf19;
SELECT COUNT(id) FROM task;
-- Find out how many tasks in the task table do not have a valid due date
SELECT count(id) from task where due_date is null;
-- Find all the task that are marked as done
select task.title, status.name from task inner join status on task.status_id = status.id where status.name ='Done';
-- Find all the tasks that are not marked as done 
select task.title, status.name from task inner join status on task.status_id = status.id where status.name='Not started' or status.name ='In progress';
-- Get all the tasks, sorted with the most recently created
select * from task order by created desc;
-- get the sinle most recently created task
select * from task order by created desc limit 1;
-- Get the title and due date of all tasks  where the title and description contains database
select task.title, task.due_date from task where title  like '%database%' or description like '%database%';
-- Get the title and status as text  of all task;
select task.title, status.name as new_title from task inner join status on task.status_id = status.id;
-- Get the name of each status, along with a count of how many task have that status;
select status.name as names, count(task.status_id) from task inner join status on task.status_id = status.id group by names;
-- Get the names of all statuses, sorted by the status with most tasks first
select status.name, count(task.status_id) from task inner join status on task.status_id = status.id group by status.name;


