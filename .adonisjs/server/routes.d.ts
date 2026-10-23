import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'home': { paramsTuple?: []; params?: {} }
    'pastes.create': { paramsTuple?: []; params?: {} }
    'pastes.store': { paramsTuple?: []; params?: {} }
    'pastes.show': { paramsTuple: [ParamValue]; params: {'code': ParamValue} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'pastes.edit': { paramsTuple: [ParamValue]; params: {'code': ParamValue} }
    'pastes.update': { paramsTuple: [ParamValue]; params: {'code': ParamValue} }
    'pastes.destroy': { paramsTuple: [ParamValue]; params: {'code': ParamValue} }
    'dashboard': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'home': { paramsTuple?: []; params?: {} }
    'pastes.create': { paramsTuple?: []; params?: {} }
    'pastes.show': { paramsTuple: [ParamValue]; params: {'code': ParamValue} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'pastes.edit': { paramsTuple: [ParamValue]; params: {'code': ParamValue} }
    'dashboard': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'home': { paramsTuple?: []; params?: {} }
    'pastes.create': { paramsTuple?: []; params?: {} }
    'pastes.show': { paramsTuple: [ParamValue]; params: {'code': ParamValue} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'pastes.edit': { paramsTuple: [ParamValue]; params: {'code': ParamValue} }
    'dashboard': { paramsTuple?: []; params?: {} }
  }
  POST: {
    'pastes.store': { paramsTuple?: []; params?: {} }
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'pastes.update': { paramsTuple: [ParamValue]; params: {'code': ParamValue} }
  }
  DELETE: {
    'pastes.destroy': { paramsTuple: [ParamValue]; params: {'code': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}