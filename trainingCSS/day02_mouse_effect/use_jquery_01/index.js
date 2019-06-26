//사각형 너비 등분하고, 일정 범위 도달시 이벤트 부여.

$('.text-wrap').mousemove((e)=>{
    
    $('.dot').css('left', e.pageX);  //x축이동
    $('.dot').css('top', e.pageY);   //Y축이동

  })