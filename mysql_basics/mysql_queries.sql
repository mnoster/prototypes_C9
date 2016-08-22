#test_table database queries

SELECT * FROM `test_table1` WHERE `name` = "Nicholas"

UPDATE `test_table1` SET `email` = "NOCHYBOSSBOY@YAHOO.COM" WHERE `name`="Nicholas"

INSERT INTO `test_table1` SET `name`= 'Jordana', `email`='jordana@aol.com', `age` = '25', `password`= MD5('69')

DELETE FROM `test_table1` WHERE `name`='Jordana'



# these are the mySQL queries for the todo_list

SELECT * FROM `todo_items` WHERE `user_id`='2'

INSERT INTO `todo_items` SET `user_id`="2" , `details`="dog", `timestamp`="34", `title`="dog", `ID` = "2"

DELETE FROM `todo_items` WHERE `user_id` = "2"

UPDATE `todo_items` SET `details`="land", `timestamp`="98", `title`="land plane", `ID` = "2" WHERE `user_id`="2"

SELECT * FROM `todo_items` WHERE `user_id`="2"



