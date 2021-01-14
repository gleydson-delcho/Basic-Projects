modifyBorderRadius = () => {
    const border_tl = document.querySelector('.tl');
    const border_bl = document.querySelector('.bl');
    const border_tr = document.querySelector('.tr');
    const border_br = document.querySelector('.br');

    const border1 = parseInt(border_tl.value);
    const border2 = parseInt(border_bl.value);
    const border3 = parseInt(border_tr.value);
    const border4 = parseInt(border_br.value);


    if(border1 > 200 || border2 > 200 || border3 > 200 || border4 >200) {
        window.alert('Consideerar valores entre 0 e 200!')
    }
    else if(border1 < 0 || border2 < 0 || border3 < 0 || border4 <0)
    {

        window.alert('Consideerar valores entre 0 e 200!')
    }  
    else
    {
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

