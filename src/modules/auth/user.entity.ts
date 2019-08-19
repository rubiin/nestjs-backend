
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Unique } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
@Unique(['username'])
export class  User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column({ length: 250 })
    password: string;

    @Column({ length: 250 })
    salt: string;

   async validatePassword(passWord: string): Promise<boolean>{
      const hash = await bcrypt.hash(passWord, this.salt);
      return this.password === hash;
    }
}
