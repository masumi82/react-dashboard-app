import 'i18next'

import { defaultNS, resources } from './index'

// Augment i18next so t() keys are type-checked and auto-completed
// against the English resource files.
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS
    resources: (typeof resources)['en']
  }
}
