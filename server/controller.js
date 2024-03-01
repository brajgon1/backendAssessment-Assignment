module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["You love peace", "A Smooth Long journey! Great expectaions", "A truly rich life contains love and art in abundance"];
        let randoIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randoIndex];
        res.status(200).send(randomFortune);
    },

    
};