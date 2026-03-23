# Git使用流程

## 1. 环境准备

### 1.1 安装Git
- Windows: 下载并安装 [Git for Windows](https://git-scm.com/download/win)
- macOS: 使用 Homebrew 安装 `brew install git`
- Linux: 使用包管理器安装，如 `apt install git` 或 `yum install git`

### 1.2 配置Git
```bash
# 设置用户名
git config --global user.name "Your Name"

# 设置邮箱
git config --global user.email "your_email@example.com"

# 配置SSH密钥
echo "Host github.com
  HostName github.com
  IdentityFile ~/.ssh/id_ed25519
  User git" > ~/.ssh/config
```

### 1.3 生成SSH密钥
```bash
# 生成ED25519密钥（推荐）
ssh-keygen -t ed25519 -C "your_email@example.com"

# 查看并复制公钥
cat ~/.ssh/id_ed25519.pub
```

### 1.4 添加SSH密钥到GitHub
1. 登录GitHub账户
2. 点击右上角头像 → Settings → SSH and GPG keys
3. 点击 "New SSH key"
4. 粘贴复制的公钥内容
5. 点击 "Add SSH key"

## 2. 仓库操作

### 2.1 克隆仓库
```bash
git clone git@github.com:zjy1055/mil-sim-system.git
cd mil-sim-system
```

### 2.2 拉取最新代码
```bash
# 确保在主分支
git checkout master

# 拉取最新代码
git pull origin master
```

## 3. 分支管理

### 3.1 创建新分支
```bash
# 从主分支创建新分支
git checkout -b feature/功能名称
# 或
git checkout -b bugfix/问题描述
```

### 3.2 查看分支
```bash
# 查看本地分支
git branch

# 查看远程分支
git branch -r

# 查看所有分支
git branch -a
```

### 3.3 切换分支
```bash
git checkout 分支名称
```

### 3.4 合并分支
```bash
# 切换到目标分支
git checkout master

# 合并源分支
git merge feature/功能名称
```

### 3.5 删除分支
```bash
# 删除本地分支
git branch -d 分支名称

# 删除远程分支
git push origin --delete 分支名称
```

## 4. 代码提交

### 4.1 添加文件
```bash
# 添加所有修改的文件
git add .

# 添加指定文件
git add 文件名
```

### 4.2 提交代码
```bash
# 提交代码并添加提交信息
git commit -m "类型: 描述"
```

### 4.3 提交信息规范
- **类型**：feat（新功能）、fix（修复）、docs（文档）、style（样式）、refactor（重构）、test（测试）、chore（构建/依赖）
- **描述**：简洁明了，不超过50个字符

**示例**：
- `feat: 添加数据抓取功能`
- `fix: 修复任务规划推演bug`
- `docs: 更新API文档`

### 4.4 推送代码
```bash
# 推送当前分支到远程
git push origin 分支名称

# 首次推送时设置上游分支
git push -u origin 分支名称
```

## 5. 协作流程

### 5.1 标准工作流
1. **拉取最新代码**：`git pull origin master`
2. **创建分支**：`git checkout -b feature/功能名称`
3. **开发代码**：编写功能代码
4. **提交代码**：`git add . && git commit -m "feat: 描述"`
5. **推送分支**：`git push -u origin feature/功能名称`
6. **创建PR**：在GitHub上创建Pull Request
7. **代码审查**：团队成员审查代码
8. **合并PR**：代码审查通过后合并到主分支
9. **删除分支**：合并后删除功能分支

### 5.2 解决冲突
当多人修改同一文件时可能会产生冲突，解决步骤：
1. 拉取最新代码：`git pull origin master`
2. 查看冲突文件：`git status`
3. 手动编辑冲突文件，解决冲突
4. 添加解决后的文件：`git add 冲突文件`
5. 提交解决冲突：`git commit -m "fix: 解决冲突"`
6. 推送代码：`git push origin 分支名称`

## 6. 常见问题

### 6.1 SSH连接问题
```bash
# 测试SSH连接
ssh -T git@github.com

# 若出现权限错误，检查SSH密钥是否正确添加到GitHub
```

### 6.2 忘记提交信息规范
```bash
# 修正最后一次提交信息
git commit --amend -m "正确的提交信息"
```

### 6.3 误操作回滚
```bash
# 回滚到指定提交
git reset --hard 提交ID

# 查看提交历史
git log --oneline
```

## 7. 最佳实践

1. **定期拉取**：每天开始工作前拉取最新代码
2. **小步提交**：每次提交只包含一个功能或修复
3. **分支管理**：使用分支进行功能开发，避免直接修改主分支
4. **代码审查**：所有代码必须经过审查才能合并
5. **提交信息**：使用规范的提交信息，便于后续追溯
6. **冲突处理**：及时解决冲突，避免冲突积累
7. **备份**：定期推送代码到远程仓库，确保代码安全

## 8. 命令速查

| 命令 | 功能 |
|------|------|
| `git status` | 查看当前状态 |
| `git log` | 查看提交历史 |
| `git diff` | 查看修改内容 |
| `git stash` | 暂存当前修改 |
| `git stash pop` | 恢复暂存的修改 |
| `git fetch` | 获取远程更新 |
| `git rebase` | 变基操作 |
| `git tag` | 打标签 |

---

**注意**：本流程适用于本项目的团队协作，所有团队成员应严格遵循，确保代码管理的一致性和可靠性。