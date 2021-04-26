### boostrap版 三级联动插件
    需要依赖boostrap和boostrap-select插件使用

    ```
    调用方法：
    new MThree(domarr,option);
    参数说明：
    domarr:'select选择器的class或者id数组',//示例["#selone","#seltow","#selthree"],支持二级和三级联动，不传第三个数组值则为二级联动 
    option:{},//配置项 

        配置项说明：
        data:"",JSON数组数据
        classIdLabel:'code', //ID字段名 默认为code , 如果数据里面不配置id之类的字段 传空"",requied
        classTextLabel:'name', //文本字段名 默认name
        classChildsLabel:'childs', //子数据字段名 默认childs

    ```

