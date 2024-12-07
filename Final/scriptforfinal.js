function accordion(button, content) {
    
    const workDivs = document.querySelectorAll('[id^="workDiv"]');
    const allButtons = document.querySelectorAll('[id^="workButton"]');
    
    
    const contentHeight = content.scrollHeight;
    
    if (content.style.display === "block") {
        
        content.style.display = "none";
        button.style.backgroundColor = "#917381";
    } else {
        
        allButtons.forEach(btn => {
            btn.style.backgroundColor = "#917381";
        });
        
        
        workDivs.forEach(div => {
            div.style.display = "none";
        });
        
    
        content.style.display = "block";
        button.style.backgroundColor = "#8d6f7d";
    }
}