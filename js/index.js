//banner
{
	let imgs=document.querySelectorAll(".imgbox li");
	let pagers=document.querySelectorAll(".pagerbox .banner_num");
	let banner=document.querySelector(".banner");
	let kuohao=document.querySelectorAll(".pagekuo");
	pagers.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
				kuohao[i].classList.remove("active");
			}
			this.classList.add("active");
			imgs[index].classList.add("active");
			kuohao[index].classList.add("active");
			n=index;
		}
	})
	var n=0;
	let t=setInterval(move,3000);
	function move(){
		n++;
		if(n===imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
 				pagers[i].classList.remove("active");
				kuohao[i].classList.remove("active");
 				imgs[i].classList.remove("active");
			}
			imgs[n].classList.add("active");
			kuohao[n].classList.add("active");
			pagers[n].classList.add("active");
	}
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	}
}

//案例
{
	const btn1=document.querySelector(".anli_jiantou");
	const btn2=document.querySelector(".anli_jiantou1");
	const inner=document.querySelector(".anli_inner");
	let n=0;//屏数
	btn2.onclick=function(){
		n++;
		btn1.classList.remove("disable");
		if(n===4){
			this.classList.add("disable");
		}
		if(n===5){
			n=4;
			return;
		}
		inner.style.marginLeft=-473*n+"px";
	}

	btn1.onclick=function(){
		n--;
		btn2.classList.remove("disable");
		if(n===0){
			this.classList.add("disable");
		}
		if(n===-1){
			n=0;
			return;
		}
		inner.style.marginLeft=-473*n+"px";
	}
}
