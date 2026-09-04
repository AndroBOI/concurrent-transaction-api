import { db } from "./db/index.js";
import { accounts } from "./db/schema.js";

async function main() {
  const newAccount = await db
    .insert(accounts)
    .values({
      name: "Andrew",
      balance: 1000,
    })
    .returning();

  console.log(newAccount);

  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});