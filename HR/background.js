chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) { 
  if (changeInfo.status == 'complete' && tab.active) {
	  	
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: SALVA,
    });
    
  }
});

function SALVA(){	
	if(window.location.href.toString().includes('TelefonateGestione_S.aspx')){
		document.getElementById('ctl00_body_lblMotivo').style.whiteSpace = "pre-wrap";
	}
	
	if(window.location.href.toString().includes('InterventoLavoro_S.aspx')){
		console.log('SalvaTesti_Lavori')
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
			SalvaTesti_Lavori();
		
		}, 10000); //ogni 10 secondi
	}
	
	if(window.location.href.toString().includes('TelefonateCentralino_S.aspx')){
		console.log('SalvaTesti_Telefonate');
		setTimeout(function(){
			let arr = [];
			if(sessionStorage['HR_TESTI_TEL'] == undefined){
				sessionStorage['HR_TESTI_TEL'] = JSON.stringify(arr);		
			}else{
				arr = JSON.parse(sessionStorage['HR_TESTI_TEL']);	
			}
			
			let testoEvasione = document.getElementById('ctl00_body_txtMotivo').value;
			arr.push(testoEvasione);
			sessionStorage['HR_TESTI_TEL'] = JSON.stringify(arr);	
			SalvaTesti_Telefonate();
		
		}, 10000); //ogni 10 secondi
	}	
}

function SalvaTesti_Lavori(){		
	if(window.location.href.toString().includes('InterventoLavoro_S.aspx')){
		console.log('SalvaTesti_Lavori')
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
			SalvaTesti_Lavori();
		
		}, 10000); //ogni 10 secondi
	}	

	if(window.location.href.toString().includes('TelefonateCentralino_S.aspx')){
		console.log('SalvaTesti_Telefonate');
		setTimeout(function(){
			let arr = [];
			if(sessionStorage['HR_TESTI_TEL'] == undefined){
				sessionStorage['HR_TESTI_TEL'] = JSON.stringify(arr);		
			}else{
				arr = JSON.parse(sessionStorage['HR_TESTI_TEL']);	
			}
			
			let testoEvasione = document.getElementById('ctl00_body_txtMotivo').value;
			arr.push(testoEvasione);
			sessionStorage['HR_TESTI_TEL'] = JSON.stringify(arr);	
			SalvaTesti_Telefonate();
		
		}, 10000); //ogni 10 secondi
	}	
}

function SalvaTesti_Telefonate(){
	
	if(window.location.href.toString().includes('TelefonateCentralino_S.aspx')){
		console.log('SalvaTesti_Telefonate');
		setTimeout(function(){
			let arr = [];
			if(sessionStorage['HR_TESTI_TEL'] == undefined){
				sessionStorage['HR_TESTI_TEL'] = JSON.stringify(arr);		
			}else{
				arr = JSON.parse(sessionStorage['HR_TESTI_TEL']);	
			}
			
			let testoEvasione = document.getElementById('ctl00_body_txtMotivo').value;
			arr.push(testoEvasione);
			sessionStorage['HR_TESTI_TEL'] = JSON.stringify(arr);	
			SalvaTesti_Telefonate();
		
		}, 10000); //ogni 10 secondi
	}		
}
function getTesti(){	 
	return JSON.parse(sessionStorage['HR_TESTI']);		 
}
function getTestiTel(){	 
	return JSON.parse(sessionStorage['HR_TESTI_TEL']);		 
}
