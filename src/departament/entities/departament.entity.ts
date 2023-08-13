import { Filial } from 'src/filials/entities/filial.entity'
import { Instruction } from 'src/instructions/entities/instruction.entity'
import { User } from 'src/user/entities/user.entity'
import { Entity, Column, OneToMany,  ManyToOne } from 'typeorm'

@Entity()
export class Departament {
  @Column({ primary: true, length: 15, unique: true })
  id: string

  @Column({ length: 50 })
  name: string

  @ManyToOne(() => Filial, (filial) => filial.departament)
  filial: Filial

  @OneToMany(() => User, (user) => user.departament)
  user: User[]

  @OneToMany(() => Instruction, (instruction) => instruction.departament)
  instructions: Instruction[]
} 