jQuery(document).ready(function(){
	jQuery('#data_frm').submit(function() {

			var name_value=jQuery('#name').val();
			var company_value=jQuery('#company').val();
			var email_value=jQuery('#email').val();
			var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			if(name_value=='')
			{
				jQuery('#name').addClass('border_cls');
				   return false;
			}
			if(company_value=='')
			{
				jQuery('#company').addClass('border_cls');
				   return false;
			}
			if(email_value=='')
			{
				jQuery('#email').addClass('border_cls');
				   return false;
			}
			else if(regex.test(email_value)==false)
			{
				jQuery('#email').addClass('border_cls');
				   return false;
			}
			
			
		});
		jQuery('#company').focus(function() {
			jQuery('#company').removeClass('border_cls');
			});
		jQuery('#name').focus(function() {
			jQuery('#name').removeClass('border_cls');
			});	
        jQuery('#email').focus(function() {
			jQuery('#email').removeClass('border_cls');
			});
	});