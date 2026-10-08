const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// 静态文件目录：public 下的 html/css/js 直接可访问
app.use(express.static(path.join(__dirname, 'public')));

// API：返回当前服务器时间
app.get('/api/time', (req, res) => {
  const now = new Date();
  res.json({
    serverTime: now.toLocaleString('zh-CN', {
      timeZone: 'Asia/Shanghai',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }),
    timestamp: now.getTime()
  });
});

app.listen(PORT, () => {
  console.log(`✅ 服务器已启动: http://localhost:${PORT}`);
});
