 chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) { 
  if (changeInfo.status == 'complete' && tab.active) {
	  	
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: SalvaTesti,
    });
    
  }
});

function SalvaTesti(){
	if(window.location.href.toString().includes('InterventoLavoro_S.aspx')){
		setTimeout(function(){
			let arr = [];
			if(sessionStorage['HR_TESTI'] == undefined){
				sessionStorage['HR_TESTI'] = JSON.stringify(arr);		
			}else{
				arr = JSON.parse(sessionStorage['HR_TESTI']);	
			}
			
			let testoEvasione = document.getElementById('ctl00_body_txtIntervento').value;
			arr.push(testoEvasione);
			sessionStorage['HR_TESTI'] = JSON.stringify(arr);	
			SalvaTesti();
		
		}, 10000); //ogni 10 secondi
	}		
}
 
function getTesti(){	 
	return JSON.parse(sessionStorage['HR_TESTI']);		 
}



