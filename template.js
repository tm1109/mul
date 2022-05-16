//問題の表示の切り替え
function calcSwitch(){
	if ($('.btn').hasClass('answer')) {	//答えを表示する処理
		let calc1 = $('.num-random1').text();
		let calc2 = $('.num-random2').text();
		$('.num-answer').text(calc1*calc2);
		$('.btn').text('次の問題');
		$('.btn').addClass('next');
		$('.btn').removeClass('answer');
	}else{													 //次の問題を出題する処理
		let calc3 = Math.floor(Math.random()*8+2);
		let calc4 = Math.floor(Math.random()*8+2);
		$('.num-random1').text(calc3);
		$('.num-random2').text(calc4);
		$('.num-answer').text('?');
		$('.next').text('答え');
		$('.next').addClass('answer');
		$('.next').removeClass('next');
	}
}


$('.btn').click(function(){
	calcSwitch();
});

document.onkeydown = function(e){
	switch(e.keyCode){
		case 13: //Enterキー
			calcSwitch();
		break;
		case 32: //スペースキー
			calcSwitch();
		break;
		case 39: //右矢印キー
			calcSwitch();
		break;
	}
}




