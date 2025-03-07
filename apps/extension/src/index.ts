import { getPayload } from '@concursor/api'
import { defineExtension, useCommand } from 'reactive-vscode'
import { window } from 'vscode'
import * as Meta from './generated/meta'
import { startServer } from './server'
import { getBaseUrl, getEnv, logger } from './utils'

const { activate, deactivate } = defineExtension(async () => {
  const payload = getPayload(getBaseUrl())
  useCommand(Meta.commands.login, async () => {
    window.showInformationMessage(getBaseUrl())
    window.showInformationMessage(getEnv())
    const users = await payload.find({
      collection: 'users',
    })
    logger.info(users)
  })
})
startServer()

export { activate, deactivate }
