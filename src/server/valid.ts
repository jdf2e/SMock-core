export function validParam(params: any, data:any) {
    let result = '';
    let errorRequired = validRequired(params, data);
    let errorType = validType(params, data);
    if(errorRequired.length > 0) {
        result += `【${errorRequired.join('、')}】必须传入`;
    }
    if (errorType.length > 0) {
        result += `
            【${errorType.join('、')}】传入类型错误
            `;
    }
    return result;
}
//校验必填
function validRequired(inParams: any, data: any) {
    let error:any = [];
    if(!data.params) return error;
    for(let idx = 0; idx < data.params.length; idx++) {
        let item = data.params[idx];
        if(item.required && !inParams[item.value]) {
            //检查传参中是不是存在必填项
            error.push(item.value);
        }
    }
    return error;
}

//校验入参格式
function validType(inParams: any, data: any) {
    let error:any = [];
    if(!data.params) return error;
    for (let prop in inParams) {
        let param = getParamByName(prop, data.params);
        if(!param) return error;
        if( typeof inParams[prop] != param.type) {
            error.push(param.value);
        }
    }
    return error;
}

//获取对应参数的值
function getParamByName(key: string, params: any) {
    let result:any = null;
    for(let idx = 0; idx < params.length; idx++) {
        let param = params[idx];
        if(key === param.value) {
            result = param;
        }
    }
    return result;
}