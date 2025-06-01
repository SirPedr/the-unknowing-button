import { setupServer } from 'msw/node'
import { handlers } from './handlers/clickConsequence.handlers'

export const server = setupServer(...handlers)