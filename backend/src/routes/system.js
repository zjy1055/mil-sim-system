const express = require('express')
const router = express.Router()

// 提示词模版
router.post('/prompt', (req, res) => {
  res.json({ message: '提示词模版接口' })
})

// 路径设置
router.post('/path', (req, res) => {
  res.json({ message: '路径设置接口' })
})

// 系统备份
router.post('/backup', (req, res) => {
  res.json({ message: '系统备份接口' })
})

module.exports = router