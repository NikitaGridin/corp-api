import { User } from 'src/user/entities/user.entity'
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne } from 'typeorm'

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 50 })
  name: string

  @OneToOne(() => User, (user) => user.role)
  users: User[]
}  