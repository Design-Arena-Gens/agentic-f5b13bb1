import { Flow } from '../lib/types';

const flow: Flow = {
  id: 'affiliate-daily',
  name: 'Affiliate Content Daily',
  description: 'Generates daily affiliate posts from an RSS feed and sends to a webhook',
  defaults: {
    rssUrl: 'https://news.ycombinator.com/rss',
    webhookUrl: process.env.AFFILIATE_WEBHOOK_URL || 'https://webhook.site/#!/',
    topic: 'budget tech gadgets under ?2000 in India',
  },
  steps: [
    { type: 'rss_fetch', url: '{{rssUrl}}', limit: 3, assign: 'items' },
    {
      type: 'foreach',
      listFrom: 'items',
      itemVar: 'item',
      steps: [
        {
          type: 'ai_generate',
          prompt: 'Write a 2-sentence catchy affiliate post for {{item.title}} focusing on {{topic}}. Add 3 hashtags.',
          assign: 'gen.caption',
        },
        {
          type: 'template',
          template: '{"text":"{{gen.caption}}","link":"{{item.link}}"}',
          assign: 'payload',
        },
        {
          type: 'webhook_post',
          url: '{{webhookUrl}}',
          headers: { 'Content-Type': 'application/json' },
          bodyTemplate: '{"content":"{{gen.caption}}\n{{item.link}}"}',
        },
      ],
    },
  ],
};

export default flow;
