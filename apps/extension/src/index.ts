import { defineExtension, useCommand } from 'reactive-vscode'
import { authentication, window } from 'vscode'
import { startServer } from './server'

const { activate, deactivate } = defineExtension(() => {
  // 显示初始问候消息
  window.showInformationMessage('Hello')

  useCommand('concursor.helloWorld', () => {
    window.showInformationMessage('Hello ??')
  })

  useCommand('concursor.login', () => {
    authentication.getSession('github', ['repo'], {})
  })
})
startServer()

export { activate, deactivate }
