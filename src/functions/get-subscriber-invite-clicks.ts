import { db } from '../drizzle/client'
import { subscriptions } from '../drizzle/schema/subscription'
import { redis } from '../redis/client'

type GetSubscriberInviteClicksParams = {
  subscriberId: string
}

export async function getSubscriberInviteClicks({
  subscriberId,
}: GetSubscriberInviteClicksParams) {
  const count = await redis.hget('referrer:access-count', subscriberId)

  return { count: count ? Number(count) : 0 }
}
