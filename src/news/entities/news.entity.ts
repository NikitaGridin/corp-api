import { User } from 'src/user/entities/user.entity'
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm'

@Entity()
export class News {
@PrimaryGeneratedColumn()
id: string

@Column({ length: 100 })
title: string

@Column({ length: 1000 })
description: string

@Column({ type: 'date' })
date_create: Date

@ManyToMany(() => User, (user) => user.views)
views: User[]

@ManyToMany(() => User, (user) => user.likes)
likes: User[]
}