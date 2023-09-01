---
hide_table_of_contents: true
---


# 深度行情接口





限速规则: 20次/1s (IP)


**HTTP请求**

- GET /api/v2/mix/market/orderbook


```bash title=请求示例
/api/v2/mix/market/orderbook?symbol=BTCUSDT&productType=umcbl
```

**请求参数**

| 参数名 | 参数类型 | 是否必须 | 描述 | 
| ---- | ---- | ---- | ---- |
| symbol | String | 是 | 交易币对，BTCUSDT |
| productType | String | 是 | 产品类型<br/>umcbl USDT专业合约<br/>dmcbl 混合合约<br/>cmcbl USDC专业合约<br/>sumcbl USDT专业合约模拟盘<br/>sdmcbl 混合合约模拟盘<br/>scmcbl USDC专业合约模拟盘 |
| limit | String | 否 | 深度档位 100，5 15 50 100<br/>默认100 |


```json title=返回示例
{
    "code": "00000",
    "data": {
        "asks": [
            [
                "30002",
                "0.2300000000000000"
            ],
            [
                "30002.5",
                "0.91"
            ],
            [
                "30003",
                "0.18"
            ]
        ],
        "bids": [
            [
                "29987",
                "0.28"
            ],
            [
                "300",
                "0.3333000000000000"
            ]
        ],
        "ts": "1627115809358"
    },
    "msg": "success",
    "requestTime": "1627115809358"
}
```

<div class="api-br"><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>

```json title=返回示例
{
    "code": "00000",
    "data": {
        "asks": [
            [
                "30002",
                "0.2300000000000000"
            ],
            [
                "30002.5",
                "0.91"
            ],
            [
                "30003",
                "0.18"
            ]
        ],
        "bids": [
            [
                "29987",
                "0.28"
            ],
            [
                "300",
                "0.3333000000000000"
            ]
        ],
        "ts": "1627115809358"
    },
    "msg": "success",
    "requestTime": "1627115809358"
}
```

**返回参数**

| 返回字段 | 参数类型 | 字段说明 | 
| ---- | ---- | ---- |
| 参数名称 | 参数类型 | 参数说明 |
| >requestTime | String | 请求时间 |
| >> symbol | String | 币对名称 如：BTCUSDT |
| >> last | String | 最新成交价 |
| >> askPr | String | 卖一价 |
| >> bidPr | String | 买一价 |
| >> bidSz | String | 买一量 |
| >> askSz | String | 卖一量 |
| >> high24h | String | 24小时最高价 |
| >> low24h | String | 24小时最低价 |
| >> ts | String | 当前数据时间戳 Unix时间戳的毫秒数格式，如 1597026383085 |
| >> priceChangePercent | String | 24小时涨跌幅 |
| >> baseVolume | String | 交易币交易量 |
| >> quoteVolume | String | 计价币交易额 |
| >> usdtVolume | String | usdt成交量   |
| >> openUtc | String | UTC0 开盘价 |
| >> chgUtc | String | UTC0 24小时涨跌幅 |
| >> indexPrice | String | 指数价格 |
| >> fundingRate | String | 资金费率 |
| >> holdingAmount | String | 当前持仓, 单位是交易币数量 |
| >> open24h | String | 开盘价 24小时<br/>开盘时间为24小时相对比，即：现在为2号19点，那么开盘时间对应为1号19点 |




















