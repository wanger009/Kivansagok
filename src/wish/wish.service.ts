import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Wish } from '@prisma/client';

@Injectable()
export class WishService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Wish[]> {
    return this.prisma.wish.findMany();
  }

  async create(data: { name?: string; content: string }): Promise<Wish> {
    return this.prisma.wish.create({ data });
  }

  async findOne(id: number): Promise<Wish> {
    return this.prisma.wish.findUnique({ where: { id } });
  }

  async update(id: number, data: { name?: string; content?: string }): Promise<Wish> {
    return this.prisma.wish.update({ where: { id }, data });
  }

  async remove(id: number): Promise<Wish> {
    return this.prisma.wish.delete({ where: { id } });
  }
}