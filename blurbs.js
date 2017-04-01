/******************************************************
*  Blurbs Framework								
*  Writer : Rubi Jihantoro							
*  													
*  kutemukan.com/profile/ruby						
******************************************************/

/*****************************************************
*  Blurbs Framework
*  Writer : Rubi Jihantoro
*
*  #Couple
******************************************************/

!function () {

  "use strict";

  var Blurbs_couple = function (el, op) {
  	this.play('blurbs_couple', el, op)
  }

  Blurbs_couple.prototype = 
  {

  	constructor: Blurbs_couple

  	, play: function (type, el, op) {
        this.type = type
        this.$el = $(el)
        this.op = this.getOptions(op)
        this.enabled = true


        $("[couple-id]").each(function (){
          
          var id     = $(this).attr("couple-id")
          ,   source = $("[couple-id='"+id+"'] > ul").attr("couple-data");

                    $(this).on({

                        click: function(){
                            $("[couple-data='"+source+"']").addClass('visible').slideDown('slow');
                        }, 
                        mouseleave: function(){

                          $($("[couple-data='"+source+"']")).on({

                              mouseleave: function(){
                                
                                $("[couple-data='"+source+"']").removeClass('visible').slideUp('slow');

                              }

                          });

                        }

                    });

        });

  	  }
    , getOptions: function (op) {
      op = $.extend({}, $.fn[this.type].defaults, op, this.$el.data())

      return op
    }

  }

$.fn.blurbs_couple = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('blurbs_couple')
        , op = typeof option == 'object' && option

      if (!data) $this.data('blurbs_couple', (data = new Blurbs_couple(this, op)))
      if (typeof option == 'string') data[option]()
    })
}

  $.fn.blurbs_couple.Constructor = Blurbs_couple

 $.fn.blurbs_couple.defaults = {
    type: "image",
    acton : "hover",
    identity: ""
  }


}(window.jQuery);

/*****************************************************
*  Blurbs Framework
*  Writer : Rubi Jihantoro
*
*  #Background
******************************************************/

!function () {

  "use strict";

  var Blurbs_background = function (el, op) {
    this.play('blurbs_background', el, op)
  }

  Blurbs_background.prototype = 
  {

    constructor: Blurbs_background

    , play: function (type, el, op) {
        this.type = type
        this.$el = $(el)
        this.op = this.getOptions(op)

        $("[bg-id]").each(function (){
          
          var source = $(this).attr("bg-source")
          ,   repeat = $(this).attr("bg-repeat")
          ,   size   = $(this).attr("bg-size");
          $(this).css({"background": "url('"+source+"')", "background-size": ""+ size +"", "background-repeat": ""+repeat+""});

        });

      }
    , getOptions: function (op) {
      op = $.extend({}, $.fn[this.type].defaults, op, this.$el.data())

      return op
    }

  }

$.fn.blurbs_background = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('blurbs_background')
        , op = typeof option == 'object' && option

      if (!data) $this.data('blurbs_background', (data = new Blurbs_background(this, op)))
      if (typeof option == 'string') data[option]()

    })
}

  $.fn.blurbs_background.Constructor = Blurbs_background

 $.fn.blurbs_background.defaults = {
    type : "image"
  }


}(window.jQuery);

/*****************************************************
*  Blurbs Framework
*  Writer : Rubi Jihantoro
*
*  #Hotahomba
******************************************************/

!function () {

  "use strict";

  var Blurbs_hotahomba = function (el, op) {
    this.play('blurbs_hotahomba', el, op)
  }

  Blurbs_hotahomba.prototype = 
  {

    constructor: Blurbs_hotahomba

    , play: function (type, el, op) {
        this.type = type
        this.$el = $(el)
        this.op = this.getOptions(op)

        $("[homba-id]").each(function (){
          
          var source = $(this).attr("homba-id")
          ,   ayam   = $("[homba-id='"+source+"'")

          $("[homba-show='"+source+"'").text(ayam.val());

          $(this).keyup(function () {
            $("[homba-show='"+source+"'").text(ayam.val());
            $("[show]").each(function (){
              
              var src  = $(this).attr("show")
              , srct      = $('[homba-id="'+src+'"]').attr("homba-id")
              , srcs      = $("[show='"+src+"']")
              , pid       = src.replace(/!/i,'')
              , srcw      = $("input[homba-id='"+pid+"']");
              
                if(src.search('!') == 0 && !srcw.val() || src.search('!') < 0 && srcw.val()) //mau tampil pas kosong
              {
                $(srcs).css({"display": "block"});
              }
                else if(src.search('!') == 0 && srcw.val() || src.search('!') < 0 && !srcw.val()) //mau tampil pas kosong tapi ke  isi
              {
                $(srcs).css({"display": "none"});
              }

            });
          });

          $("[show]").each(function (){
              
              var src  = $(this).attr("show")
              , srct      = $('[homba-id="'+src+'"]').attr("homba-id")
              , srcs      = $("[show='"+src+"']")
              , pid       = src.replace(/!/i,'')
              , srcw      = $("input[homba-id='"+pid+"']");
              
                if(src.search('!') == 0 && !srcw.val() || src.search('!') < 0 && srcw.val()) //mau tampil pas kosong
              {
                $(srcs).css({"display": "block"});
              }
                else if(src.search('!') == 0 && srcw.val() || src.search('!') < 0 && !srcw.val()) //mau tampil pas kosong tapi ke  isi
              {
                $(srcs).css({"display": "none"});
              }

            });

          });

      }
    , getOptions: function (op) {
      op = $.extend({}, $.fn[this.type].defaults, op, this.$el.data())

      return op
    }

  }

$.fn.blurbs_hotahomba = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('blurbs_hotahomba')
        , op = typeof option == 'object' && option

      if (!data) $this.data('blurbs_hotahomba', (data = new Blurbs_hotahomba(this, op)))
      if (typeof option == 'string') data[option]()

    })
}

  $.fn.blurbs_hotahomba.Constructor = Blurbs_hotahomba

 $.fn.blurbs_hotahomba.defaults = {
    identity: ""
  }

  $('[homba-id]').blurbs_hotahomba({
      identity : "snail"
  });

}(window.jQuery);

/*****************************************************
*  Blurbs Framework
*  Writer : Rubi Jihantoro
*
*  #Date
******************************************************/

!function () {

  "use strict";

  var Blurbs_date = function (el, op) {
    this.play('blurbs_date', el, op)
  }

  Blurbs_date.prototype = 
  {

    constructor: Blurbs_date

    , play: function (type, el, op) {
        this.type = type
        this.$el = $(el)
        this.op = this.getOptions(op)

        var type    = this.op.type
        , s       = ""
        , st      = "-"
        , now     = new Date()
        , y       = now.getFullYear()
        , m       = now.getMonth()
        , d       = now.getDate()
        , h       = now.getHours()
        , i       = now.getMinutes()
        , a       = now.getSeconds()
        , ago     = this.op.ago
        , minute  = this.op.minute
        , hours   = this.op.hours
        , ystd    = this.op.ytd
        , day     = this.op.day
        , server  = this.op.server;

          if(!server)
        {
          var ser = new Date()
          blurbs_readable_time(ser,ago,minute,hours,ystd,day)
          setInterval(function(){blurbs_readable_time(ser,ago,minute,hours,ystd,day)},500);
        }
          else
        {
          var ser = new Date(server)
          blurbs_readable_time(ser,ago,minute,hours,ystd,day)
        }
      }
    , getOptions: function (op) 
      {
        op = $.extend({}, $.fn[this.type].defaults, op, this.$el.data())

        return op
      }
  }

$.fn.blurbs_date = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('blurbs_date')
        , op = typeof option == 'object' && option

      if (!data) $this.data('blurbs_date', (data = new Blurbs_date(this, op)))
      if (typeof option == 'string') data[option]()

    })
}
  
$.fn.blurbs_date.Constructor = Blurbs_date

 $.fn.blurbs_date.defaults = {
    ago: ' Detik Yang Lalu',
    minute: 'Menit Yang Lalu',
    hours: 'Jam Yang Lalu',
    ytd: 'Kemarin Pada Pukul',
    day: 'Hari Yang Lalu',
    server: ''
  }

}(window.jQuery);

function blurbs_readable_time(sd,lg,lm,lh,ly,ld)
{
        var type    = 'human'
        , s       = ""
        , st      = "-"
        , now     = new Date()
        , y       = now.getFullYear()
        , m       = now.getMonth()
        , d       = now.getDate()
        , h       = now.getHours()
        , i       = now.getMinutes()
        , a       = now.getSeconds()
        , ago     = lg
        , minute  = lm
        , hours   = lh
        , ystd    = ly
        , day     = ld;

          if(type == "human")
        {
          $("[blurbs-date]").each(function (){
            var ew = $(this).attr("blurbs-date")
            , split    = ew.split(/\-|\s/)
            , dnow     = new Date(ew)
            , dy       = dnow.getFullYear()
            , dm       = dnow.getMonth()
            , dd       = dnow.getDate()
            , dh       = dnow.getHours()
            , di       = dnow.getMinutes()
            , da       = dnow.getSeconds()
            , ytd     = dd + 1;

            if(y+s+m+s+d+s+h+s+i == dy+s+dm+s+dd+s+dh+s+di)
            {
              var o = a-da;
              $("[blurbs-date='"+ew+"'").html(o + ago)
            }
            else if(y+s+m+s+d+s+h == dy+s+dm+s+dd+s+dh)
            {
              var o = i-di;
              $("[blurbs-date='"+ew+"'").html(o+minute)
            }
            else if(y+s+m+s+d == dy+s+dm+s+dd)
            {
              var o = h-dh;
              $("[blurbs-date='"+ew+"'").html(o+hours)
            }
            else if(y+s+m+s+d == dy+s+dm+s+ytd)
            {
              var o = h-dh;
              $("[blurbs-date='"+ew+"'").html(ystd+dh+":"+di)
            }
            else if(y+s+m == dy+s+dm)
            {
              var o = d-dd;
              $("[blurbs-date='"+ew+"'").html(o+day+dh+":"+di)
            }
            else if(y == dy)
              $("[blurbs-date='"+ew+"'").html(dd+st+dm+st+dy)
            else if(y > dy)
              $("[blurbs-date='"+ew+"'").html(dd+st+dm+st+dy)
          });
        }
}

