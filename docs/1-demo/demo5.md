---

title: tab 语言切换
hide_table_of_contents: true

---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


**测试 tab  demo1  console**

<div className="api-code-console">
<Tabs>
  <TabItem value="apple" label="Java" default>

```json title=参数请求
    {
         "code":"00000",
         "data":{
            "symbol":"BTCUSDT",
            "index":"35000",
            "ts":"1627291836179"
         },
         "msg":"success",
         "requestTime":1627291836179
     }
```
```json title="响应示例"
{
     "code":"00000",
     "data":{
        "symbol":"BTCUSDT",
        "index":"35000",
        "ts":"1627291836179"
     },
     "msg":"success",
     "requestTime":1627291836179
 }
```

  </TabItem>
  <TabItem value="orange" label="CURL">
    123
  </TabItem>
  <TabItem value="banana" label="Python">
    232
  </TabItem>
</Tabs>
</div>


**测试 tab  demo2  inline**

<div className="">
<Tabs>
  <TabItem value="apple" label="Apple" default>

```json title=参数请求
    {
         "code":"00000",
         "data":{
            "symbol":"BTCUSDT",
            "index":"35000",
            "ts":"1627291836179"
         },
         "msg":"success",
         "requestTime":1627291836179
     }
```
```json title="响应示例"
{
     "code":"00000",
     "data":{
        "symbol":"BTCUSDT",
        "index":"35000",
        "ts":"1627291836179"
     },
     "msg":"success",
     "requestTime":1627291836179
 }
```

  </TabItem>
  <TabItem value="orange" label="Orange">
    123
  </TabItem>
  <TabItem value="banana" label="Banana">
    232
  </TabItem>
</Tabs>
</div>

