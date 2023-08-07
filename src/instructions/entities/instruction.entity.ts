import { Departament } from 'src/departament/entities/departament.entity'
import { Entity, Column, OneToMany, ManyToOne } from 'typeorm'

@Entity()
export class Instruction {
  @Column({ primary: true, length: 15, unique: true })
  id: string

  @Column({ length: 50 })
  name: string

  @Column({ length: 255 })
  file_path: string

  @ManyToOne(() => Departament, (departament) => departament.instructions)
  departament: Departament
}