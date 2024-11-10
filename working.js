let size = document.querySelector("#qrSize");
        let container = document.querySelector(".container");
        let qrText = document.querySelector("#qrText");
        let qrBtn = document.querySelector("#qrBtn");
        let downloadBtn = document.querySelector("#downloadBtn");
        let imgField = document.querySelector("#imgField")
        let qrImg = document.querySelector("#qrImg");

        qrBtn.addEventListener('click',()=>{
            if(qrText.value.trim().length > 0){
                generateQR();
                imgField.classList.add("show-img");
            }
            else{
                qrText.classList.remove('error');
                void qrText.offsetWidth;
                qrText.classList.add('error');
                setTimeOut(()=>{
                    qrText.classList.remove('error');
                },1000);
            }
        })

        function generateQR(){
            qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
            qrImg.onload = () => { 
                downloadBtn.href = qrImg.src;  
            }
        }

        function sizeFix(){ 
            if(size.value == 'small')
                container.style.width = '30vw';
            else if(size.value == 'medium')
                container.style.width = '40vw';
            else if(size.value == 'large')
                container.style.width = '50vw';
        }

        size.addEventListener('change',sizeFix);

        window.addEventListener('load',sizeFix)
