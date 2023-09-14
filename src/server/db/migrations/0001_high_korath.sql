ALTER TABLE `petcard_account` RENAME TO `account`;--> statement-breakpoint
ALTER TABLE `petcard_example` RENAME TO `example`;--> statement-breakpoint
ALTER TABLE `petcard_session` RENAME TO `session`;--> statement-breakpoint
ALTER TABLE `petcard_user` RENAME TO `user`;--> statement-breakpoint
ALTER TABLE `petcard_verificationToken` RENAME TO `verificationToken`;--> statement-breakpoint
/*
 SQLite does not support "Dropping foreign key" out of the box, we do not generate automatic migration for that, so it has to be done manually
 Please refer to: https://www.techonthenet.com/sqlite/tables/alter_table.php
                  https://www.sqlite.org/lang_altertable.html

 Due to that we don't generate migration automatically and it has to be done manually
*/--> statement-breakpoint
DROP INDEX IF EXISTS `userId_idx`;--> statement-breakpoint
/*
 SQLite does not support "Creating foreign key on existing column" out of the box, we do not generate automatic migration for that, so it has to be done manually
 Please refer to: https://www.techonthenet.com/sqlite/tables/alter_table.php
                  https://www.sqlite.org/lang_altertable.html

 Due to that we don't generate migration automatically and it has to be done manually
*/