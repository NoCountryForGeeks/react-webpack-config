const address = require('address');
const { mainBlue, mainOrange } = require('./chalkTheme');

const getLanUrlAddres = () => address.ip();

const getHost = host => 
    host === '0.0.0.0' || host === '::' ? 'localhost' : host;

const isPrivateIP = ip => 
    /(^127\.)|(^10\.)|(^172\.1[6-9]\.)|(^172\.2[0-9]\.)|(^172\.3[0-1]\.)|(^192\.168\.)/.test(ip)

const networkReport = ({ PROTOCOL, HOST, PORT }) => {
    console.log(`${mainOrange('Local:')} ${mainBlue(`${PROTOCOL}://${getHost(HOST)}:${PORT}`)}`);
    if(isPrivateIP(getLanUrlAddres())) {
        console.log(`${mainOrange('Network:')} ${mainBlue(`${PROTOCOL}://${getLanUrlAddres()}:${PORT}`)}`)
    }
}

module.exports = {
    networkReport
}