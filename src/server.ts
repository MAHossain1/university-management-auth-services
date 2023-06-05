import mongoose from 'mongoose'
import app from './app'
import config from './config'
// import colors from 'colors'
import { logger, errorLogger } from './shared/logger'

async function boostrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('DB connected Successfully')

    app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`)
    })
  } catch (err) {
    errorLogger.error('Failed to connect Db', err)
  }
}

boostrap()
