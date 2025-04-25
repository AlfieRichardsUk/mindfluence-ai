/*
  Warnings:

  - The primary key for the `Conversation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `messages` on the `Conversation` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Conversation` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Conversation` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `Conversation` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Added the required column `aiResponse` to the `Conversation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sessionId` to the `Conversation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userMessage` to the `Conversation` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Conversation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sessionId" TEXT NOT NULL,
    "userMessage" TEXT NOT NULL,
    "aiResponse" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Conversation" ("createdAt", "id") SELECT "createdAt", "id" FROM "Conversation";
DROP TABLE "Conversation";
ALTER TABLE "new_Conversation" RENAME TO "Conversation";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
