---
title: 右侧代码块 重叠问题
hide_table_of_contents: true

---

```bash title=api-br使用

# * = 1-100 用于实现多个换行符 h5 下会收起
class = api-br-*  

# * = 1-100 用于实现多个换行符 h5 下不会收起
class = api-inline-br-*  


# <div class='api-br'><br/><br/></div>
# 手动填充 br h5下会收起

class = api-br  
```
<div class="api-inline-br-30"></div>


**HTTP请求**

- GET /api/v2/mix/market/orderbook


```bash title=请求示例
/api/v2/mix/market/orderbook?symbol=BTCUSDT&productType=umcbl
```

**右侧代码块重叠问题**

**右侧代码块重叠问题**

**右侧代码块重叠问题**


```json title=返回示例
{
    "code": "00000",
    "data": {
        "asks": [
            [ "30002","0.2300000"]
        ],
        "bids": [
            [ "29987", "0.28" ]
        ]
    },
    "msg": "success",
    "requestTime": "1627115809358"
}
```

**右侧代码块重叠问题**

**右侧代码块重叠问题**

**右侧代码块重叠问题**


```json title=返回示例
{
    "code": "00000",
    "data": {
        "asks": [
            [ "30002","0.230000"]
        ],
        "bids": [
            [ "29987", "0.28" ]
        ]
    },
    "msg": "success",
    "requestTime": "1627115809358"
}
```

**如何解决 右侧代码块重叠问题**

**class=api-br-30**

**如何解决 右侧代码块重叠问题**

<div class="api-br-30"></div>

```json title=返回示例
{
    "code": "00000",
    "data": {
        "asks": [
            [ "30002","0.230000"]
        ],
        "bids": [
            [ "29987", "0.28" ]
        ]
    },
    "msg": "success",
    "requestTime": "1627115809358"
}
```

**如何解决 右侧代码块重叠问题**

**class=api-br-30**

**如何解决 右侧代码块重叠问题**

<div class="api-br"><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>


```json title=返回示例
{
    "code": "00000",
    "data": {
        "asks": [
            [ "30002","0.2300000"]
        ],
        "bids": [
            [ "29987", "0.28" ]
        ]
    },
    "msg": "success",
    "requestTime": "1627115809358"
}
```

**如何解决 右侧代码块重叠问题**

<div class="api-br-30"></div>

**追加 class="api-br-30" 解决底部塌陷**








