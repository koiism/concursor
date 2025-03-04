import { defineExtension, useCommand } from 'reactive-vscode'
import { window } from 'vscode'

const { activate, deactivate } = defineExtension(() => {
  // 显示初始问候消息
  window.showInformationMessage('Hello')

  useCommand('manage-cursor.helloWorld', () => {
    window.showInformationMessage('Hello ??')
  })
})

export { activate, deactivate }
