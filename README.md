1.git init 初始化

2.git add README.md

3.git commit -m "first commit"

4.git branch -M main

5.git remote add origin git@github.com:zzmiao/vue-template.git

6.git push -u origin main

################################

添加新页面： 
  在Nav页面添加新页面访问路劲
  
css --  预处理器（ pre-processor ）是你把一些长得很像 CSS 但不是 CSS 的东西丢给它，处理过后会给你编译过后的CSS，
而 CSS 再经过后处理器 （ post-processor ），透过一些规则帮它加上一些东西，最后产出完整的CSS文件

TypeScript：

是否使用class风格的组件语法：Use class-style component syntax?
是否使用babel做转义：Use Babel alongside TypeScript for auto-detected polyfills?
CSS Pre-processors：

选择CSS 预处理类型：Pick a CSS pre-processor
Linter / Formatter

选择Linter / Formatter规范类型：Pick a linter / formatter config
选择lint方式，保存时检查/提交时检查：Pick additional lint features
Testing

选择Unit测试方式
选择E2E测试方式
  
  
  sass：是一种动态样式语言，比css多出了很多功能（如变量，计算，混入，颜色处理，函数，继承， 嵌套等），更易阅读，扩展名.sass

　　　需要严格的遵循缩进的语法规则，不带{}和分号；

　　　　h1

　　　　　　color:red;

scss：是sass语法进行改良后的语法，兼容原来的语法，只是将原来的缩进排版方式改成了我们熟悉的{}，扩展名 .scss

　　　　h1{

　　　　　　color:red

　　　　}

less：Less也是一种动态语言，受sass影响很大，对css赋予了动态语言的特性，如变量，计算，继承，函数等。Less既可以在客户端运行（支持IE6+），也可以在服务端运行（借助nodejs）

　　h1{

　　　　color:red

　　}

stylus：主要是给node项目进行css预处理支持，人气不如前两个。扩展名是.styl

　　　　同时支持缩进和css常规书写方式，如下两种方式都是可以的

　　　　h1

　　　　　　color:red

　　　　h1{

　　　　　　color:red

　　　　}
