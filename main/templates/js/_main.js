$('#center div').on('click',function(){
      $('.reveal .visible').transition({animation: 'tada', duration: '2s', complete: function(){console.log('Animations are done')}}) 
      //$('.reveal .visible').transition('tada','2000ms').transition('pulse',600); 
    });