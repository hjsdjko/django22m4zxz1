const base = {
    get() {
        return {
            url : "http://localhost:8080/django22m4zxz1/",
            name: "django22m4zxz1",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于Python的毕业生去向反馈调查平台的设计与实现"
        } 
    }
}
export default base
