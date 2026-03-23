const express = require('express')
const router = express.Router()

// 大模型管理
router.post('/large', (req, res) => {
  res.json({ message: '大模型管理接口' })
})

// 小模型管理
router.post('/small', (req, res) => {
  res.json({ message: '小模型管理接口' })
})

// 智能体管理
router.post('/agent', (req, res) => {
  res.json({ message: '智能体管理接口' })
})

module.exports = router