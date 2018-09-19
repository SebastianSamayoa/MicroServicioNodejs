//var Eureka = require('eureka-js-client');
const Eureka = require('eureka-js-client').Eureka;
var Configuraciones = require('../configuraciones/configuracion');
var confi;

//realizando la solicitud de las configuraciones
async function RecuperaConfiguraciones() {
    var Config = await Configuraciones;
    return Config;    
}

var app = (async function(){
    try {
        confi = await RecuperaConfiguraciones();
        //console.log(confi);
        const eureka = new Eureka({
            instance: {
                app: 'msnodejs',
                hostName: '172.17.0.4',
                ipAddr: '172.17.0.4',
                statusPageUrl: 'http://172.17.0.4:3000',
                port: {
                  '$': 3000,
                  '@enabled': 'true',
                },
                vipAddress: 'msnodejs',
                dataCenterInfo: {
                  '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
                  name: 'MyOwn'
                }
              },
              eureka: {
                host: confi.eurekaurl,
                port: confi.eurekaport,
                servicePath: '/eureka/apps/'
              }
        });
        eureka.logger.level('debug');
        eureka.start((error)=>{
            console.log(error || 'completo')
        });
    } catch (error) {
        console.log(error);
    }
})();

module.exports = app;