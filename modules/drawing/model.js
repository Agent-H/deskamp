﻿define(['Core'], function(Core){
    
    return Core.Model.extend({
        
        url: 'drawing',
        
        defaults: {
            path: []
        },
        
        addPath: function(path){
            var p = _.clone(this.get('path'));
            p.push({p: path});
            
            this.set('path', p);
        }
        
    });

});