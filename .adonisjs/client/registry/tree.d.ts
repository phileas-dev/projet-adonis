/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  home: typeof routes['home']
  pastes: {
    create: typeof routes['pastes.create']
    store: typeof routes['pastes.store']
    show: typeof routes['pastes.show']
    edit: typeof routes['pastes.edit']
    update: typeof routes['pastes.update']
    destroy: typeof routes['pastes.destroy']
  }
  newAccount: {
    create: typeof routes['new_account.create']
    store: typeof routes['new_account.store']
  }
  session: {
    create: typeof routes['session.create']
    store: typeof routes['session.store']
    destroy: typeof routes['session.destroy']
  }
  dashboard: typeof routes['dashboard']
}
