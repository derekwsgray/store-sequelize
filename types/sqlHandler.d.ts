import Sequelize = require('sequelize')
import {Handler} from 'jagapi'

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
  populate: (options: Sequelize.SyncOptions | PopulateCallback, cb?: PopulateCallback) => any
}

export = SqlStore
