function problem5(yearList)
{
    let OlderThanyear2000 =[];
        for (i=0; i<yearList.length; i++)
        {
    
        if (olderThanyearList[i]<2000){
            OlderThanyear2000.push(yearList[i])
        }
    }
    return OlderThanyear2000
}

module.exports={problem5}