/*****************************************************************************************
 * Function Version: 1.0
 * Function Name: CheckSensitiveWords
 * Function Description: 用于检查一段文本中的敏感词
 * Function Arguments:
 *          @regexpress[string]:在后端拿到的正则表达式
 *          @text[string]:要检测的文本
 * Function Return:
 *          Type: object
 *                 {
 *                   IsSensitive[boolean]: true(代表有敏感词汇)|false(代表没有敏感词汇)
 *                   SenditiveText[string]: 代表敏感文件的文本,只有当IsSensitive为true时才有效
 *                 }  
 *                     
 * Function Editor:yuansudong
 * Code     Date: 2019/06/11         
 *****************************************************************************************/
function CheckSensitiveWords(regexpress,text) {
    var reg = new RegExp(String(regexpress),"g")
    console.log(reg,reg.input)
    var ret = {
        IsSensitive:reg.test(text),
        SenditiveText:"",
    }
    if (ret.IsSensitive) {
        // 如果进来就代表着,包含着敏感词汇
      ret.SenditiveText = text.replace(reg,'<span style="color:red">$1</span>')        
      console.log(text)   
    }
    return ret
}
/*****************************************************************************************
 * Function Version: 1.0
 * Function Name: ReplaceHtmlTagFromText 
 * Function Description: 用于替换文本中的html标签
 * Function Arguments:
 *          @replaceText[string]:在后端拿到的正则表达式
 * Function Return:
 *          Type:string 
 *               返回被替换的文本      
 * Function Editor:yuansudong
 * Code     Date: 2019/06/11  
 ******************************************************************************************/
function ReplaceHtmlTagFromText(replaceText){
    var reg = new RegExp("<[^>]+>","g")
    return replaceText.replace(reg,'')        
}


/*****************************************************************************************
 * Function Version: 1.0
 * Function Name: GetWordsRexp 
 * Function Description: 获取敏感词的正则表达式
 * Function Arguments:
 *          @words[string]:敏感词
 * Function Return:
 *          Type:string 
 *               返回敏感词的正则表达式      
 * Function Editor:yuansudong
 * Code     Date: 2019/06/11  
 ******************************************************************************************/
function GetWordsRexp(words) {
    var arr =  words.split(" ")
    var newArr =  new Array()
    // 过滤掉空格
    for (var index = 0; index < arr.length; index++) {
        var element = arr[index];
        if (element != "") {
            newArr.push(element)
        }
    }
    var str = "\\b("
    str += newArr.join("[\\s]") 
    str +=")\\b"
    return str
}
