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

    getInspired: (req, res) => {
        const inspire = ['Everything you have ever wanted is sitting on the other side of fear', "If you ain't first, you are last", 'Every strike you take gets you closer to the next home run'];
        let randIndex = Math.floor(Math.random() * inspire.length);
        let randomInspire = inspire[randIndex];
        res.status(200).send(randomInspire);
    },

    getEmail: (req, res) => {
        const email = req.body.email;
        const newText = `Thanks for signing up ${email}!` 
        res.status(200).send(newText);
    },

    getDropped: (req, res) => {
        const dropEncourage = 'We will fail when we fail to try'
        const dropInspire = 'Whatever you do, always give it 100, unless you are delivering blood'
        const dropFunny = 'The planet is fine. The people are screwed'
        
        const dropOptions = {
            option1: dropEncourage,
            option2: dropInspire,
            option3: dropFunny
        };

        const selection = req.query.selection;
        const selectOptions = dropOptions[selection]

        res.status(200).send(selectOptions)
    },

    getAppt: (req, res) => {
        const dateTime = req.body.dateTime;
        console.log('Received Date and Time:', dateTime);
        res.status(200).send(dateTime);
    }

};