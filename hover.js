 <!DOCTYPE html>
 <html>
<body>
 <script>
  $(document).ready(function(){
    $('.hover').hover(function(){
      $(this).addClass('flip');
    },function(){
      $(this).removeClass('flip');
    });
  });
  </script>
  </body>
  </html>