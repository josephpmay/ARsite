var ux = {

replacePage: function()
{

//location.hash="ux"		
document.getElementById("page").innerHTML = '			<div style=" width: 50px; min-height: 75px; height: 10vh"> </div> <div id="mainContent" style="margin-top: 0vh"><div class="slide" id="slide1" style="position: relative"> <h1 style="padding-top: 30px">Designing the AR User Experience</h1><div class="nextbutton" onclick="alert(\'Next Slide Not Found\')"> Next</div><div class="prevbutton" style="color:grey"> Previous</div></div><h1 style="text-align: right; cursor: pointer" onclick=" jsGoToPage(\'examples\'); scroll(0,0)">Chapter 3:</h1><h2 style="text-align: right; cursor: pointer" onclick=" jsGoToPage(\'examples\'); scroll(0,0)">UX Design<br> Examples</h2> </div>'

}
}