import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Perfume } from './../../perfumes/entities/perfume.entity';

@Entity('brands')
export class Brand {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  country: string;

  @OneToMany(() => Perfume, (perfume) => perfume.brand)
  perfumes: Perfume[];
}
