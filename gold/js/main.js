// this validates the form to make sure it's filled out correctly
$('#home').on('pageinit', function(){
	var addform = $('#addtobag');
	addform.validate();
});	
		
// this saves data to local storage from the form
$('#additem').on('pageinit', function(){

		var myForm = $('#addtobag');
		    myForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data);
		}
	});
	
	//any other code needed for addItem page goes here

});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function(data){
	
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};


