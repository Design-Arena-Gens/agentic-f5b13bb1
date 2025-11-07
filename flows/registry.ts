import affiliateDaily from './affiliate-daily';
import dropshippingMonitor from './dropshipping-monitor';
import ebookGenerator from './ebook-generator';
import { Flow } from '../lib/types';

const flows: Flow[] = [affiliateDaily, dropshippingMonitor, ebookGenerator];

export default flows;
