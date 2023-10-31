const processBar=document.getElementById("bar");
        const loadingparent=document.getElementById("loading");
        let barwidth=0;
        const download=()=>{
            barwidth++;
            processBar.style.width=`${barwidth}%`
            setTimeout(()=>{
                loadingparent.innerHTML=(barwidth===100)?  `${barwidth}% Completed`: `${barwidth}% process`
            },1000)
        }
        download()

        setTimeout(()=>{
          let intervalId=setInterval(()=>{
                if(barwidth===100){
                    clearInterval(intervalId)
                }
                else(
                    download()
                )
            },100)
        },3000)
