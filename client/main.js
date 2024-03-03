const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const inspireBtn = document.getElementById("inspirationButton")
const emailForm = document.querySelector(".email-sign-up")

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
};

const getEmail = (e) => {
    e.preventDefault();
    const email = document.querySelector('input[name="email"]').value;
    axios.post("http://localhost:4000/api/sign", { email })
        .then(res => {
            const data = res.data;
            alert(data);
        })
};

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
inspirationButton.addEventListener('click', getInspired);
emailForm.addEventListener('submit', getEmail);