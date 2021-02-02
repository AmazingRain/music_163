# 仿网易云音乐PC

## 使用到的技术
- 页面全部通过函数组件实现
- 使用```styled-components```解决组件间样式编写冲突的问题
- 使用```axios```发送网络请求
- 使用```react-router```，借助```react-router-config```完成路由的集中映射管理
- 使用```redux```进行数据的集中管理
- 通过```redux-thunk```在```redux```进行异步请求
- 通过```pm2```对后台服务进行进程守护

后台服务借助：[NeteaseCloudMusicApi](https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%e7%81%b5%e6%84%9f%e6%9d%a5%e8%87%aa)
## 完成功能

> 由于网络限制，也可访问[传送门](https://blog.csdn.net/qq_44162474/article/details/113498854)

### 推荐页面

#### 搜索功能

- 搜索对应歌曲会出现相应的搜索结果。
- 点击具体歌曲名称，会跳转到对应的歌曲详情页面。
- 搜索结果中会对搜索的关键字突出显示（蓝色）。

![](https://cdn.nlark.com/yuque/0/2021/gif/1756670/1612100859381-0f98b4cf-c787-4929-a336-f4163163f1cf.gif)

#### 轮播图

- 轮播图数据的展示
- 点击对应图片的内容会跳转到相应的歌曲详情页面

![](https://cdn.nlark.com/yuque/0/2021/gif/1756670/1612100865162-1e77bba4-3ef0-4c97-a036-af23b84df970.gif)

#### 热门推荐和新碟上架数据的展示

![](https://cdn.nlark.com/yuque/0/2021/png/1756670/1612101520076-c0258b9e-6b70-40eb-b28d-646e3eb25cb1.png?x-oss-process=image%2Fresize%2Cw_1120)

#### 榜单

- 点击对应歌曲名称，跳转到详情页面
- 点击播放按钮，实现歌曲的播放
- 点击添加按钮，实现将此个添加到播放列表
- 点击查看全部，跳转到指定的完整榜单



![](https://cdn.nlark.com/yuque/0/2021/gif/1756670/1612100876838-672eb8d0-7b3e-4e2f-a418-bac8ffbeaeee.gif)



#### 播放器

- 当前歌曲的暂停和播放
- 播放列表上一首和下一首的切换
- 音量大小的控制
- 拖动进度条改动当前歌曲播放的进度及对应时间的显示
- 播放列表中歌曲随机播放、顺序播放和单曲循环的实现
- 点击歌曲图片跳转到指定歌曲详情页面
- 当前播放列表中总歌曲数的显示

![](https://cdn.nlark.com/yuque/0/2021/gif/1756670/1612100878862-c139fb53-27fc-444b-90c9-8b8ea5fb8fc8.gif)

#### 播放列表

- 播放列表中歌曲的展示
- 点击相应歌曲播放该歌曲
- 点击删除按钮删除该歌曲
- 歌词随播放进度的动态展示

![](https://cdn.nlark.com/yuque/0/2021/gif/1756670/1612100878862-c139fb53-27fc-444b-90c9-8b8ea5fb8fc8.gif)





### 排行榜

- 排行榜数据的展示
- 左侧点击对应榜单，右侧显示对应的数据
- 点击播放，默认播放该榜单中的第一首歌
- 点击歌曲列表中对应的歌曲名可跳转到相应的歌曲详情页面
- 点击相应歌曲的播放按钮播放该歌曲
- 点击加号，可将其加入到播放列表中

![](https://cdn.nlark.com/yuque/0/2021/gif/1756670/1612100880527-31f346e1-5804-4e66-af82-c8f646f9d917.gif)

### 歌曲详情页面

- 歌曲信息的展示
- 右侧相似歌曲和包含此歌曲的歌单数据展示，其中包含此歌的歌单会根据是否存在对应歌单从而进行是否展示
- 右侧相似歌曲实现了对应歌曲的播放和跳转详情页
- 歌词的展开和收起
- 精彩评论和全部评论的展示
- 全部评论支持分页展示

![](https://cdn.nlark.com/yuque/0/2021/png/1756670/1612102502167-7c8ac300-04ac-4712-b657-92296787f402.png?x-oss-process=image%2Fresize%2Cw_1492)

![](https://cdn.nlark.com/yuque/0/2021/gif/1756670/1612100889907-bb79a1d5-8ceb-41a8-8c8a-048855828841.gif)

### 404页面

![1612102777466](https://cdn.nlark.com/yuque/0/2021/png/1756670/1612102771849-e728c742-ee0e-4cad-b53d-4e8ea4c40c77.png?x-oss-process=image%2Fresize%2Cw_1492)



另外，还有回到顶部功能的实现。
