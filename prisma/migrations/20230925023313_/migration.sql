-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "packs" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "packs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "White" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "White_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Black" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "pick" INTEGER NOT NULL,

    CONSTRAINT "Black_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PackToWhite" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_PackToBlack" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_PackToWhite_AB_unique" ON "_PackToWhite"("A", "B");

-- CreateIndex
CREATE INDEX "_PackToWhite_B_index" ON "_PackToWhite"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PackToBlack_AB_unique" ON "_PackToBlack"("A", "B");

-- CreateIndex
CREATE INDEX "_PackToBlack_B_index" ON "_PackToBlack"("B");

-- AddForeignKey
ALTER TABLE "packs" ADD CONSTRAINT "packs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PackToWhite" ADD CONSTRAINT "_PackToWhite_A_fkey" FOREIGN KEY ("A") REFERENCES "packs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PackToWhite" ADD CONSTRAINT "_PackToWhite_B_fkey" FOREIGN KEY ("B") REFERENCES "White"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PackToBlack" ADD CONSTRAINT "_PackToBlack_A_fkey" FOREIGN KEY ("A") REFERENCES "Black"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PackToBlack" ADD CONSTRAINT "_PackToBlack_B_fkey" FOREIGN KEY ("B") REFERENCES "packs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
