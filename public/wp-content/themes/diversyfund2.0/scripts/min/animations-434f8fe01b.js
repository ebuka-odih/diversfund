$(".addAnimation-custom, .addAnimation").each((function(){var t=$(window).height(),i=$(this).offset().top,a=($(window).scrollTop(),$(this).attr("data-animation"));t>i&&$(this).addClass(a)})),$(".addAnimationSteps").each((function(){var t=$(window).height(),i=$(this).offset().top,a=($(window).scrollTop(),$(this).attr("data-speed"));if(null==a)var n=350;else n=a;var o=$(this);t>i&&($(o).find(".animate-this").each((function(t){setTimeout((function(){$(o).find(".animate-this").eq(t).addClass("active")}),n*t)})),$(o).find(".addAnimationStep").each((function(t){var i=$(this).attr("data-animation");setTimeout((function(){$(o).find(".addAnimationStep").eq(t).addClass(i)}),n*t)})))})),$(window).scroll((function(){$(".addAnimation-custom, .addAnimation").each((function(){$(window).height();var t=$(this).offset().top,i=$(window).scrollTop(),a=$(this).attr("data-animation");t<i+$(window).height()/1.4&&$(this).addClass(a)})),$(".addAnimationSteps").each((function(){var t=$(window).height(),i=$(this).offset().top,a=$(window).scrollTop(),n=$(this).attr("data-speed");if(null==n)var o=350;else o=n;var d=$(this);t<i&&i<a+$(window).height()/1.4&&($(d).find(".animate-this").each((function(t){setTimeout((function(){$(d).find(".animate-this").eq(t).addClass("active")}),o*t)})),$(d).find(".addAnimationStep").each((function(t){var i=$(this).attr("data-animation");setTimeout((function(){$(d).find(".addAnimationStep").eq(t).addClass(i)}),o*t)})))}))}));
//# sourceMappingURL=animations-434f8fe01b.js.map