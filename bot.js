
const question = document.getElementById('pertanyaan')
const answer = document.getElementById('jawaban')
const loaders = document.getElementById('loaders')
const container = document.getElementsByClassName('container')

let init = 0


const botQuest = (data) => {
    return [
        "Halo aku adalah bot faker , kamu siapa namanya ?",
        `Halo ${data?.nama} , kamu berapa usianya?`,
        `Oh kamu  ${data?.usia} tahun , kamu apa hobinya ? `,
        `Jadi hobimu ${data?.hobi} , kalo boleh tau udah punya cewe apa belom ?`,
        `Oh.. ${data?.pacar}, kalo gitu gw cabut duluan yak...`
    ]
}

question.innerHTML = botQuest()[0]

let usersData = []

function botStart() {
    if (answer.value.length < 1) return alert("Janganlah biarkan dia kosong! ")
    init++
    if (init === 1) {
        botDelay({ nama: answer.value })
    } else if (init === 2) {
        botDelay({ usia: answer.value })
    } else if (init === 3) {
        botDelay({ hobi: answer.value })
    } else if (init === 4) {
        botDelay({ pacar: answer.value })
    } else if (init === 5) {
        finishing()
    } else {
        botEnd()
    }

}

function botDelay(jawabanUser) {
    loaders.style.display = "block"
    container[0].style.filter = "blur(8px)"
    setTimeout(() => {
        question.innerHTML = botQuest(jawabanUser)[init]
        answer.value = ""
        loaders.style.display = "none"
        container[0].style.filter = "none"

    }, [1250]);

    usersData.push(answer.value)
}

function finishing() {
    question.innerHTML = `Thank you ${usersData[0]} udah main main kesini 😁 ,
        kapan-kapan kita  ${usersData[2]}  bareng yak`
}

function botEnd() {
    alert(`Terima kasih ${usersData[0]} sudah bermain, sampai jumpa aku akan melupakanmu dan bertemu orang baru`)
    window.location.reload()
}