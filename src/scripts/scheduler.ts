import { crawlDomains, updateLocalDomains } from './crawler';
import cron from 'node-cron';

// 每天凌晨2点执行爬虫任务
cron.schedule('0 2 * * *', async () => {
  console.log('开始执行域名更新任务...');
  try {
    const data = await crawlDomains();
    updateLocalDomains(data);
    console.log('域名更新成功');
  } catch (error) {
    console.error('域名更新失败:', error);
  }
});

// 立即执行一次爬虫任务
crawlDomains().catch(console.error); 