var api = 'http://35.229.64.129:44415';
var apiList = [];
var blockTargetInterval = 90;
var coinUnits = 100000;
var symbol = 'UNA';
var refreshDelay = 30000;

var networkStat = {
  "una": [
    ["una.go-mine.it", "https://una.go-mine.it/api/pool/stats"],
    ["una.fastpool.eu", "http://una.fastpool.eu:8117/stats"],
  ]
};
