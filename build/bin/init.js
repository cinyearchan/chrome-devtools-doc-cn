if (!process.argv[2]) {
  console.log('名称必填 - Please enter new name')
  process.exit(1)
}

const path = require('path')
const fs = require('fs')
const fileSave = require('file-save')
const uppercamelcase = require('uppercamelcase')
const componentname = process.argv[2]
// 这里需要判断是否包含文件夹
// const chineseName = process.argv[3] || componentname
// const ComponentName = uppercamelcase(componentname)
const PackagePath = path.resolve(__dirname, '../../packages/' + componentname)
const Files = [
  {
    filename: 'index.md', // 不能写死成 index.md
    content: `# hello`
  }
]

const componentsFile = require('../../components.json')
if (componentsFile[componentname]) {
  console.error(`${componentname} 已存在`)
  process.exit(1)
}

componentsFile[componentname] = `./packages/${componentname}/index.md`
fileSave(path.join(__dirname, '../../components.json'))
  .write(JSON.stringify(componentsFile, null, ' '), 'utf8')
  .end('\n')

Files.forEach(file => {
  fileSave(path.join(PackagePath, file.filename))
    .write(file.content, 'utf8')
    .end('\n')
})
