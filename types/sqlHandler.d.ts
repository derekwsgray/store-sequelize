import Sequelize = require('sequelize')
import {Handler} from '@jagql/framework'

declare class SqlStoreError extends Error {
  constructor(properties: any)
}

interface ConfigOptions {
  sequelize: Sequelize.Sequelize
}

interface PopulateCallback {
  (err?: Error, result?: any)
}

declare class SqlStore extends Handler {
  constructor(config: Sequelize.Options | ConfigOptions)
  populate: (options: Sequelize.SyncOptions | PopulateCallback, cb?: PopulateCallback) => any
}

export = SqlStore
