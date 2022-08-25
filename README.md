# ffxiv-entity

[![NPM version](https://img.shields.io/npm/v/ffxiv-entity?color=a1b858&label=)](https://www.npmjs.com/package/ffxiv-entity)

开箱即用的Typeorm实体类，与[ffxiv-db-sync](https://github.com/KarasuShin/ffxiv-db-sync)搭配使用，帮助你更方便的构建ffxiv相关的web应用

数据结构参考自[ffxiv-datamining-cn](https://github.com/thewakingsands/ffxiv-datamining-cn)

## 使用

### 安装
```bash
pnpm add ffxiv-entity
```

### 配置
```typescript
import { DataSource } from 'typeorm'
import entities from 'ffxiv-entity'

const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: '',
  password: '',
  database: 'ffxiv',
  synchronize: true,
  logging: false,
  entities,
})
```

### 在你的应用中使用实体类

``` typescript
import { Injectable } from '@nestjs/common'
import { ClassJobCategoryEntity } from 'ffxiv-entity'
import { InjectRepository } from '@nestjs/typeorm'
import type { Repository } from 'typeorm'

@Injectable()
export class ClassJobCategoryService {
  constructor(
    @InjectRepository(ClassJobCategoryEntity)
    private classJobCategoryRepository: Repository<ClassJobCategoryEntity>,
  )

  async findAll(): Promise<ClassJobCategoryEntity[]> {
    return await this.classJobCategoryRepository.find()
  }
}


```

## License

[MIT](./LICENSE) License © 2022 [Karasu Shin](https://github.com/KarasuShin)
