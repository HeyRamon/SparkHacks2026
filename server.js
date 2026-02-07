const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

const categorizedGryfts = {
    "Social Hub": {
        description: "Network amplification and community scaling signals.",
        items: [
            { id: "01", tag: "#Partnership", title: "Amplify Social Reach", color: "#FF8A33" },
            { id: "02", tag: "#Scheduling", title: "Manage & Analyze", color: "#FF66B2" },
            { id: "03", tag: "#Messaging", title: "Streamline Comm", color: "#7A33FF" },
            { id: "04", tag: "#ViralOps", title: "Engineered Growth", color: "#FF3333" },
            { id: "05", tag: "#Community", title: "Retention Tactics", color: "#33FFD4" },
            { id: "06", tag: "#Influencer", title: "Bridge Authority", color: "#FFD433" },
            { id: "07", tag: "#PR_Pulse", title: "Narrative Control", color: "#338AFF" },
            { id: "08", tag: "#LiveStream", title: "Real-time Density", color: "#8AFF33" }
        ]
    },
    "Technical Lab": {
        description: "Infrastructure, Web3, and automated system deployment.",
        items: [
            { id: "09", tag: "#Web3", title: "Decentralized Reach", color: "#33D4FF" },
            { id: "10", tag: "#Robotics", title: "Physical Interface", color: "#444" },
            { id: "11", tag: "#Algorithm", title: "Feed Logic Velocity", color: "#33FF7A" },
            { id: "12", tag: "#NeuralNet", title: "Cognitive Models", color: "#000" },
            { id: "13", tag: "#Solidity", title: "Smart Contract Flow", color: "#6633FF" },
            { id: "14", tag: "#RustDev", title: "Performance Nodes", color: "#FF8A33" },
            { id: "15", tag: "#DevOps", title: "Pipeline Integrity", color: "#33FFB2" },
            { id: "16", tag: "#Quantum", title: "Compute Horizons", color: "#FF33D4" }
        ]
    },
    "Creative Studio": {
        description: "Visual frontiers and high-fidelity design aesthetics.",
        items: [
            { id: "17", tag: "#UIUX", title: "User Flow Dynamics", color: "#FF338A" },
            { id: "18", tag: "#3D_Render", title: "Spatial Realism", color: "#33FF57" },
            { id: "19", tag: "#Motion", title: "Kinetic Branding", color: "#8A33FF" },
            { id: "20", tag: "#Typography", title: "Visual Language", color: "#000" },
            { id: "21", tag: "#Branding", title: "Identity Systems", color: "#FFBD33" },
            { id: "22", tag: "#Abstract", title: "Procedural Art", color: "#33D4FF" },
            { id: "23", tag: "#Minimal", title: "Efficiency in Form", color: "#F0F0F0" },
            { id: "24", tag: "#Industrial", title: "Tactile Ergonomics", color: "#555" }
        ]
    },
    "Market Intelligence": {
        description: "Venture flow and economic trend analysis.",
        items: [
            { id: "25", tag: "#FinTech", title: "Capital Efficiency", color: "#228B22" },
            { id: "26", tag: "#Venture", title: "Seed Flow Cycles", color: "#4B0082" },
            { id: "27", tag: "#Ecom", title: "Frictionless Sales", color: "#FF4500" },
            { id: "28", tag: "#Analysis", title: "Predictive Markets", color: "#1E90FF" },
            { id: "29", tag: "#DTC", title: "Direct Pipeline", color: "#DA70D6" },
            { id: "30", tag: "#Scaling", title: "Unit Economics", color: "#00CED1" },
            { id: "31", tag: "#Growth", title: "Expansion Vectors", color: "#FFD700" },
            { id: "32", tag: "#ExitOps", title: "Liquidity Events", color: "#FF0000" }
        ]
    }
};

io.on('connection', (socket) => {
    socket.emit('init_pulse', categorizedGryfts);
});

http.listen(3000, () => console.log('Gryft Live: http://localhost:3000'));