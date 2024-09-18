import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity({name: "users"})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phoneNumber: string;

  @Column()
  dateOfBirth: string;

  @Column()
  gender: string;

  @Column({ type: 'enum', enum: ['CMS', 'CLIENT'] })
  type: 'CMS' | 'CLIENT';

  @Column({ type: 'enum', enum: [0, 1], default: 1 })
  status: 0 | 1;
}


