import {Injectable, OnModuleInit} from "@nestjs/common";
import {PrismaClient} from '@prisma/client'


@Injectable()
export default class PrismaService extends PrismaClient implements OnModuleInit{

     

}