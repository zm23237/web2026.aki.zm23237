var bangou610 = 1;
function tsugi610(){
    if(bangou610 < 4){
        bangou610 = bangou610 + 1;
    }
    document.getElementById('who610').innerHTML =
    '<img src="./image/image' + bangou610 + '.jpg" width="300" height="200" alt="画像' + bangou610 + '">';
}
function mae610(){
    if(bangou610 > 1){
        bangou610 = bangou610 - 1;
    }
    document.getElementById('who610').innerHTML =
    '<img src="./image/image' + bangou610 + '.jpg" width="300" height="200" alt="画像' + bangou610 + '">';
}
function reset610(){
    bangou610 = 1;
    document.getElementById('who610').innerHTML =
    '<img src="./image/image1.jpg" width="300" height="200" alt="画像1">';
}
