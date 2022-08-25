import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm'
import { RepairSourceEntity } from './repair-source'

@Entity('item', {})
export class ItemEntity {
  @PrimaryColumn({ type: 'int' })
  id: number

  @Column('int', { comment: '以太消耗' })
  aetherialReduce: number

  @Column('bool', { default: false })
  canBeHQ: boolean

  @Column('tinyint', { default: 0 })
  castTime: number

  @Column('int', { default: 0 })
  cooldown: number

  @Column('varchar', { length: 128, nullable: true })
  description: string

  @Column('tinyint')
  equipRestriction: number

  @Column('int', { nullable: true })
  iconId: number

  @Column('varchar', { length: 32, nullable: true })
  iconUrl: string

  @Column('bool', { default: false })
  isAlwaysCollectable: boolean

  @Column('bool', { default: false })
  isCollectable: boolean

  @Column('bool', { default: false })
  isDyeable: boolean

  @Column('bool', { default: false })
  isUnique: boolean

  @Column('bool', { default: false })
  isUntradable: boolean

  @Column('bool', { default: false })
  isIndisposable: boolean

  @Column('bool', { default: false })
  isLot: boolean

  @Column('int', { default: 0 })
  levelItem: number

  @Column('int', { default: 0 })
  levelEquip: number

  @Column('varchar', { length: 64, nullable: false })
  name: string

  @Column('int', { default: 0 })
  priceLow: number

  @Column('int', { default: 0 })
  priceMid: number

  @Column('tinyint', { default: 0 })
  rarity: number

  @OneToOne(() => RepairSourceEntity, { nullable: true })
  repairSource: RepairSourceEntity
}
