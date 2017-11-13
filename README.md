注册接口：
POST http://z005.kmtongji.com/api/register
接收3个参数：username，nick，password

登录接口：
POST http://z005.kmtongji.com/api/login
接收2个参数：username，password

获取已注册用户接口：
GET http://z005.kmtongji.com/api/users
不接收参数，但会根据Cookies判断是否登录并返回不同内容

修改密码接口：
POST http://z005.kmtongji.com/api/users/setPassword
接收1个参数：password

退出登录：
GET http://z005.kmtongji.com/api/logout

测试要求：
使用React实现一个完整的用户注册登录场景（界面和交互自行发挥）：
首页能判断当前是否登录，如已登录则显示已注册用户列表，未登录则跳转到登录页面或显示登录界面
username必须是合法的Email（前端自行校验）
重复的username无法注册（API会返回错误提示，需体现在UI反馈上）
能退出登录
有余力的情况下可以尝试实现修改密码功能
可以借助你熟悉的任何第三方开源项目，能尝试用 redux组织代码更佳
请使用 Github 或 Coding.net 之类的代码托管平台提交代码并将仓库地址邮件回复即可
请在3天之内回复，超时未回复视为放弃
如有任何疑问，欢迎随时联系！