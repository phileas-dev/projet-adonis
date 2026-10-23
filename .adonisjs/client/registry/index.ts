/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'home': {
    methods: ["GET","HEAD"],
    pattern: '/',
    tokens: [[0,"/"]],
    types: placeholder as Registry['home']['types'],
  },
  'pastes.create': {
    methods: ["GET","HEAD"],
    pattern: '/pastes/create',
    tokens: [[0,"pastes"],[0,"create"]],
    types: placeholder as Registry['pastes.create']['types'],
  },
  'pastes.store': {
    methods: ["POST"],
    pattern: '/pastes',
    tokens: [[0,"pastes"]],
    types: placeholder as Registry['pastes.store']['types'],
  },
  'pastes.show': {
    methods: ["GET","HEAD"],
    pattern: '/pastes/:code',
    tokens: [[0,"pastes"],[1,"code"]],
    types: placeholder as Registry['pastes.show']['types'],
  },
  'new_account.create': {
    methods: ["GET","HEAD"],
    pattern: '/signup',
    tokens: [[0,"signup"]],
    types: placeholder as Registry['new_account.create']['types'],
  },
  'new_account.store': {
    methods: ["POST"],
    pattern: '/signup',
    tokens: [[0,"signup"]],
    types: placeholder as Registry['new_account.store']['types'],
  },
  'session.create': {
    methods: ["GET","HEAD"],
    pattern: '/login',
    tokens: [[0,"login"]],
    types: placeholder as Registry['session.create']['types'],
  },
  'session.store': {
    methods: ["POST"],
    pattern: '/login',
    tokens: [[0,"login"]],
    types: placeholder as Registry['session.store']['types'],
  },
  'pastes.edit': {
    methods: ["GET","HEAD"],
    pattern: '/pastes/:code/edit',
    tokens: [[0,"pastes"],[1,"code"],[0,"edit"]],
    types: placeholder as Registry['pastes.edit']['types'],
  },
  'pastes.update': {
    methods: ["PUT"],
    pattern: '/pastes/:code',
    tokens: [[0,"pastes"],[1,"code"]],
    types: placeholder as Registry['pastes.update']['types'],
  },
  'pastes.destroy': {
    methods: ["DELETE"],
    pattern: '/pastes/:code',
    tokens: [[0,"pastes"],[1,"code"]],
    types: placeholder as Registry['pastes.destroy']['types'],
  },
  'dashboard': {
    methods: ["GET","HEAD"],
    pattern: '/dashboard',
    tokens: [[0,"dashboard"]],
    types: placeholder as Registry['dashboard']['types'],
  },
  'session.destroy': {
    methods: ["POST"],
    pattern: '/logout',
    tokens: [[0,"logout"]],
    types: placeholder as Registry['session.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
