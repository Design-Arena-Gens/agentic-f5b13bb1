import { Flow } from '../lib/types';

const flow: Flow = {
  id: 'dropshipping-monitor',
  name: 'Dropshipping Price Monitor',
  description: 'Analyze public product feed and notify on margin opportunities',
  defaults: {
    sourceApi: 'https://dummyjson.com/products?limit=10',
    targetMarginPct: 25,
    webhookUrl: process.env.DROPSHIP_WEBHOOK_URL || 'https://webhook.site/#!/',
  },
  steps: [
    { type: 'http', method: 'GET', url: '{{sourceApi}}', assign: 'source' },
    {
      type: 'ai_generate',
      prompt: 'You are a dropshipping strategist in India. Given this products JSON: {{source}}\nPick top 5 items likely to have at least {{targetMarginPct}}% profit margin when sold on Amazon/Flipkart/Meesho. For each, output: Title, Suggested Sell Price (INR), Est. Cost (INR), Rationale. Use concise bullets.',
      assign: 'summary',
    },
    { type: 'webhook_post', url: '{{webhookUrl}}', headers: { 'Content-Type': 'application/json' }, bodyTemplate: '{"content":"{{summary}}"}' },
  ],
};

export default flow;
