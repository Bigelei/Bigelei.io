import Mock from "mockjs"
import wechat from '../components/图片/微信二维码.png'
import QQ from "../components/图片/qq二维码.png"

Mock.mock("/api/setting", "get", {
    code: 0,
    msg: "",
    data: {
        avatar: "https://img2.baidu.com/it/u=285834694,1458566727&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400",
        siteTitle: "JOJO的奇妙小屋",
        github: "https://github.com/Bigelei",
        qq: "1253805120",
        qqQrCode: QQ,
        weixin: "lei869829",
        weixinQeCode: wechat,
        mail: "lei970214@gmail.com",
        icp: "京ICP备17001719号",
        githubName: "Bigelei",
        favicon: "https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E5%90%83%E8%B1%86%E4%BA%BA&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=1063649884,850667399&os=3343089257,2453260585&simid=3361736291,228803304&pn=31&rn=1&di=7077213605308923905&ln=1482&fr=&fmq=1650806092095_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fpic3.zhimg.com%252F50%252Fv2-83548c84cd73df54d1e7ee8800ce0112_hd.jpg%26refer%3Dhttp%253A%252F%252Fpic3.zhimg.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Dauto%3Fsec%3D1653398156%26t%3D68ba96c000f7885f95b6b57734a80770&rpstart=0&rpnum=0&adpicid=0&nojc=undefined&dyTabStr=MCwzLDIsMSw2LDUsOCw3LDQsOQ%3D%3D"
    }
})