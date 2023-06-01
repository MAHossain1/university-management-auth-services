import mongoose from 'mongoose'
import app from './app'
import config from './config'
import colors from 'colors'

async function boostrap() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log(colors.green('DB connected Successfully'))

    app.listen(config.port, () => {
      console.log(
        colors.rainbow(`Application listening on port ${config.port}`)
      )
    })
  } catch (err) {
    console.error('Failed to connect Db', err)
  }
}

boostrap()
