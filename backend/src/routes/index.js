const express = require('express')
const router = express.Router()

// 数据管理路由
router.use('/data', require('./data'))

// 知识库管理路由
router.use('/knowledge', require('./knowledge'))

// 任务规划路由
router.use('/task', require('./task'))

// 模型管理路由
router.use('/model', require('./model'))

// 系统管理路由
router.use('/system', require('./system'))

module.exports = router