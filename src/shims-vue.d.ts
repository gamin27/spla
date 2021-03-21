/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module '*.gql' {
  import { DocumentNode } from 'graphql'
  const content: DocumentNode
  export default content
}
