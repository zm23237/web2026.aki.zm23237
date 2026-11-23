var bangou612 = 1;
function tsugi612(){
    if(bangou612 < 4){
        bangou612 = bangou612 + 1;
    }
    document.getElementById('who612').innerHTML =
    '<img src="./image/image' + bangou612 + '.jpg" width="300" height="200" alt="画像' + bangou612 + '">';
}
function mae612(){
    if(bangou612 > 1){
        bangou612 = bangou612 - 1;
    }
    document.getElementById('who612').innerHTML =
    '<img src="./image/image' + bangou612 + '.jpg" width="300" height="200" alt="画像' + bangou612 + '">';
}
function reset612(){
    bangou612 = 1;
    document.getElementById('who612').innerHTML =
    '<img src="./image/image1.jpg" width="300" height="200" alt="画像1">';
}
