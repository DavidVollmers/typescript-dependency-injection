import Vue                   from 'vue'
import {DependencyContainer} from '@dvolper/tsdi'

declare module 'vue/types/vue'
{
  interface Vue
  {
    readonly $di: DependencyContainer
  }
}