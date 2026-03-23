# 大小模型协同的任务规划仿真系统

## 项目结构

```
├── frontend/           # 前端项目
│   ├── src/            # 前端源代码
│   │   ├── components/ # 组件
│   │   ├── pages/      # 页面
│   │   ├── services/   # API服务
│   │   ├── store/      # 状态管理
│   │   └── utils/      # 工具函数
│   ├── public/         # 静态资源
│   └── package.json    # 前端依赖
├── backend/            # 后端项目
│   ├── src/            # 后端源代码
│   │   ├── controllers/    # 控制器
│   │   ├── routes/         # 路由
│   │   ├── services/       # 服务层
│   │   ├── models/         # 数据模型
│   │   ├── middlewares/    # 中间件
│   │   ├── utils/          # 工具函数
│   │   └── config/         # 配置
│   ├── data/           # 数据存储
│   │   ├── vector_db/      # 向量数据库
│   │   ├── knowledge_graph/ # 知识图谱
│   │   └── datasets/       # 数据集
│   ├── scripts/        # 脚本工具
│   │   ├── data_crawler/   # 数据抓取
│   │   ├── data_cleaner/   # 数据清洗
│   │   ├── data_annotation/ # 数据标注
│   │   └── lora_finetune/  # LORA微调
│   └── package.json    # 后端依赖
├── docker/             # Docker配置
│   ├── Dockerfile.frontend
│   ├── Dockerfile.backend
│   └── docker-compose.yml
└── README.md           # 项目说明
```

## 功能模块

### 1. 数据获取与数据治理
- **多智能体数据抓取**：在 `backend/scripts/data_crawler/` 目录实现
- **数据清洗与融合**：在 `backend/scripts/data_cleaner/` 目录实现
- **数据标注与数据集制作**：在 `backend/scripts/data_annotation/` 目录实现
- **本体构建**：在 `backend/src/services/ontology/` 目录实现
- **LORA微调**：在 `backend/scripts/lora_finetune/` 目录实现

### 2. 知识库管理
- **向量数据库管理**：在 `backend/src/services/vector_db/` 目录实现
- **知识图谱管理与预测**：在 `backend/src/services/knowledge_graph/` 目录实现
- **结构化数据管理**：在 `backend/src/services/structured_data/` 目录实现
- **多模态数据管理**：在 `backend/src/services/multimodal_data/` 目录实现
- **RAG检索优化**：在 `backend/src/services/rag/` 目录实现

### 3. 任务清单生成
- **军事智能问答**：在 `backend/src/services/qa/` 目录实现
- **军事想定方案**：在 `backend/src/services/scenario/` 目录实现
- **任务清单**：在 `backend/src/services/task_list/` 目录实现

### 4. 任务规划仿真
- **任务规划脚本生成**：在 `backend/src/services/script_generation/` 目录实现
- **大小模型协同的任务规划推演**：在 `backend/src/services/simulation/` 目录实现
- **典型任务规划案例**：在 `backend/src/services/case_study/` 目录实现

### 5. 模型管理
- **大模型管理**：在 `backend/src/services/model_management/large_model/` 目录实现
- **小模型管理**：在 `backend/src/services/model_management/small_model/` 目录实现
- **智能体管理**：在 `backend/src/services/model_management/agent/` 目录实现

### 6. 系统管理
- **提示词模版**：在 `backend/src/services/system/prompt_template/` 目录实现
- **路径设置**：在 `backend/src/config/` 目录实现
- **系统备份**：在 `backend/src/services/system/backup/` 目录实现

## 技术栈

### 前端
- React/Vue.js
- TypeScript
- Ant Design/Element Plus
- Axios
- Redux/Zustand

### 后端
- Node.js
- Express
- MongoDB/PostgreSQL
- Redis
- LangChain
- Hugging Face Transformers
- Pinecone/FAISS (向量数据库)

### 容器化
- Docker
- Docker Compose

## 开发流程

1. 克隆仓库：`git clone git@github.com:zjy1055/mil-sim-system.git`
2. 前端开发：
   - 进入 `frontend` 目录
   - 安装依赖：`npm install`
   - 启动开发服务器：`npm run dev`
3. 后端开发：
   - 进入 `backend` 目录
   - 安装依赖：`npm install`
   - 启动开发服务器：`npm run dev`
4. 容器化部署：
   - 根目录运行：`docker-compose up -d`

## 团队协作

- 使用Git Flow工作流
- 分支命名规范：`feature/功能名称`、`bugfix/问题描述`
- 提交信息规范：`类型: 描述`
- 代码审查：使用GitHub Pull Request

## 注意事项

- 敏感配置信息使用环境变量
- 定期备份数据
- 遵循代码规范和安全最佳实践
