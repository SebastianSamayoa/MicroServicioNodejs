var cliente = require ("cloud-config-client");

function urlmysql(direccion ){
    var url = direccion.substring(13,23);
    return url;
}

function portmysql(direccion){
    var port = direccion.substring(24,28);
    return port;
}

function porteureka(direccion){
    var port = direccion.substring(22,26);
    return port;
}

function urleureka(direccion){
    var url = direccion.substring(7,19);
    return url;
}

module.exports= cliente.load({
    endpoint: 'http://192.168.28.135:5010',
    application: "demo",
    context: process.env
}).then((config) => {
    var urlmisql = config.get("spring.datasource.url");
    var urleure = config.get("eureka.client.serviceUrl.defaultZone");
    mysqlurl = urlmysql(urlmisql);
    mysqlpuerto = portmysql(urlmisql);
    mysqlusuario = config.get("spring.datasource.username");
    mysqlcontrasenia = config.get("spring.datasource.password");
    mongourl = config.get("spring.data.mongodb.host");
    mongopuerto = config.get("spring.data.mongodb.port");
    mongousuario = config.get("spring.data.mongodb.username");
    mongocontrasenia = config.get("spring.data.mongodb.password");
    eurekaurl = urleureka(urleure);
    eurekaport = porteureka(urleure);
    return configuraciones={
        mysqlurl : mysqlurl,
        mysqlpuerto : mysqlpuerto,
        mysqlusuario : mysqlusuario,
        mysqlcontrasenia : mysqlcontrasenia,
        mongourl : mongourl,
        mongopuerto : mongopuerto,
        mongousuario : mongousuario,
        mongocontrasenia : mongocontrasenia,
        eurekaurl : eurekaurl,
        eurekaport : eurekaport
    };
}).catch(console.error);

