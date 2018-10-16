         $(document).ready(function() {

         	$('#calendar').fullCalendar({
         		header: {
         			left: '',

         			right: ''
         		},

         		editable: false,
         		defaultView: 'listYear',
         		eventLimit: true, // allow "more" link when too many events
             events: {
               googleCalendarApiKey: 'AIzaSyAgYUPBltxTMPACHXqVdV3-1be9LAJP1n0',
               googleCalendarId: 'uvacss@gmail.com',
               textColor:"black"

             },
           eventClick: function(event) {

             alert('Event: ' + event.title + '\nDescription: ' + event.description);
             return false;

             // change the border color just for fun
             $(this).css('border-color', 'red');

          },


         eventMouseover: function(calEvent, jsEvent) {
            var tooltip = '<div class="tooltipevent" style="width:200px;height:100px;background:#ccc;position:absolute;z-index:10001;">' + calEvent.description + '</div>';
            $("body").append(tooltip);
            $(this).mouseover(function(e) {
                $(this).css('z-index', 10000);
                $('.tooltipevent').fadeIn('500');
                $('.tooltipevent').fadeTo('10', 1.9);
            }).mousemove(function(e) {
                $('.tooltipevent').css('top', e.pageY + 10);
                $('.tooltipevent').css('left', e.pageX + 20);
            });
         },

         eventMouseout: function(calEvent, jsEvent) {
             $(this).css('z-index', 8);
             $('.tooltipevent').remove();
         },



         	});

         });

