function getStore(e){return localStorage.getItem(e)}
function nextStep(){
	if(inputAmount*sendUsd<minAmount)document.getElementById("error").style.display="block",document.getElementById("error").innerHTML="Min amount for exchange is "+minAmount+"$";
	else if(inputAmount*sendUsd>maxAmount)document.getElementById("error").style.display="block",document.getElementById("error").innerHTML="Max amount for exchange is "+maxAmount+"$";
	else{
		console.log("next step"),
		!document.getElementById("walletAddress").value.replaceAll(" ","")||!document.getElementById("email").value.replaceAll(" ","")?
		(document.getElementById("walletAddress").value.replaceAll(" ","")?
		displayError("errorEmail"):
		displayError("errorWallet"),document.getElementById("email").value.replaceAll(" ","")?
		displayError("errorWallet"):displayError("errorEmail")):validateEmail()?
		validateWallet()?
		(
			saveUserData(),
			createCookie("sendUsd",inputAmount*sendUsd,1),
			createCookie("pair",localStorage.getItem("sendCoinName")+"-"+localStorage.getItem("receiveCoinName")),
			createCookie("mail",localStorage.getItem("email")),
			createCookie("wallet",localStorage.getItem("wallet")),
			createCookie("receiveAmount",document.getElementById("receiveInput").value),
			createCookie("inputAmount",document.getElementById("inputAmount").value),
			createCookie("sendCoinName",localStorage.getItem("sendCoinName")),
			createCookie("receiveCoinName",localStorage.getItem("receiveCoinName")),
			createCookie("transactionId",localStorage.getItem("transactionId")),
			createCookie("usedPromo",localStorage.getItem("usedPromo")),
			document.getElementById('form-data').submit()
		):
		displayError("errorWallet"):
		displayError("errorEmail")
	}
}
	function displayError(e){document.getElementById(e).style.display="block"}
	function typing(e){document.getElementById(e).style.display="none"}function validateEmail(e=""){e=document.getElementById("email").value.replaceAll(" ","");return/\S+@\S+\.\S+/.test(e)}function validateWallet(e=""){e=document.getElementById("walletAddress").value.replaceAll(" ","");var t=getRegex();return null==t||t.test(e)}function getRegex(){coinReceive.toUpperCase();return null}function saveUserData(){var e=new Date;e.setMinutes(e.getMinutes()+30);var t=generateTransactionId(10);localStorage.setItem("email",document.getElementById("email").value.replaceAll(" ","")),localStorage.setItem("wallet",document.getElementById("walletAddress").value.replaceAll(" ","")),localStorage.setItem("creationTime",e),localStorage.setItem("transactionId",t)}function generateTransactionId(e){for(var t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",l=a.length,o=0;o<e;o++)t+=a.charAt(Math.floor(Math.random()*l));return t}function createCookie(e,t,a){var l;if(a){var o=new Date;o.setTime(o.getTime()+24*a*60*60*1e3),l="; expires="+o.toGMTString()}else l="";document.cookie=escape(e)+"="+escape(t)+l+"; path=/"}