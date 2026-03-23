const express = require('express')
const router = express.Router()

// 军事智能问答
router.post('/qa', (req, res) => {
  res.json({ message: '军事智能问答接口' })
})

// 军事想定方案
router.post('/scenario', (req, res) => {
  res.json({ message: '军事想定方案接口' })
})

// 任务清单
router.post('/list', (req, res) => {
  res.json({ message: '任务清单接口' })
})

// 任务规划脚本生成
router.post('/script', (req, res) => {
  res.json({ message: '任务规划脚本生成接口' })
})

// 任务规划推演
router.post('/simulation', (req, res) => {
  res.json({ message: '任务规划推演接口' })
})

// 典型任务规划案例
router.post('/case', (req, res) => {
  res.json({ message: '典型任务规划案例接口' })
})

module.exports = router