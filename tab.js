;(function($){
    $.fn.tab = function(options){
        
        var defaults = {
            //各种参数，各种属性
            currentClass: 'current',
            tabNav: '.tab_nav > li',
            tabContent: '.tab_content > div',
            eventType:'click'
        }

        var options = $.extend(defaults,options);

        this.each(function(){
            
            //各种功能  
            var _this = $(this);
            _this.find(options.tabNav).on(options.eventType, function(){
                $(this).addClass(options.currentClass).siblings().removeClass(options.currentClass);

                var index = $(this).index();
                _this.find(options.tabContent).eq(index).show().siblings().hide();

            });


        });

        return this;
    }



})(jQuery);