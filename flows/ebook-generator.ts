import { Flow } from '../lib/types';

const flow: Flow = {
  id: 'ebook-generator',
  name: 'Ebook Generator',
  description: 'Generate an outline and chapters for a short ebook',
  defaults: {
    topic: 'Side hustles in India for college students',
    chapters: 5,
    webhookUrl: process.env.EBOOK_WEBHOOK_URL || 'https://webhook.site/#!/',
  },
  steps: [
    {
      type: 'ai_generate',
      prompt: 'Create a detailed outline with {{chapters}} chapters for an ebook on: {{topic}}. Include compelling titles and 3 bullet points per chapter.',
      assign: 'outline',
    },
    {
      type: 'ai_generate',
      prompt: 'Using the outline: {{outline}}\nWrite the full ebook (concise), with an intro and call-to-action to subscribe. Keep total under 1500 words.',
      assign: 'ebook',
    },
    { type: 'webhook_post', url: '{{webhookUrl}}', headers: { 'Content-Type': 'application/json' }, bodyTemplate: '{"content":"{{ebook}}"}' },
  ],
};

export default flow;
