alert("逼逼，勇者阿，歡迎回到城堡，請輸入密碼以驗證你剛剛有沒有認真冒險八ㄎㄎ")
function password(ans)
{
    for(var i=1;i>0;i--)
    {
        event.preventDefault();
        if(ans=="左右左")
        {
            alert("恭喜通關")
            i=0;
        }
        else
        {
            alert("逼逼，答錯了呦(笑，看來你需要再好好的回想一遍呢(茶\n"+"『不會吧』崩潰的勇者感到了一股來自東方的神祕力量，一陣暈眩感襲來，勇者發現他又回到了原點")
            location.href="1.html";
        }
    }
}