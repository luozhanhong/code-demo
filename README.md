```sequence
Title:下单支付
App->Oder: 预下单
App->Oder: 下单
Order->Pay: getPay获取支付信息
 ```
