document.querySelector('#bg-color')
    .addEventListener('click' , function(){

        document.body.style.backgroundColor= getRandomColor()
        
        
        
    })



    
    function getRandomColor() {
        let colors = ["#FF5733", "#33FF57", "#F4F7FF", "#3357FF", "#F1C40F", ];
    
        let randomIndex = Math.floor(Math.random() * colors.length); 
    return colors[randomIndex];

    }