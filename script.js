(longcat => {
	var cat = document.querySelector(".longcat"),
		catHeight = cat.offsetHeight,
		achievBanner = document.querySelector(".achiev-banner"),
		achievName = document.querySelector(".achiev-name span"),
		achievReq = document.querySelector(".achiev-req"),
		achievEarnClass = "achiev-earned",
		lengthCt = document.querySelector(".count"),
		barrier = document.querySelector('.barrier'),
		numberF = new Intl.NumberFormat("en-US"),
		achievements = [
			{name: "Kéo nữa đi", pts: 1000},
			{name: "Nữa đi, muốn biết thì phải kéoooo", pts: 1500},
			{name: "Hmmmm 😇", pts: 2000},
			{name: "Sao bạn vẫn ở đây 🙂", pts: 2500},
			{name: "Bạn muốn biết chia tay lắm à 🙂", pts: 3000},
			{name: "Sao vẫn kéooooooooooo", pts: 3500},
			{name: "Bạn được đó, vẫn cố cơ à ? 😼", pts: 4000},
			{name: "Đừng có mơ mà mình chia tay 👉🏼👈🏼", pts: 4500},
			{name: "A ju 3 nham ✊🏼👊🏼✊🏼👊🏼", pts: 5000},
			{name: "Dun keo nua, a ju e hoq chia tay dau", pts: 5500},
			{name: "= ))) Rảnh thì cứ kéo đi, hoq còn gì đâu hơ hơ ", pts: 6000},
		],
		observerOptions = {
			root: null,
			rootMargin: "0px",
			threshold: 1.0
		},
		observer = new IntersectionObserver((entries,observer) => { 
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					// increase cat length
					let catGrowAmount = entry.boundingClientRect.height;
					catHeight += catGrowAmount;
					lengthCt.innerHTML = catHeight;
					cat.style.height = catHeight + "px";
					// check if achievement reached
					for (let a of achievements) {
						if (catHeight >= a.pts && catHeight <= a.pts + catGrowAmount) {
							achievBanner.classList.add(achievEarnClass);
							setTimeout(() => {
								achievBanner.classList.remove(achievEarnClass);
							},3000);
							achievName.innerHTML = a.name;
							achievReq.innerHTML = "Được " + numberF.format(a.pts) + "px rồi cơ đấy";
						}
					}
					window.scrollBy({
						top: -catGrowAmount,
						left: 0
					});
				}
			});
		}, observerOptions);
	
	observer.observe(barrier);
	// initial height
	lengthCt.innerHTML = catHeight;
})();