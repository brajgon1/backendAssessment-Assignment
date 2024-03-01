const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const inspireBtn = document.getElementById("inspirationButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortunes/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getInspired = () => {
    axios.get("http://localhost:4000/api/inspire/")
        .then(res => {
            const data= res.data;
            alert(data)
        });        
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
inspirationButton.addEventListener('click', getInspired);