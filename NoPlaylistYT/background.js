 chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) { 
  if (changeInfo.status == 'complete' && tab.active) {
	  	
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: HidePlayListSuggestions,
    });
    
  }
});

function HidePlayListSuggestions(){	
	//29/12/2021
	let n = document.getElementsByClassName("ytp-ce-element").length;
	
	for (let i = 0; i<n; ++i){		
		document.getElementsByClassName("ytp-ce-element")[i].style.display = 'none';
		//document.getElementsByClassName("ytp-ce-element")[i].innerHTML = '';
	}
}
 

