const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

// 20 Hardcoded niches for the Wall
const dailyNiches = [
    "#Web3Design", "#AICreative", "#SaaSGrowth", "#BioHack", "#SoloBuild", 
    "#FinTech", "#CryptoArt", "#UXPulse", "#NoCodeOps", "#CleanEnergy",
    "#CyberDefense", "#VentureFlow", "#IndieDev", "#GrowthHacking", "#DTCBrand",
    "#SpatialAudio", "#Metaverse", "#Algorithmic", "#DataViz", "#Robotics"
];

io.on('connection', (socket) => {
    socket.emit('init_pulse', dailyNiches);
});

http.listen(3000, () => console.log('Gryft Command Center: http://localhost:3000'));