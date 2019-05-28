(function(){
	var cellArray = document.querySelectorAll(".content__cell--small"),
	    containerBlock = document.getElementById('container--smaller'),
	    btnLoadMore = document.getElementById("load-more"),
	    currentIndex = 6,
	    addCellNumber = 0,
	    cellBlock = '<div class="content__cell--small">'+
						'<div class="cell__small-img"></div>'+
						'<p class="content__cell-description dec_small"></p>'+
						'<h2 class="content__cell-title title_small"></h2>'+
						'<p class="content__cell-text text-small"></p>'+
					'</div>';

	var fillCell = function(n){
		var cellArray = document.querySelectorAll(".content__cell--small"),
			cellImg = document.querySelectorAll(".cell__small-img"),
			cellDesc = document.querySelectorAll(".dec_small"),
			cellTitle = document.querySelectorAll(".title_small"),
			cellText = document.querySelectorAll(".text-small"),
			currentIndex = n;

			for(var i = 0; i < cellArray.length; i++){
				cellImg[i].style.backgroundImage = 'url("'+cells[i].img+'")';
				cellDesc[i].innerHTML = cells[i].desc;
				cellText[i].innerHTML = cells[i].text;
				cellTitle[i].innerHTML = cells[i].title;
			}
			if (currentIndex == cells.length){
				btnLoadMore.parentNode.removeChild(btnLoadMore);
			}
		}
		console.log(cellArray.length);

	var addMoreCells = function(){
		var finalCellBlock = "";
		if (currentIndex < cells.length){
			if(addCellNumber < (cells.length - currentIndex)){
				addCellNumber = 4;
			}else {
				addCellNumber = cells.length - currentIndex;
			}
		
			for(var i = 0; i < addCellNumber; i++){
				finalCellBlock = finalCellBlock + cellBlock;
			}
			finalCellBlock = finalCellBlock;
			containerBlock.insertAdjacentHTML("beforeEnd",finalCellBlock);
			currentIndex = currentIndex + addCellNumber;
			fillCell(currentIndex);
		}
	}
	fillCell(0);
	btnLoadMore.addEventListener("click", addMoreCells);
})();