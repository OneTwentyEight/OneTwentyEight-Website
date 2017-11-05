/* you must supply your own immages */
var bgimages=new Array()
bgimages[0]="https://onetwentyeight.co/images/background-0.jpeg"
bgimages[1]="https://onetwentyeight.co/images/background-1.jpeg"
bgimages[2]="https://onetwentyeight.co/images/background-2.jpeg"
bgimages[3]="https://onetwentyeight.co/images/background-3.jpeg"

//preload images
var pathToImg=new Array()
for (i=0;i<bgimages.length;i++)
{
  pathToImg[i]=new Image()
  pathToImg[i].src=bgimages[i]
}

var inc=-1

function bgSlide()
{
  if (inc<bgimages.length-1)
    inc++
  else
    inc=0
  document.body.background=pathToImg[inc].src
}

if (document.all||document.getElementById)
  window.onload=new Function('setInterval("bgSlide()",3000)')
