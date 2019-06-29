(function($) {
    var indexHeader;
    const ElArr = $.getElementsByTagName('div')
    for (var i = 0; i < ElArr.length; i++) {
        console.log(ElArr[i].className.includes('Logo__'))
        if (ElArr[i].className.includes('Logo__Wrapper')) {
            indexHeader = $.getElementsByTagName('div')[i];
            break;
        }
    }
    console.log(indexHeader);
}(document))