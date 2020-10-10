declare module '@store' {
  export type Store = import('typesafe-actions').StateType<
    typeof import('./index').default
  >

  export type RootState = import('typesafe-actions').StateType<
    ReturnType<typeof import('./rootReducer').default>
  >

  export type RootAction = import('typesafe-actions').ActionType<
    typeof import('./rootAction').default
  >
}
