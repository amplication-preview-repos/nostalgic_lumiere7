/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Club as PrismaClub } from "@prisma/client";

export class ClubServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ClubCountArgs, "select">): Promise<number> {
    return this.prisma.club.count(args);
  }

  async clubs<T extends Prisma.ClubFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClubFindManyArgs>
  ): Promise<PrismaClub[]> {
    return this.prisma.club.findMany<Prisma.ClubFindManyArgs>(args);
  }
  async club<T extends Prisma.ClubFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClubFindUniqueArgs>
  ): Promise<PrismaClub | null> {
    return this.prisma.club.findUnique(args);
  }
  async createClub<T extends Prisma.ClubCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClubCreateArgs>
  ): Promise<PrismaClub> {
    return this.prisma.club.create<T>(args);
  }
  async updateClub<T extends Prisma.ClubUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClubUpdateArgs>
  ): Promise<PrismaClub> {
    return this.prisma.club.update<T>(args);
  }
  async deleteClub<T extends Prisma.ClubDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClubDeleteArgs>
  ): Promise<PrismaClub> {
    return this.prisma.club.delete(args);
  }
}
