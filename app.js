Ext.onReady(function(){
    var c= new Ext.Component({
        html:'hallo',
        style:'border: 2px solid black',
        columnWidth:0.25
    });
    var c1= new Ext.Component({
        html:'hallo world',
        style:'border: 2px solid black',
        columnWidth:0.25
    });
    var cons = new Ext.Container({
        renderTo:Ext.getBody(),
        layout:'column',
        items:[c,c1,{
            xtype:'button',
            html:'hallo'
        },
        {
            xtype:'datefield',
        },
        {
            xtype:'textfield',
            html:'text field'
        }
    ],
    });
	Ext.create('Ext.Panel',{
		height:100,
		width:500,
		renderTo:'helloExt',
		title:"HI I am Ext js",
		html:'ext my first ext program'
	});
      var d= new Ext.Viewport({
        layout:'hbox',
        items:[
            {
                html:'hallo hBox'
            },
            {
                html:'north west',
                reginon:'north'
            },
            {
                html:'south west',
                regino:'west'

            }
        ]
    });
})