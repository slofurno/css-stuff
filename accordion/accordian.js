(function(window){
        
        var Accordian={};
    
        var toggleAccordian = function(el){
            if (el.className=="accordian-toggle"){
             el.className="accordian-toggle open";   
            }
            else{
             el.className="accordian-toggle";   
            }
        };
        
        var registerAccordian = function(el){
            el.addEventListener("click", function(event,q){
                var el = event.target;
                if (el.tagName.toLowerCase() == "li"){
                    toggleAccordian(el);
                }
            },false);
        };
        
        Accordian.registerAccordians = function(classname){
            var els = document.getElementsByClassName(classname);
            [].slice.call(els).forEach(registerAccordian);
        };
    
        window.Accordian=Accordian;
    
    })(window);