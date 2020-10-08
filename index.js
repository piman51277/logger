const colors = require('colors')
const moment = require('moment')
class logger {
    constructor(options) {
        /**Options:
         * Name: what this session will be called
         * Types: {
         * name:color
         * }
         * saveDir: where to save log files
         * printLogs: whether to print to console or not
         */
        this.name = options.name;
        this.types = options.types;
        this.logs = [];
    }
    log(type, msg) {
        let color =this.types[type] != undefined? this.types[type] : 'black';
        let time = moment(Date.now()).format('YYYY-MM-DD kk:mm:ss').toString()
        console.log(`<${time.grey}> ${this.name.brightWhite.bgRed.bold}: ${type[color]} ${msg.white}`)
        this.logs.push(`<${time}> ${type}: ${msg}`)
    }
}

module.exports = logger;