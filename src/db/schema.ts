import { pgTable, serial, varchar, integer } from "drizzle-orm/pg-core";

export const accounts = pgTable("accounts", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  balance: integer("balance").notNull(),
});
