"use strict";
exports.id = 71;
exports.ids = [71];
exports.modules = {

/***/ 48568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-38395db2",
  "path": "/6.x/common/client.html",
  "title": "API 调用",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "两种调用方式",
      "slug": "两种调用方式",
      "children": [
        {
          "level": 3,
          "title": "方式一：原始方式调用",
          "slug": "方式一-原始方式调用",
          "children": []
        },
        {
          "level": 3,
          "title": "方式二：链式调用",
          "slug": "方式二-链式调用",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "处理响应",
      "slug": "处理响应",
      "children": []
    },
    {
      "level": 2,
      "title": "异步请求",
      "slug": "异步请求",
      "children": []
    },
    {
      "level": 2,
      "title": "并行请求",
      "slug": "并行请求",
      "children": []
    },
    {
      "level": 2,
      "title": "更多使用方法",
      "slug": "更多使用方法",
      "children": []
    }
  ],
  "filePathRelative": "6.x/common/client.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 35224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ client_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/6.x/common/client.html.vue?vue&type=template&id=77086bc6



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="api-调用" tabindex="-1"><a class="header-anchor" href="#api-调用" aria-hidden="true">#</a> API 调用</h1><p>与以往版本不同的是，SDK 不再内置具体 API 的逻辑，所有的 API 均交由开发者自行调用，以获取用户列表为例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$api</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="两种调用方式" tabindex="-1"><a class="header-anchor" href="#两种调用方式" aria-hidden="true">#</a> 两种调用方式</h2><p>当前版本准备了两种调用方式：<strong>原始方式调用</strong> 和 <strong>链式调用</strong>，请根据你的喜好自行选择使用方式，效果一致。</p><h3 id="方式一-原始方式调用" tabindex="-1"><a class="header-anchor" href="#方式一-原始方式调用" aria-hidden="true">#</a> 方式一：原始方式调用</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$api</span><span class="token operator">-&gt;</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/cgi-bin/user/info/updateremark&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;body&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token string double-quoted-string">&quot;openid&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;oDF3iY9ffA-hqb2vVvbr7qxf6A0Q&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;remark&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;pangzi&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="语法说明" tabindex="-1"><a class="header-anchor" href="#语法说明" aria-hidden="true">#</a> 语法说明</h4><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>Symfony\\Contracts\\HttpClient\\ResponseInterface <span class="token punctuation">{</span>get<span class="token operator">/</span>post<span class="token operator">/</span>patch<span class="token operator">/</span>put<span class="token operator">/</span>delete<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token variable">\$uri</span><span class="token punctuation">,</span> <span class="token variable">\$options</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>参数说明：</strong></p><ul><li><code>\$uri</code> 为需要请求的 <code>path</code>；</li><li><code>\$options</code> 为请求参数，可以指定 <code>query</code> / <code>body</code> / <code>headers</code> 等等，具体请参考：<a href="https://github.com/symfony/symfony/blob/5.3/src/Symfony/Contracts/HttpClient/HttpClientInterface.php" target="_blank" rel="noopener noreferrer">Symfony\\Contracts\\HttpClient\\HttpClientInterface::OPTIONS_DEFAULTS`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><hr><h3 id="方式二-链式调用" tabindex="-1"><a class="header-anchor" href="#方式二-链式调用" aria-hidden="true">#</a> 方式二：链式调用</h3><p>你可以将需要调用的 API 以 <code>/</code> 分割 + 驼峰写法的形式，写成如下模式：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$users</span> <span class="token operator">=</span> <span class="token variable">\$api</span><span class="token operator">-&gt;</span><span class="token property">cgiBin</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token property">get</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>它最终就是转化为：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /cgi-bin/user/get
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="链式转换规则" tabindex="-1"><a class="header-anchor" href="#链式转换规则" aria-hidden="true">#</a> 链式转换规则</h4><ul><li>请求 path 中的 <code>/</code> 为分隔符，切割成属性，例如：<code>/cgi-bin/user/info/updateremark</code> 则转换成 <code>-&gt;cgiBin-&gt;user-&gt;info-&gt;updateremark</code>；</li><li>path 对应的请求方法（HTTP Method），即作为请求对象的末尾执行方法，例如: <code>-&gt;cgiBin-&gt;user-&gt;info-&gt;updateremark-&gt;post([...])</code>；</li><li>有中横线分隔符(<code>-</code>)的，可以使用驼峰（camelCase）风格书写，例如: merchant-service 可写成 merchantService；</li><li>动态参数，例如 <code>business_code/{business_code}</code> 可写成 <code>-&gt;businessCode-&gt;{&#39;201202828&#39;}</code>，或按属性风格，直接写值也可以，例如 <code>businessCode-&gt;{&#39;\$myCode&#39;}</code>；</li></ul><blockquote><p>❤️ 链式调用参考自朋友 <code>TheNorthMemory</code> 的插件 <a href="https://github.com/TheNorthMemory/wechatpay-axios-plugin" target="_blank" rel="noopener noreferrer">TheNorthMemory/wechatpay-axios-plugin`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> 中的创意。</p></blockquote><h5 id="动态参数示例" tabindex="-1"><a class="header-anchor" href="#动态参数示例" aria-hidden="true">#</a> 动态参数示例</h5><p>URL 中有动态参数，可以用 <strong>单引号变量名写法代替</strong>，然后在请求 <code>\$options</code> 中传递该参数将会完成替换：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$outTradeNo</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;order123456&#39;</span><span class="token punctuation">;</span>
<span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$api</span><span class="token operator">-&gt;</span><span class="token property">pay</span><span class="token operator">-&gt;</span><span class="token property">transactions</span><span class="token operator">-&gt;</span><span class="token property">outTradeNo</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span><span class="token string single-quoted-string">&#39;\$outTradeNo&#39;</span><span class="token punctuation">}</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;query&#39;</span><span class="token operator">=&gt;</span><span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;mchid&#39;</span> <span class="token operator">=&gt;</span>  <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getMerchant</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">getMerchantId</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;outTradeNo&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">\$outTradeNo</span><span class="token punctuation">,</span> <span class="token comment">// &lt;-- 这里将对应替换 URL 中同名的参数 \`\$out_trade_no\`</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote><p>注意： 变量部分一定使用单引号。</p></blockquote><h4 id="参数传递" tabindex="-1"><a class="header-anchor" href="#参数传递" aria-hidden="true">#</a> 参数传递</h4><h5 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> GET</h5><p>你可以在最后的调用方法里传递对应的参数，例如：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$users</span> <span class="token operator">=</span> <span class="token variable">\$api</span><span class="token operator">-&gt;</span><span class="token property">cgiBin</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token property">get</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;query&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;next_openid&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;OPENID1&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="post" tabindex="-1"><a class="header-anchor" href="#post" aria-hidden="true">#</a> POST</h4><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$api</span><span class="token operator">-&gt;</span><span class="token property">cgiBin</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token property">info</span><span class="token operator">-&gt;</span><span class="token property">updateremark</span><span class="token operator">-&gt;</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;body&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token string double-quoted-string">&quot;openid&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;oDF3iY9ffA-hqb2vVvbr7qxf6A0Q&quot;</span><span class="token punctuation">,</span>
            <span class="token string double-quoted-string">&quot;remark&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;pangzi&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>或者指定 json 格式：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$api</span><span class="token operator">-&gt;</span><span class="token property">cgiBin</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token property">info</span><span class="token operator">-&gt;</span><span class="token property">updateremark</span><span class="token operator">-&gt;</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;json&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token string double-quoted-string">&quot;openid&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;oDF3iY9ffA-hqb2vVvbr7qxf6A0Q&quot;</span><span class="token punctuation">,</span>
            <span class="token string double-quoted-string">&quot;remark&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;pangzi&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="文件上传" tabindex="-1"><a class="header-anchor" href="#文件上传" aria-hidden="true">#</a> 文件上传</h4><p>你有两种上传文件的方式可以选择：</p><h5 id="从指定路径上传" tabindex="-1"><a class="header-anchor" href="#从指定路径上传" aria-hidden="true">#</a> 从指定路径上传</h5><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Kernel<span class="token punctuation">\\</span>Form<span class="token punctuation">\\</span>File</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Kernel<span class="token punctuation">\\</span>Form<span class="token punctuation">\\</span>Form</span><span class="token punctuation">;</span>

<span class="token variable">\$options</span> <span class="token operator">=</span> <span class="token class-name static-context">Form</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span>
    <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;media&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name static-context">File</span><span class="token operator">::</span><span class="token function">fromPath</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/path/to/image.jpg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$api</span><span class="token operator">-&gt;</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;cgi-bin/media/upload?type=image&#39;</span><span class="token punctuation">,</span> <span class="token variable">\$options</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h5 id="从二进制内容上传" tabindex="-1"><a class="header-anchor" href="#从二进制内容上传" aria-hidden="true">#</a> 从二进制内容上传</h5><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Kernel<span class="token punctuation">\\</span>Form<span class="token punctuation">\\</span>File</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Kernel<span class="token punctuation">\\</span>Form<span class="token punctuation">\\</span>Form</span><span class="token punctuation">;</span>

<span class="token variable">\$options</span> <span class="token operator">=</span> <span class="token class-name static-context">Form</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span>
    <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;media&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name static-context">File</span><span class="token operator">::</span><span class="token function">withContents</span><span class="token punctuation">(</span><span class="token variable">\$contents</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;image.jpg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 注意：请指定文件名</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$api</span><span class="token operator">-&gt;</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;cgi-bin/media/upload?type=image&#39;</span><span class="token punctuation">,</span> <span class="token variable">\$options</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><hr><h2 id="处理响应" tabindex="-1"><a class="header-anchor" href="#处理响应" aria-hidden="true">#</a> 处理响应</h2><p>API Client 基于 <a href="https://github.com/symfony/http-client" target="_blank" rel="noopener noreferrer">symfony/http-client`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> 实现，你可以通过以下方式对响应值进行访问：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$api</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/cgi-bin/user/get&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;query&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;openid&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;...&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取状态码</span>
<span class="token variable">\$statusCode</span> <span class="token operator">=</span> <span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">getStatusCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取全部响应头</span>
<span class="token variable">\$headers</span> <span class="token operator">=</span> <span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">getHeaders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取响应原始内容</span>
<span class="token variable">\$content</span> <span class="token operator">=</span> <span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取 json 转换后的数组格式</span>
<span class="token variable">\$content</span> <span class="token operator">=</span> <span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 将内容转换成 Stream 返回</span>
<span class="token variable">\$content</span> <span class="token operator">=</span> <span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">toStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取其他信息，如：&quot;response_headers&quot;, &quot;redirect_count&quot;, &quot;start_time&quot;, &quot;redirect_url&quot; 等.</span>
<span class="token variable">\$httpInfo</span> <span class="token operator">=</span> <span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取指定信息</span>
<span class="token variable">\$startTime</span> <span class="token operator">=</span> <span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;start_time&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取请求日志</span>
<span class="token variable">\$httpLogs</span> <span class="token operator">=</span> <span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;debug&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>📖 更多使用请参考： <a href="https://symfony.com/doc/current/http_client.html#processing-responses" target="_blank" rel="noopener noreferrer">HTTP client: Processing Responses`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><hr><h2 id="异步请求" tabindex="-1"><a class="header-anchor" href="#异步请求" aria-hidden="true">#</a> 异步请求</h2><p>所有的请求都是异步的，当你第一次访问 <code>\$response</code> 时才会真正的请求，比如：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// 这段代码会立即执行，并不会发起网络请求</span>
<span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$api</span><span class="token operator">-&gt;</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/cgi-bin/user/info/updateremark&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;body&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token string double-quoted-string">&quot;openid&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;oDF3iY9ffA-hqb2vVvbr7qxf6A0Q&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;remark&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;pangzi&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// 当你尝试访问 \$response 的信息时，才会发起请求并等待返回</span>
<span class="token variable">\$contentType</span> <span class="token operator">=</span> <span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">getHeaders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;content-type&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 尝试获取响应内容将阻塞执行，直到接收到完整的响应内容</span>
<span class="token variable">\$content</span> <span class="token operator">=</span> <span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="并行请求" tabindex="-1"><a class="header-anchor" href="#并行请求" aria-hidden="true">#</a> 并行请求</h2><p>由于请求天然是异步的，那么你可以很简单实现并行请求：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$responses</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token variable">\$api</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/cgi-bin/user/get&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token variable">\$api</span><span class="token operator">-&gt;</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/cgi-bin/user/info/updateremark&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;body&#39;</span> <span class="token operator">=&gt;</span> <span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token variable">\$api</span><span class="token operator">-&gt;</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/cgi-bin/user/message/custom/send&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;body&#39;</span> <span class="token operator">=&gt;</span> <span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 访问任意一个 \$response 时将执行并发请求：</span>
<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">\$responses</span> <span class="token keyword">as</span> <span class="token variable">\$response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">\$content</span> <span class="token operator">=</span> <span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>当然你也可以给每个请求分配名字独立访问：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$responses</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;users&#39;</span><span class="token operator">=&gt;</span> <span class="token variable">\$api</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/cgi-bin/user/get&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;remark&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">\$api</span><span class="token operator">-&gt;</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/cgi-bin/user/info/updateremark&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;body&#39;</span> <span class="token operator">=&gt;</span> <span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;message&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">\$api</span><span class="token operator">-&gt;</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/cgi-bin/user/message/custom/send&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;body&#39;</span> <span class="token operator">=&gt;</span> <span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 访问任意一个 \$response 时将执行并发请求：</span>
<span class="token variable">\$responses</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;users&#39;</span><span class="token punctuation">]</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="更多使用方法" tabindex="-1"><a class="header-anchor" href="#更多使用方法" aria-hidden="true">#</a> 更多使用方法</h2><p>📖 更多使用请参考：<a href="https://github.com/symfony/http-client" target="_blank" rel="noopener noreferrer">symfony/http-client`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/6.x/common/client.html.vue?vue&type=template&id=77086bc6

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/6.x/common/client.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/6.x/common/client.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const client_html = (script);

/***/ })

};
;
//# sourceMappingURL=71.app.js.map