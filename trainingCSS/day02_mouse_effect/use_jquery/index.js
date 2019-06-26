//사각형 너비 등분하고, 일정 범위 도달시 이벤트 부여.

$('.text-wrap').mousemove((e)=>{
    const wrapWidth = $('.text-wrap').width();
    const step = wrapWidth /5;
    const nowX = e.pageX-$('.text-wrap').offset().left;
    
    $('.dot').css('left', e.pageX);  //x축이동
    $('.dot').css('top', e.pageY);   //Y축이동

    if(nowX < step){
      $('.text-wrap').attr('class','step-1 text-wrap');
    } else if(nowX < step*2){
      $('.text-wrap').attr('class','step-2 text-wrap');
    } else if(nowX < step*3){
      $('.text-wrap').attr('class','step-3 text-wrap');
    } else if(nowX < step*4){
      $('.text-wrap').attr('class','step-4 text-wrap');
    } else if(nowX < step*5){
      $('.text-wrap').attr('class','step-5 text-wrap');
    }  
  })