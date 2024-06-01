-- AddForeignKey
ALTER TABLE "prisma_todo" ADD CONSTRAINT "prisma_todo_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "prisma_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
