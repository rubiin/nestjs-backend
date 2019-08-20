
import * as bcrypt from 'bcrypt';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['username'])
export class  User extends BaseEntity{
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public username: string;

    @Column({ length: 250 })
    public password: string;

    @Column({ length: 250 })
    public salt: string;

   public async validatePassword(passWord: string): Promise<boolean>{
      const hash = await bcrypt.hash(passWord, this.salt);
      return this.password === hash;
    }
}
