import { ItemEntity } from './item'
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from 'typeorm'
import { ClassJobCategoryEntity } from './class-job-category'

@Entity('class_job')
export class ClassJobEntity {
  @PrimaryColumn({ type: 'int' })
  id: number

  @Column('varchar', { length: 8 })
  nameHans: string

  @Column('varchar', { length: 32 })
  nameEn: string

  @Column('varchar', { length: 4 })
  abbreviationEn: string

  @Column('varchar', { length: 1 })
  abbreviationCn: string

  @ManyToOne(() => ClassJobCategoryEntity, classJobCategory => classJobCategory.classJob)
  classJobCategory: ClassJobCategoryEntity

  @Column('int')
  modifierHitPoints: number

  @Column('int')
  modifierManaPoints: number

  @Column('int')
  modifierStrength: number

  @Column('int')
  modifierVitality: number

  @Column('int')
  modifierDexterity: number

  @Column('int')
  modifierIntelligence: number

  @Column('int')
  modifierMind: number

  @Column('int')
  modifierPiety: number

  @Column('int')
  classJobParent: number

  @OneToOne(() => ItemEntity, { nullable: true })
  @JoinColumn()
  startingWeapon: ItemEntity
}
