const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

// 加载环境变量
dotenv.config()

// 创建Express应用
const app = express()
const PORT = process.env.PORT || 8000

// 中间件
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// 路由
app.use('/api', require('./routes/index'))

// 健康检查
app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

// 404处理
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' })
})

// 错误处理
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Internal Server Error' })
})

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = app