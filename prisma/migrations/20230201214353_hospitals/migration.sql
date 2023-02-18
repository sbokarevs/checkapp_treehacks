-- CreateTable
CREATE TABLE "Hospital" (
    "providerNumber" TEXT NOT NULL,
    "hospitalName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "countyName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "hospitalType" TEXT NOT NULL,
    "hospitalOwner" TEXT NOT NULL,
    "emergencyService" TEXT NOT NULL,

    CONSTRAINT "Hospital_pkey" PRIMARY KEY ("providerNumber")
);
