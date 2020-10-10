import * as typesafeActions from 'typesafe-actions'

declare module 'typesafe-actions' {
  interface Types {
    RootAction: import('typesafe-actions').ActionType<
      typeof import('./rootAction').default
    >
  }
}
