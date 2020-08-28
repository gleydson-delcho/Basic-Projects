modifyBorderRadius = () => {
    const border_tl = document.querySelector('.tl');
    const border_bl = document.querySelector('.bl');
    const border_tr = document.querySelector('.tr');
    const border_br = document.querySelector('.br');

    const border1 = parseInt(border_tl.value);
    const border2 = parseInt(border_bl.value);
    const border3 = parseInt(border_tr.value);
    const border4 = parseInt(border_br.value);


    if(border1 > 150 || border2 > 150 || border3 > 150 || border4 >150) {
        window.alert('Consideerar valores entre 0 e 150!')
    }else{
        document.querySelector('.border').style.borderRadius = 
            `${border1}px ${border2}px ${border3}px ${border4}px`
    }
    
    const textArea = document.querySelector('#text');
    textArea.value = `border-top-left-radius: ${border1}px; \n`
    textArea.value += `\n`
    textArea.value += `border-top-right-radius: ${border2}px; \n`
    textArea.value += `\n`
    textArea.value += `border-bottom-right-radius: ${border3}px; \n`
    textArea.value += `\n`
    textArea.value += `border-bottom-left-radius: ${border4}px;`
    
}

modifyBorderRadius();

