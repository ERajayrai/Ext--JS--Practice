Ext.onReady(function(){
    var vp= new Ext.Viewport({
        layout:{
            type:'hbox',
            align:'stretch'
        },
        items:[

            {
                flex:1,
                items:{
                    xtype:'button',
                    text:'Add Tab',
                    handler:function(btn){
                        btn.up('viewport').down('tabpanel').add({
                            xtype:'panel',
                            title:'New Tab',
                            html:'my New Tab',
                            closable:true,
                        })
                    }
                }

            },
            {
                xtype:'tabpanel',
                flex:3
            }
        ]
    })
})