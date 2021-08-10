const data = [
    {
        file : 'churo.jpg',
        description : '추로',
    },
    {
        file : 'churo2.jpg',
        description : '추로',
    },
    {
        file : 'dan.jpg',
        description : '단추',
    },
    {
        file : 'ddang.jpg',
        description : '땅콩',
    },
    {
        file : 'ddang2.png',
        description : '세발 땅콩',
    },
    {
        file : 'ddang3.jpg',
        description : '땅콩',
    },
    {
        file : 'mim.jpg',
        description : '밈미',
    },
    {
        file : 'mim2.jpg',
        description : '밈미',
    },
    {
        file : 'mim3.jpg',
        description : '밈미',
    },
    {
        file : 'ong.jpg',
        description : '옹이',
    },
    {
        file : 'tori.jpg',
        description : '토리',
    },
    {
        file : 'dufu.jpg',
        description : '두부',
    },
    {
        file : 'dufu2.jpg',
        description : '수녀 두부',
    },
    {
        file : 'dufu3.jpg',
        description : '광기 두부',
    },
    {
        file : 'potato.jpg',
        description : '말하는 감자',
    },
]

const btn = document.querySelector('#btn');
const mainDiv=document.querySelector('#main-div');
const image = document.createElement('img');
const info = document.createElement('p');
// 어쩔 수 없는 var 사용 
var changePicId;
const changePic = () => {
    let i = 0;
    // 사진 돌아가게 
    changePicId = setInterval(() => {
        image.src =`./img/${data[i].file}`;
        // 감자 예외처리
        if (data[i].file === 'potato.jpg') {
            info.innerHTML = `안타깝네요.. 당신은 ${data[i].description}의 선택을 받아버리고 말았습니다..`;
        } else {
            info.innerHTML =`당신은 ${data[i].description}의 선택을 받았습니다 !`
        }
        // 무한반복 로직
        if (i > data.length-1 || i === data.length-1) {
            i=0
        } else {
            i+=1;
        }
    }, 20)
}

// 시작 이벤트
const start = () => {
    image.setAttribute('height','400px');
    image.setAttribute('width','400px');
    mainDiv.appendChild(image);
    mainDiv.appendChild(info);

    // 1초에 하나씩 돌아가면서 바뀌게 
    changePic();
}

// 멈추기 이벤트
const stop = () => {
    clearInterval(changePicId);
};