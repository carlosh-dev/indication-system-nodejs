import { drizzle } from 'drizzle-orm/postgres-js'
import porstgres from 'postgres'
import { env } from '../env'
import { subscriptions } from './schema/subscription'

export const pg = porstgres(env.POSTGRES_URL)
export const db = drizzle(pg, {
  schema: {
    subscriptions,
  },
})
