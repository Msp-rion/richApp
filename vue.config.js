 console.log()
 module.exports = {
    // baseUrl: './',
    // productionSourceMap: false,
    devServer: {
        // port:8080,
        proxy: {
            '/testApi':{
                target:'http://111.8.20.247:89/api/apph5api',
                changeOrigin:true,
                pathRewrite:{
                    '^/testApi':'/testApi'
                }
            },
            '/ms':{
                target: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128',
                changeOrigin: true
            },
		  '/apis':{
			target:'http://127.0.0.1:8083',
			changeOrigin:true,
			ws:true,
			pathRewrite:{
			    '/apis':'/apis'
			}
			
		  }
        }
    }
}