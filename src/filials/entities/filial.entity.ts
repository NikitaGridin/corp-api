import { Departament } from 'src/departament/entities/departament.entity'
import { Entity, Column,  JoinTable, OneToMany, ManyToMany } from 'typeorm'

@Entity()
export class Filial {
  @Column({ primary: true, length: 15, unique: true })
  id: string

  @Column({ length: 50 })
  name: string

  @OneToMany(() => Departament, (departament) => departament.filial)
  departament: Departament[]
}