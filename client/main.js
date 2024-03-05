const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const inspireBtn = document.getElementById("inspirationButton")
const emailForm = document.querySelector(".email-sign-up")
const dropDown = document.getElementById("drop")
const submit = document.getElementById('submit-date')


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

const getDropped = () => {
    const selectOptions = dropDown.value;
    axios.get(`http://localhost:4000/api/drop?selection=${selectOptions}`)
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const getAppt = () => {
    const dateTime = document.getElementById('meeting-time').value;
    axios.put("http://localhost:4000/api/calendar", { dateTime })
        .then(res => {
            const data = res.data;
            alert('Selected Date and Time: ' + data);
        });
    };

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
inspirationButton.addEventListener('click', getInspired);
emailForm.addEventListener('submit', getEmail);
dropDown.addEventListener("change", getDropped);
submit.addEventListener('click', getAppt);