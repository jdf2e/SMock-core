interface Config {
    type: string,
    docPath: string, //swagger文档访问路径
    docPort: string, //swagger文档端口号
    path: string,    //swagger模式路径
    method: string, //文档数据请求方式
    realHostName: string, // 项目上线后访问的真实域名
    mockPort: Number,  //启动服务的端口号
    customProtocol: string, //指定协议
    headers: any,           //创建服务时的请求头
    jsPath: string,
    descInclude: any,     //是否自动弹出接口描述
    override: boolean      //是否每次启动服务都覆盖数据
    
}
interface Data {
    id?: any; //唯一ID
    url?: any; //接口路径
    type?: any; //请求类型
    [propName: string]: any;
}

interface UrlData {
    url: string
}
export { Config, Data, UrlData };