// tronlink payment system
const launch = async () => {

    // check balance since wallet doesn't do that
    //let balance = await tronWeb.trx.getBalance(tronWeb.defaultAddress.base58);
	
    //const account = await tronWeb.createAccount();
    //const isValid = tronWeb.isAddress(account.address.hex);
    if(window.tronWeb){

    window.tronWeb = tronWeb;	    

    const publicAddress = await tronWeb.defaultAddress.base58;
    
    $('#TronWalletAddress').attr("placeholder", publicAddress);
       
    const contract = await tronWeb.contract().at("TAybp4znbwJCnYbZiJFBGdo6V1maFAztWJ");

    //const abi = contract.abi;
    async function PurchaseCBD() {

        //Get
        const purchasetrx = $("#trxnum").val();
        
        console.log(purchasetrx);

        const purchasesun = tronWeb.toSun(purchasetrx);	    

        console.log(purchasesun);

	let result = await contract.createTokens(publicAddress).send({
	     feeLimit:1000000,
	     callValue:purchasesun,
	     shouldPollResponse:false
        }).then(function(){
	     console.log('success!');
	     $('#errormsg').css("color", "green");
	     $('#errormsg').text('Successfully Transferred');
	     // load success page`
		}).catch(err => master(err));
	        function master(error){
		     console.log(error.message);
		     $('#errormsg').text(error.message);
		}
    }	
    
	$("#purchase").click(function() {
	    $('#errormsg').text('Please wait up to 2-3 minutes for a response!');
	    PurchaseCBD();
	});


   }
};

$( document ).ready(function() {
   setTimeout(function() { launch(); }, 2000);
});
