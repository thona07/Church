/**
 *	PROJECT			:		Church
 *	Developer		:		Glean Team
 *	Date			:		26-February-2015
 */
 
$( function() {
	var Church = {
		init: function() {
			this.toggleMenu();
		},
		
		toggleMenu: function() {
			$('nav .menu').click( function() {
				$('nav ul').slideToggle( 200 );
			});
		}
	}
	
	$( document ).ready( function() {
		Church.init();
	});
});