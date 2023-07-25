/*
 * @Author: ccaiyf 496357312@qq.com
 * @Date: 2023-07-17 15:18:55
 * @LastEditors: ccaiyf 496357312@qq.com
 * @LastEditTime: 2023-07-17 16:22:13
 * @FilePath: \htmlProject\study\2.js
 * @Description: QQ:496357312
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */


//函数

//1 callee，作用是返回正被执行的 Function 对象，也就是所指定的 Function 对象的正文
function factorial(num){//阶乘
    if(num<=1){
        return 1;
    }else{
        return num*arguments.callee(num-1);
    }
}
//arguments是一个类数组对象，包含着传入函数中的所有参数

function sum(a) {//最严格的写法
    if (isArrayLike(a)){
        var total = 0;
        for (var i = 0; i < a.length; i++) {
            var element = a[i];
            if (element == null) continue;
            if (isFinite(element)) total += element;
            else throw new Error("sum(): elements must be finite numbers");
        }
        return total;
    }
    else throw new Error("sum():argument must be array-like");
}
