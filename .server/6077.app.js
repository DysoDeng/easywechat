"use strict";
exports.id = 6077;
exports.ids = [6077];
exports.modules = {

/***/ 24140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-1117466f",
  "path": "/6.x/pay/",
  "title": "微信支付",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "实例化",
      "slug": "实例化",
      "children": []
    },
    {
      "level": 2,
      "title": "API",
      "slug": "api",
      "children": [
        {
          "level": 3,
          "title": "API Client",
          "slug": "api-client",
          "children": []
        },
        {
          "level": 3,
          "title": "配置",
          "slug": "配置",
          "children": []
        },
        {
          "level": 3,
          "title": "支付账户",
          "slug": "支付账户",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "请求示例",
      "slug": "请求示例",
      "children": [
        {
          "level": 3,
          "title": "Native 下单",
          "slug": "native-下单",
          "children": []
        },
        {
          "level": 3,
          "title": "查询订单(商户订单号)",
          "slug": "查询订单-商户订单号",
          "children": []
        },
        {
          "level": 3,
          "title": "查询订单(微信支付订单号)",
          "slug": "查询订单-微信支付订单号",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "6.x/pay/index.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 87863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/6.x/pay/index.html.vue?vue&type=template&id=41916527



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="微信支付" tabindex="-1"><a class="header-anchor" href="#微信支付" aria-hidden="true">#</a> 微信支付</h1><p>请仔细阅读并理解：<a href="https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pages/index.shtml" target="_blank" rel="noopener noreferrer">微信官方文档 - 微信支付`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><h2 id="实例化" tabindex="-1"><a class="header-anchor" href="#实例化" aria-hidden="true">#</a> 实例化</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Pay<span class="token punctuation">\\</span>Application</span><span class="token punctuation">;</span>

<span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;mch_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1360649000</span><span class="token punctuation">,</span>

    <span class="token string single-quoted-string">&#39;private_key&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant">__DIR__</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;/certs/apiclient_key.pem&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;certificate&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant">__DIR__</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;/certs/apiclient_cert.pem&#39;</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * 证书序列号，可通过命令从证书获取：
     * \`openssl x509 -in application_cert.pem -noout -serial\`
     */</span>
    <span class="token string single-quoted-string">&#39;certificate_serial_no&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;6F2BADBE1738B07EE45C6A85C5F86EE343CAABC3&#39;</span><span class="token punctuation">,</span>

    <span class="token string single-quoted-string">&#39;http&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;base_uri&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;https://api.mch.weixin.qq.com/&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// v2 API 秘钥</span>
    <span class="token comment">//&#39;secret_key&#39; =&gt; &#39;26db3e15cfedb44abfbb5fe94fxxxxx&#39;,</span>
    <span class="token comment">// v3</span>
    <span class="token string single-quoted-string">&#39;secret_key&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;43A03299A3C3FED3D8CE7B820Fxxxxx&#39;</span><span class="token punctuation">,</span>

<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><p>Application 就是一个工厂类，所有的模块都是从 <code>\$app</code> 中访问，并且几乎都提供了协议和 setter 可自定义修改。</p><h3 id="api-client" tabindex="-1"><a class="header-anchor" href="#api-client" aria-hidden="true">#</a> API Client</h3><p>封装了多种模式的 API 调用类，你可以选择自己喜欢的方式调用开放平台任意 API，默认自动处理了 access_token 相关的逻辑。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// v3</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getV2Client</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// v2</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>📖 更多说明请参阅：`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "/6.x/common/client.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`API 调用`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("API 调用")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>你可以轻松使用 <code>\$config-&gt;get(\$key, \$default)</code> 读取配置，或使用 <code>\$config-&gt;set(\$key, \$value)</code> 在调用前修改配置项。</p><h3 id="支付账户" tabindex="-1"><a class="header-anchor" href="#支付账户" aria-hidden="true">#</a> 支付账户</h3><p>支付账户类，提供一系列 API 获取支付的基本信息：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$account</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getMerchant</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$account</span><span class="token operator">-&gt;</span><span class="token function">getMerchantId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$account</span><span class="token operator">-&gt;</span><span class="token function">getPrivateKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$account</span><span class="token operator">-&gt;</span><span class="token function">getCertificate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$account</span><span class="token operator">-&gt;</span><span class="token function">getCertificateSerialNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$account</span><span class="token operator">-&gt;</span><span class="token function">getSecretKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="请求示例" tabindex="-1"><a class="header-anchor" href="#请求示例" aria-hidden="true">#</a> 请求示例</h2><h3 id="native-下单" tabindex="-1"><a class="header-anchor" href="#native-下单" aria-hidden="true">#</a> Native 下单</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code> <span class="token variable">\$data</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;mchid&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token keyword type-casting">string</span><span class="token punctuation">)</span><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getMerchant</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">getMerchantId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;out_trade_no&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;native20210720xxx&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;appid&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;wxe2fb06xxxxxxxxxx6&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;description&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Image形象店-深圳腾大-QQ公仔&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;notify_url&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;https://weixin.qq.com/&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;amount&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;total&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;currency&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;CNY&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;pay/transactions/native&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span> <span class="token string single-quoted-string">&#39;json&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">\$data</span> <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">print_r</span><span class="token punctuation">(</span><span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="查询订单-商户订单号" tabindex="-1"><a class="header-anchor" href="#查询订单-商户订单号" aria-hidden="true">#</a> 查询订单(商户订单号)</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
<span class="token variable">\$outTradeNo</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;native20210720xxx&#39;</span><span class="token punctuation">;</span>
<span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;pay/transactions/out-trade-no/<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">\$outTradeNo</span><span class="token punctuation">}</span></span>&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;query&#39;</span><span class="token operator">=&gt;</span><span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;mchid&#39;</span> <span class="token operator">=&gt;</span>  <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getMerchant</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">getMerchantId</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">print_r</span><span class="token punctuation">(</span><span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="查询订单-微信支付订单号" tabindex="-1"><a class="header-anchor" href="#查询订单-微信支付订单号" aria-hidden="true">#</a> 查询订单(微信支付订单号)</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
<span class="token variable">\$transactionId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;217752501201407033233368018&#39;</span><span class="token punctuation">;</span>
<span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;pay/transactions/id/<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">\$transactionId</span><span class="token punctuation">}</span></span>&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;query&#39;</span><span class="token operator">=&gt;</span><span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;mchid&#39;</span> <span class="token operator">=&gt;</span>  <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getMerchant</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">getMerchantId</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">print_r</span><span class="token punctuation">(</span><span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/6.x/pay/index.html.vue?vue&type=template&id=41916527

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/6.x/pay/index.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/6.x/pay/index.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const index_html = (script);

/***/ })

};
;
//# sourceMappingURL=6077.app.js.map