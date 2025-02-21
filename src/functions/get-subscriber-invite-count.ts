import { db } from '../drizzle/client'
import { subscriptions } from '../drizzle/schema/subscription'
import { redis } from '../redis/client'

type GetSubscriberInviteCountParams = {
  subscriberId: string
}

export async function getSubscriberInviteCount({
  subscriberId,
}: GetSubscriberInviteCountParams) {
  const count = await redis.zscore('referrer:access-count', subscriberId)

  return { count: count ? Number(count) : 0 }
}
