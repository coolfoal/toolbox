
/*************************** [bundle] ****************************/
// Original file:./src/dialogs/api/pages/webgl/index.js
/*****************************************************************/
window.__pkg__bundleSrc__['116']=function(){
    var __pkg__scope_bundle__={};
    var __pkg__scope_args__;
    __pkg__scope_args__=window.__pkg__getBundle('355');
var template =__pkg__scope_args__.default;


__pkg__scope_bundle__.default= function (obj) {
    return {
        render: template
    }
};

    return __pkg__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/dialogs/api/pages/webgl/index.html
/*****************************************************************/
window.__pkg__bundleSrc__['355']=function(){
    var __pkg__scope_bundle__={};
    var __pkg__scope_args__;
    __pkg__scope_bundle__.default= [{"type":"tag","name":"root","attrs":{},"childNodes":[1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63,72,74,76,78,80,82,87,89,91,93,95,97,99,101,103,105,148,150,152,154]},{"type":"tag","name":"header","attrs":{},"childNodes":[2]},{"type":"text","content":"3D绘图 WebGL","childNodes":[]},{"type":"tag","name":"h2","attrs":{},"childNodes":[4]},{"type":"text","content":"引入","childNodes":[]},{"type":"tag","name":"pre","attrs":{},"childNodes":[6]},{"type":"text","content":"import webglRender from './src/tool/webgl/index';","childNodes":[]},{"type":"tag","name":"h2","attrs":{},"childNodes":[8]},{"type":"text","content":"使用","childNodes":[]},{"type":"tag","name":"p","attrs":{},"childNodes":[10]},{"type":"text","content":"传递一个canvas结点，返回的是一个对象：","childNodes":[]},{"type":"tag","name":"pre","attrs":{},"childNodes":[12]},{"type":"text","content":"var webgl = webglRender(document.getElementsByTagName('canvas')[0]);","childNodes":[]},{"type":"tag","name":"h3","attrs":{},"childNodes":[14]},{"type":"text","content":"属性","childNodes":[]},{"type":"tag","name":"h4","attrs":{},"childNodes":[16]},{"type":"text","content":"_gl_","childNodes":[]},{"type":"tag","name":"pre","attrs":{},"childNodes":[18]},{"type":"text","content":"var gl = webgl._gl_;","childNodes":[]},{"type":"tag","name":"p","attrs":{},"childNodes":[20]},{"type":"text","content":"内部维护的WebGL对象实例，你可以通过他来直接调用原生方法。","childNodes":[]},{"type":"tag","name":"h3","attrs":{},"childNodes":[22]},{"type":"text","content":"着色器","childNodes":[]},{"type":"tag","name":"pre","attrs":{},"childNodes":[24]},{"type":"text","content":"<!-- 顶点着色器 -->\r\n<script type='x-shader/x-vertex' id='vs'>\r\n    void main(){}\r\n</script>","childNodes":[]},{"type":"tag","name":"pre","attrs":{},"childNodes":[26]},{"type":"text","content":"<!-- 片段着色器 -->\r\n<script type='x-shader/x-fragment' id='fs'>\r\n    void main(){}\r\n</script>","childNodes":[]},{"type":"tag","name":"p","attrs":{},"childNodes":[28]},{"type":"text","content":"在JavaScript层面上着色器就是两段字符串，调用下面的便可以让着色器生效：","childNodes":[]},{"type":"tag","name":"pre","attrs":{},"childNodes":[30]},{"type":"text","content":"webgl.shader(\r\n    document.getElementById('vs').innerHTML,\r\n    document.getElementById('fs').innerHTML\r\n);","childNodes":[]},{"type":"tag","name":"h3","attrs":{},"childNodes":[32]},{"type":"text","content":"设置数据","childNodes":[]},{"type":"tag","name":"p","attrs":{},"childNodes":[34]},{"type":"text","content":"我们知道varying是只读的，可以是除了数组和结构体外的任意类型，主要用于两个着色器间数据传递，因此，设置数据其实涉及的是attribue和uniform类型的变量（只能是float、vec2、vec3、vec4和mat2、mat3、mat4其中的一种类型）。","childNodes":[]},{"type":"tag","name":"h4","attrs":{},"childNodes":[36]},{"type":"text","content":"attribue","childNodes":[]},{"type":"tag","name":"pre","attrs":{},"childNodes":[38]},{"type":"text","content":"webgl.setAttribute[1,2,3,4][f,i](location, v0, v1, v2, v3);","childNodes":[]},{"type":"tag","name":"h4","attrs":{},"childNodes":[40]},{"type":"text","content":"uniform","childNodes":[]},{"type":"tag","name":"pre","attrs":{},"childNodes":[42]},{"type":"text","content":"webgl.setUniform[1,2,3,4][f,i](location, v0, v1, v2, v3);","childNodes":[]},{"type":"tag","name":"p","attrs":{},"childNodes":[44]},{"type":"text","content":"此外，如果设置的数据是矩阵：","childNodes":[]},{"type":"tag","name":"pre","attrs":{},"childNodes":[46]},{"type":"text","content":"webgl.setUniformMatrix[2,3,4]fv(location, value);","childNodes":[]},{"type":"tag","name":"h3","attrs":{},"childNodes":[48]},{"type":"text","content":"缓冲区","childNodes":[]},{"type":"tag","name":"p","attrs":{},"childNodes":[50]},{"type":"text","content":"缓冲区是一种更快速的给GPU大量数据的特殊通道，为了使用缓冲区，首先需要创建一个缓冲区：","childNodes":[]},{"type":"tag","name":"pre","attrs":{},"childNodes":[52]},{"type":"text","content":"var buffer = webgl.buffer(isElement);","childNodes":[]},{"type":"tag","name":"p","attrs":{},"childNodes":[54]},{"type":"text","content":"在创建的时候需要传递一个boolean值类型的参数isElement，默认false表示缓冲区中保存了包含顶点的数据，如果传递true表示缓冲区保存了包含顶点的索引值。","childNodes":[]},{"type":"tag","name":"p","attrs":{},"childNodes":[56]},{"type":"text","content":"缓冲区创建好了以后，你就可以直接往缓冲区里面写入数据了：","childNodes":[]},{"type":"tag","name":"pre","attrs":{},"childNodes":[58]},{"type":"text","content":"buffer.write(data);","childNodes":[]},{"type":"tag","name":"p","attrs":{},"childNodes":[60]},{"type":"text","content":"如果你创建的缓冲区是包含顶点的索引值的话，可能到这一步就结束了，否则，你可能还需要把缓冲区中的数据分配给具体的使用者：","childNodes":[]},{"type":"tag","name":"pre","attrs":{},"childNodes":[62]},{"type":"text","content":"buffer.use(location, size, stride, offset);","childNodes":[]},{"type":"tag","name":"ol","attrs":{},"childNodes":[64,66,68,70]},{"type":"tag","name":"li","attrs":{},"childNodes":[65]},{"type":"text","content":"location：字符串类型，对应顶点着色器中定义的attribute类型的变量名；","childNodes":[]},{"type":"tag","name":"li","attrs":{},"childNodes":[67]},{"type":"text","content":"size：整数，表示一个完整的数据的个数；","childNodes":[]},{"type":"tag","name":"li","attrs":{},"childNodes":[69]},{"type":"text","content":"stride：整数，表示写入缓冲区数据一组的个数；","childNodes":[]},{"type":"tag","name":"li","attrs":{},"childNodes":[71]},{"type":"text","content":"offset：整数，表示读取起点。","childNodes":[]},{"type":"tag","name":"h3","attrs":{},"childNodes":[73]},{"type":"text","content":"纹理","childNodes":[]},{"type":"tag","name":"p","attrs":{},"childNodes":[75]},{"type":"text","content":"纹理是片元着色器在逐片元过程中使用的，类似贴图，使用的第一步也是创建一个纹理：","childNodes":[]},{"type":"tag","name":"pre","attrs":{},"childNodes":[77]},{"type":"text","content":"var texture = webgl.texture(type[, unit]);","childNodes":[]},{"type":"tag","name":"p","attrs":{},"childNodes":[79]},{"type":"text","content":"type表示纹理的类型，unit表示使用哪个纹理单元（开启的编号，可选，默认0）。","childNodes":[]},{"type":"tag","name":"p","attrs":{},"childNodes":[81]},{"type":"text","content":"因为纹理有很多种，下面列出目前支持的类型：","childNodes":[]},{"type":"tag","name":"ol","attrs":{},"childNodes":[83,85]},{"type":"tag","name":"li","attrs":{},"childNodes":[84]},{"type":"text","content":"\"2d\"：二维纹理(unit只有在这种纹理类型下才需要传递)；","childNodes":[]},{"type":"tag","name":"li","attrs":{},"childNodes":[86]},{"type":"text","content":"\"cube\"：立方体纹理。","childNodes":[]},{"type":"tag","name":"p","attrs":{},"childNodes":[88]},{"type":"text","content":"纹理创建好了以后，你需要把材料（比如图片等）和纹理绑定。","childNodes":[]},{"type":"tag","name":"p","attrs":{},"childNodes":[90]},{"type":"text","content":"如果你使用的是2d纹理，你应该这样绑定（假如我们这里已经准备好了一张图片img）：","childNodes":[]},{"type":"tag","name":"pre","attrs":{},"childNodes":[92]},{"type":"text","content":"texture.useImage(img);","childNodes":[]},{"type":"tag","name":"p","attrs":{},"childNodes":[94]},{"type":"text","content":"而如果你使用的是cube纹理，你应该这样绑定（假如我们这里已经准备好了六张图片img1~img6）：","childNodes":[]},{"type":"tag","name":"pre","attrs":{},"childNodes":[96]},{"type":"text","content":"texture.useCube([img1,img2,img3,img4,img5,img6], width, height);","childNodes":[]},{"type":"tag","name":"p","attrs":{},"childNodes":[98]},{"type":"text","content":"到这一步，纹理准备工作已经完成了，后面的就是在片元着色器中去使用这个纹理了。","childNodes":[]},{"type":"tag","name":"h3","attrs":{},"childNodes":[100]},{"type":"text","content":"画笔","childNodes":[]},{"type":"tag","name":"pre","attrs":{},"childNodes":[102]},{"type":"text","content":"var painter=webgl.painter();","childNodes":[]},{"type":"tag","name":"h4","attrs":{},"childNodes":[104]},{"type":"text","content":"绘图方法","childNodes":[]},{"type":"tag","name":"table","attrs":{},"childNodes":[106,112]},{"type":"tag","name":"thead","attrs":{},"childNodes":[107]},{"type":"tag","name":"tr","attrs":{},"childNodes":[108,110]},{"type":"tag","name":"td","attrs":{},"childNodes":[109]},{"type":"text","content":"类型","childNodes":[]},{"type":"tag","name":"td","attrs":{},"childNodes":[111]},{"type":"text","content":"语句","childNodes":[]},{"type":"tag","name":"tbody","attrs":{},"childNodes":[113,118,123,128,133,138,143]},{"type":"tag","name":"tr","attrs":{},"childNodes":[114,116]},{"type":"tag","name":"td","attrs":{},"childNodes":[115]},{"type":"text","content":"点","childNodes":[]},{"type":"tag","name":"td","attrs":{},"childNodes":[117]},{"type":"text","content":"painter.points(first, count[, type]);","childNodes":[]},{"type":"tag","name":"tr","attrs":{},"childNodes":[119,121]},{"type":"tag","name":"td","attrs":{},"childNodes":[120]},{"type":"text","content":"直线","childNodes":[]},{"type":"tag","name":"td","attrs":{},"childNodes":[122]},{"type":"text","content":"painter.lines(first, count[, type]);","childNodes":[]},{"type":"tag","name":"tr","attrs":{},"childNodes":[124,126]},{"type":"tag","name":"td","attrs":{},"childNodes":[125]},{"type":"text","content":"连续直线","childNodes":[]},{"type":"tag","name":"td","attrs":{},"childNodes":[127]},{"type":"text","content":"painter.stripLines(first, count[, type]);","childNodes":[]},{"type":"tag","name":"tr","attrs":{},"childNodes":[129,131]},{"type":"tag","name":"td","attrs":{},"childNodes":[130]},{"type":"text","content":"闭合直线","childNodes":[]},{"type":"tag","name":"td","attrs":{},"childNodes":[132]},{"type":"text","content":"painter.loopLines(first, count[, type]);","childNodes":[]},{"type":"tag","name":"tr","attrs":{},"childNodes":[134,136]},{"type":"tag","name":"td","attrs":{},"childNodes":[135]},{"type":"text","content":"三角形","childNodes":[]},{"type":"tag","name":"td","attrs":{},"childNodes":[137]},{"type":"text","content":"painter.triangles(first, count[, type]);","childNodes":[]},{"type":"tag","name":"tr","attrs":{},"childNodes":[139,141]},{"type":"tag","name":"td","attrs":{},"childNodes":[140]},{"type":"text","content":"共边三角形","childNodes":[]},{"type":"tag","name":"td","attrs":{},"childNodes":[142]},{"type":"text","content":"painter.stripTriangles(first, count[, type]);","childNodes":[]},{"type":"tag","name":"tr","attrs":{},"childNodes":[144,146]},{"type":"tag","name":"td","attrs":{},"childNodes":[145]},{"type":"text","content":"旋转围绕三角形","childNodes":[]},{"type":"tag","name":"td","attrs":{},"childNodes":[147]},{"type":"text","content":"painter.fanTriangles(first, count[, type]);","childNodes":[]},{"type":"tag","name":"p","attrs":{"class":"warn"},"childNodes":[149]},{"type":"text","content":"我们注意到每个方法最后都有一个可选参数type，表示索引值类型（\"byte\"或\"short\"），如果你希望借助顶点索引来绘制，请传递这个参数。","childNodes":[]},{"type":"tag","name":"h4","attrs":{},"childNodes":[151]},{"type":"text","content":"辅助方法","childNodes":[]},{"type":"tag","name":"p","attrs":{},"childNodes":[153]},{"type":"text","content":"开启深度计算：","childNodes":[]},{"type":"tag","name":"pre","attrs":{},"childNodes":[155]},{"type":"text","content":"painter.openDeep();","childNodes":[]}]

    return __pkg__scope_bundle__;
}
