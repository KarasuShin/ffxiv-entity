import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm'
import { ClassJobEntity } from './class-job'

@Entity('class_job_category')
export class ClassJobCategoryEntity {
  @PrimaryColumn({ type: 'int' })
  id: string

  @Column('varchar', { length: 255 })
  name: string

  @Column('bool', { default: false })
  ADV: boolean

  @Column('bool', { default: false })
  GLA: boolean

  @Column('bool', { default: false })
  PGL: boolean

  @Column('bool', { default: false })
  MRD: boolean

  @Column('bool', { default: false })
  LNC: boolean

  @Column('bool', { default: false })
  ARC: boolean

  @Column('bool', { default: false })
  CNJ: boolean

  @Column('bool', { default: false })
  THM: boolean

  @Column('bool', { default: false })
  CRP: boolean

  @Column('bool', { default: false })
  BSM: boolean

  @Column('bool', { default: false })
  ARM: boolean

  @Column('bool', { default: false })
  GSM: boolean

  @Column('bool', { default: false })
  LTW: boolean

  @Column('bool', { default: false })
  WVR: boolean

  @Column('bool', { default: false })
  ALC: boolean

  @Column('bool', { default: false })
  CUL: boolean

  @Column('bool', { default: false })
  MIN: boolean

  @Column('bool', { default: false })
  BTN: boolean

  @Column('bool', { default: false })
  FSH: boolean

  @Column('bool', { default: false })
  PLD: boolean

  @Column('bool', { default: false })
  MNK: boolean

  @Column('bool', { default: false })
  WAR: boolean

  @Column('bool', { default: false })
  DRG: boolean

  @Column('bool', { default: false })
  BRD: boolean

  @Column('bool', { default: false })
  WHM: boolean

  @Column('bool', { default: false })
  BLM: boolean

  @Column('bool', { default: false })
  ACN: boolean

  @Column('bool', { default: false })
  SMN: boolean

  @Column('bool', { default: false })
  SCH: boolean

  @Column('bool', { default: false })
  ROG: boolean

  @Column('bool', { default: false })
  NIN: boolean

  @Column('bool', { default: false })
  MCH: boolean

  @Column('bool', { default: false })
  DRK: boolean

  @Column('bool', { default: false })
  AST: boolean

  @Column('bool', { default: false })
  SAM: boolean

  @Column('bool', { default: false })
  RDM: boolean

  @Column('bool', { default: false })
  BLU: boolean

  @Column('bool', { default: false })
  GNB: boolean

  @Column('bool', { default: false })
  DNC: boolean

  @Column('bool', { default: false })
  RPR: boolean

  @Column('bool', { default: false })
  SGE: boolean

  @OneToMany(() => ClassJobEntity, classJob => classJob.classJobCategory)
  classJob: ClassJobEntity[]
}
