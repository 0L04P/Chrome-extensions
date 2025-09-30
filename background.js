chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) { 
  if (changeInfo.status == 'complete' && tab.active) {
	  	
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: SALVA,
    });
    
  }
});

function SALVA(){

	let suffisso = '_'+new Date().getDate() +'_'+new Date().getMonth()

	if(window.location.href.toString().includes('Login.aspx')){
		if(document.getElementsByClassName('WidthLoghiBandaBlu').length > 0){
			document.getElementsByClassName('WidthLoghiBandaBlu')[0].parentElement.parentElement.style.display = 'none';
		}		
	}
	
	if(window.location.href.toString().includes('TelefonateGestione_S.aspx')){
		document.getElementById('ctl00_body_lblMotivo').style.whiteSpace = "pre-wrap";				
	}
	
	if(window.location.href.toString().includes('InterventoLavoro_S.aspx')){
		 
		setTimeout(function(){
			let arr = [];
			if(localStorage['HR_TESTI' + suffisso] == undefined){
			   localStorage['HR_TESTI' + suffisso] = JSON.stringify(arr);		
			}else{
				arr = JSON.parse(localStorage['HR_TESTI'+ suffisso]);	
			}
			
			let testoEvasione = document.getElementById('ctl00_body_txtIntervento').value;
			arr.unshift(testoEvasione);
			 
			localStorage['HR_TESTI'+ suffisso] = JSON.stringify(arr);
			SALVA();			
		
		}, 10000); //ogni 10 secondi
	}
	
	if(window.location.href.toString().includes('TelefonateCentralino_S.aspx')){
		/*nuovo pezzo 30-09-2025 */		
		if(document.getElementById('ctl00_body_cbCatTel').value == '1'){
			if(confirm('Telefonata: impostare a Attività interna?')){
				document.getElementById('ctl00_body_cbCatTel').value = '2';
			}
			else
			{
				document.getElementById('ctl00_body_cbCatTel').background = '#123456';
			}
		} 
		
		//ID Telefonata = document.getElementById('ctl00_body_lblID').text.replace('ID:','').trim();
		document.getElementById('ctl00_body_txtIntervento').style.resize = "vertical";
		 
		setTimeout(function(){
			let arr = [];
			if(localStorage['HR_TESTI_TEL'+ suffisso] == undefined){
				localStorage['HR_TESTI_TEL'+ suffisso] = JSON.stringify(arr);		
			}else{
				arr = JSON.parse(localStorage['HR_TESTI_TEL'+ suffisso]);	
			}
			
			let testoEvasione = document.getElementById('ctl00_body_txtMotivo').value;
			arr.unshift(testoEvasione);
			localStorage['HR_TESTI_TEL'+ suffisso] = JSON.stringify(arr);	
			SALVA();
		
		}, 10000); //ogni 10 secondi
	}

	if(window.location.href.toString().includes('FormDialog/TelefonateAggiornamento_S.aspx')){
		 
		setTimeout(function(){
			let arr = [];
			if(localStorage['HR_TESTI_Aggiornamento'+ suffisso] == undefined){
				localStorage['HR_TESTI_Aggiornamento'+ suffisso] = JSON.stringify(arr);		
			}else{
				arr = JSON.parse(localStorage['HR_TESTI_Aggiornamento'+ suffisso]);	
			}
			
			let testoEvasione = document.getElementById('txtDescAppunto').value;
			arr.unshift(testoEvasione);
			 
			localStorage['HR_TESTI_Aggiornamento'+ suffisso] = JSON.stringify(arr);
			SALVA();			
		
		}, 10000); //ogni 10 secondi
	}
	
	if(window.location.href.toString().includes('cerInterventoEvasione_S.aspx')){
		console.log('Codice = ' + document.getElementById('ctl00_body_txtCodice').value);
	}
	
	if(window.location.href.toString().includes('StatisticheLavoro_B.aspx')){
		document.getElementById('ctl00_content_txtAnnoDa').value = "2024";
		document.getElementById('ctl00_content_txtAnnoA').value = "2024";
	}
	
	if(window.location.href.toString().includes('StatisticheLavoroStampi_B.aspx')){
		document.getElementById('ctl00_content_txtAnnoDa').value = "2024";
		document.getElementById('ctl00_content_txtAnnoA').value = "2024";
	}
	
	
	/*if (localStorage['MyExtension'] != undefined ){
		let arrMyExtension = JSON.parse(localStorage['MyExtension']);
		if(arrMyExtension.length > 0){
			
			arrMyExtension.forEach(function(e,i){
				if(window.location.href.toString().includes(e.PAGINA)){
					eval(e.JS);
				}
			})			
		}
		
	}else{
		console.log('MyExtension NON trovata!!!!!')
		
	}	*/	
	
	/*
	esempio --- attenzione a non usare JQuery!
	if(window.location.href.toString().includes('****aspx')){
		document.getElementById('*****').s******;
	}
	*/

}

function SalvaTesti_Lavori(){		
	if(window.location.href.toString().includes('InterventoLavoro_S.aspx')){
		console.log('SalvaTesti_Lavori')
		setTimeout(function(){
			let arr = [];
			if(localStorage['HR_TESTI'+ suffisso] == undefined){
				localStorage['HR_TESTI'+ suffisso] = JSON.stringify(arr);		
			}else{
				arr = JSON.parse(localStorage['HR_TESTI'+ suffisso]);	
			}
			
			let testoEvasione = document.getElementById('ctl00_body_txtIntervento').value;
			arr.push(testoEvasione);
			localStorage['HR_TESTI'+ suffisso] = JSON.stringify(arr);	
			SalvaTesti_Lavori();
		
		}, 10000); //ogni 10 secondi
	}	

	if(window.location.href.toString().includes('TelefonateCentralino_S.aspx')){
		console.log('SalvaTesti_Telefonate');
		setTimeout(function(){
			let arr = [];
			if(localStorage['HR_TESTI_TEL'+ suffisso] == undefined){
				localStorage['HR_TESTI_TEL'+ suffisso] = JSON.stringify(arr);		
			}else{
				arr = JSON.parse(localStorage['HR_TESTI_TEL'+ suffisso]);	
			}
			
			let testoEvasione = document.getElementById('ctl00_body_txtMotivo').value;
			arr.push(testoEvasione);
			localStorage['HR_TESTI_TEL'+ suffisso] = JSON.stringify(arr);	
			SalvaTesti_Telefonate();
		
		}, 10000); //ogni 10 secondi
	}	
}

function SalvaTesti_Telefonate(){
	
	if(window.location.href.toString().includes('TelefonateCentralino_S.aspx')){
		console.log('SalvaTesti_Telefonate');
		setTimeout(function(){
			let arr = [];
			if(localStorage['HR_TESTI_TEL'+ suffisso] == undefined){
				localStorage['HR_TESTI_TEL'+ suffisso] = JSON.stringify(arr);		
			}else{
				arr = JSON.parse(localStorage['HR_TESTI_TEL'+ suffisso]);	
			}
			
			let testoEvasione = document.getElementById('ctl00_body_txtMotivo').value;
			arr.push(testoEvasione);
			localStorage['HR_TESTI_TEL'+ suffisso] = JSON.stringify(arr);	
			SalvaTesti_Telefonate();
		
		}, 10000); //ogni 10 secondi
	}		
}
function getTesti(){	 
	return JSON.parse(localStorage['HR_TESTI'+ suffisso]);		 
}
function getTestiTel(){	 
	return JSON.parse(localStorage['HR_TESTI_TEL'+ suffisso]);		 
}



