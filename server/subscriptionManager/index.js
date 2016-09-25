import { PubSub, SubscriptionManager } from 'graphql-subscriptions';
import schema from '../schema';
const pubsub = new PubSub();

const subscriptionManager = new SubscriptionManager({
  schema,
  pubsub,
  setupFunctions: {
    issueAdded: () => ({
      issueAdded: issue => issue,
    }),
  },
});

export { subscriptionManager, pubsub };
