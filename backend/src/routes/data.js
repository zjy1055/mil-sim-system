const express = require('express')
const router = express.Router()

// 数据抓取
router.post('/crawl', (req, res) => {
  res.json({ message: '数据抓取接口' })
})

// 数据清洗
router.post('/clean', (req, res) => {
  res.json({ message: '数据清洗接口' })
})

// 数据标注
router.post('/annotate', (req, res) => {
  res.json({ message: '数据标注接口' })
})

// 本体构建
router.post('/ontology', (req, res) => {
  res.json({ message: '本体构建接口' })
})

// LORA微调
router.post('/finetune', (req, res) => {
  res.json({ message: 'LORA微调接口' })
})

module.exports = router