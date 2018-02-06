import Handler = require('jagapi/types/Handler')
import Sequelize = require('sequelize')

declare class SqlStoreError extends Error {
  constructor(properties: any)
}

interface SqlConfig {

}

interface PopulateCallback {
  (err?: Error, result?: any)
}

declare class SqlStore extends Handler {
  constructor(config: SqlConfig)
  populate: (options: Sequelize.SyncOptions, cb: PopulateCallback) => any
  populate: (cb: PopulateCallback) => any
}

export = SqlStore
