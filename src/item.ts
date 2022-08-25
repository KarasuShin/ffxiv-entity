import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from 'typeorm'
import { ClassJobEntity } from './class-job'
import { GrandCompanyEntity } from './grand-company'
import { ItemSeriesEntity } from './item-series'
import { RepairSourceEntity } from './repair-source'

@Entity('item', {})
export class ItemEntity {
  @PrimaryColumn({ type: 'int' })
  id: number

  @Column('int', { default: 0 })
  aetherialReduce: number

  @Column('bool', { default: false })
  canBeHQ: boolean

  @Column('tinyint', { default: 0 })
  castTime: number

  @Column('int', { default: 0 })
  cooldown: number

  @Column('varchar', { length: 128, nullable: true })
  description: string

  @Column('int', { default: 0 })
  equipRestriction: number

  @Column('int', { nullable: true })
  iconId: number

  @Column('varchar', { length: 32, nullable: true })
  iconUrl: string

  @Column('bool', { default: false })
  isAdvancedMeldingPermitted: boolean

  @Column('bool', { default: false })
  isAlwaysCollectable: boolean

  @Column('bool', { default: false })
  isCollectable: boolean

  @Column('bool', { default: false })
  isDyeable: boolean

  @Column('bool', { default: false })
  isIndisposable: boolean

  @Column('bool', { default: false })
  isGlamourous: boolean

  @Column('bool', { default: false })
  isLot: boolean

  @Column('bool', { default: false })
  isPvP: boolean

  @Column('bool', { default: false })
  isUnique: boolean

  @Column('bool', { default: false })
  isUntradable: boolean

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

  @Column('int', { default: 0 })
  stackSize: number

  @ManyToOne(() => ItemSeriesEntity, itemSeries => itemSeries.items, { nullable: true })
  itemSeries: ItemSeriesEntity

  @ManyToOne(() => GrandCompanyEntity, grandCompanyEntity => grandCompanyEntity.items)
  grandCompany: GrandCompanyEntity

  @OneToOne(() => ClassJobEntity)
  @JoinColumn()
  classJobUse: ClassJobEntity

  @Column('int', { default: 0 })
  damagePhys: number

  @Column('int', { default: 0 })
  damageMag: number

  @Column('int', { default: 0 })
  defensePhys: number

  @Column('int', { default: 0 })
  defenseMag: number

  @Column('int', { default: 0 })
  delay: number
}
