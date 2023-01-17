const twitter = {
  subscribers: new Map(),
  subscribe(topic, subscriber) {
    if (this.subscribers.has(topic)) {
      const topicSubscribers = this.subscribers.get(topic);
      topicSubscribers.push(subscriber);
    } else {
      this.subscribers.set(topic, [subscriber]);
    }
  },
  unSubscribe(topic, subscriber) {
    if (this.subscribers.has(topic)) {
      const topicSubscribers = this.subscribers.get(topic);
      const subIdx = topicSubscribers.findIndex(
        (subsc) => subsc.id === subscriber.id
      );
      topicSubscribers.splice(subIdx, 1);
    }
  },
  publish(topic, message) {
    if (this.subscribers.has(topic)) {
      const topicSubscribers = this.subscribers.get(topic);
      topicSubscribers.forEach((sub) => sub.onNotification(message));
    }
  },
};

class Subscriber {
  constructor(id) {
    this.id = id;
  }

  onNotification(message) {
    console.log(`${this.id} with ${message}`);
  }
}

const sub1 = new Subscriber(10);
const sub2 = new Subscriber(20);
const sub3 = new Subscriber(30);

twitter.subscribe('sports', sub1);
twitter.subscribe('sports', sub2);
twitter.subscribe('movies', sub1);
twitter.subscribe('movies', sub3);
twitter.subscribe('news', sub1);
twitter.subscribe('news', sub2);
twitter.subscribe('news', sub3);

twitter.publish('news', 'Recession on the way');
twitter.publish('sports', 'Argentina won the world cup');
