const wrapper = document.querySelectorAll(".wrapper")
    wrapper.forEach(ele =>{
        section = ele.querySelector("section");
        console.log(section)
        dragElement(section,ele)})


function dragElement(elmnt, eltoapply) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        pos5 = eltoapply.offsetLeft
        pos6 = eltoapply.offsetTop
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;}
            
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos6 + e.clientY - pos4
        pos2 = pos5 + e.clientX - pos3
        eltoapply.style.top = pos1 + "px";
        eltoapply.style.left = pos2 + "px";}

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;}
}
