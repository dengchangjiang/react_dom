function removeHTMLTag(str) {
  str = str.replace(/<\/?[^>]*>/g,''); //去除HTML tag
  str = str.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
  //str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
  str=str.replace(/ /ig,'');//去掉
  return str;
}
/**
 *
 * @param head
 * @param data
 * @param fileName
 * @param multipleFieldSplitChar
 */
export function ArrObg2CvsDown(head, data, fileName,multipleFieldSplitChar = '/') {

  let CSV = "";
  for (let i = 0; i < head.length; i++) {
    CSV += head[i].title + ',';
  }
  CSV = CSV.slice(0, -1) + '\r\n';
  for (let i = 0; i < data.length; i++) {
    let row = "";
    let rowData = data[i];
    for (let j = 0; j < head.length; j++) {
      let rowHead = head[j];
      if(rowHead.title && Array.isArray(rowHead.field)){
        row += '"';
        for (let f in rowHead.field) {
          let val = rowData[rowHead.field[f]] === null ? "" : rowData[rowHead.field[f]];
          row += val + multipleFieldSplitChar
        }
        row = row.slice(0, -1);
        row += '"\t,';
      }else {

        let val = rowData[rowHead.field] === null ? "" : rowData[rowHead.field];
        if(rowHead.isRichText){
          val = removeHTMLTag(val)
        }
        row += '"' + val + '"\t,';
      }
    }
    row.slice(0, row.length - 1);
    CSV += row + '\r\n';
  }
  if (CSV == "") {
    alert("Invalid data");
    return;
  }
  let uri = new Blob(['\ufeff' + CSV], {type:"text/csv"});
  if (window.navigator && window.navigator.msSaveOrOpenBlob) { // for IE
    window.navigator.msSaveOrOpenBlob(CSV, fileName + ".csv");
  } else { // for Non-IE（chrome、firefox etc.）
    let link = document.createElement("a");
    link.href = URL.createObjectURL(uri);
    link.style = "visibility:hidden";
    link.download = fileName + ".csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

