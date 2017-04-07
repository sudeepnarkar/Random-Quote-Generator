
document.getElementById("nextQuote").onclick=function()
{
 
var item = Math.floor(Math.random()*Quotes.length);  
document.getElementById("element").innerHTML=Quotes[item];    
}

var Quotes=["In order to succeed, we must first believe that we can - <i> Nikos Kazantzakis </i>",
"You can't cross the sea merely by standing and staring at the water.-<i> Rabindranath Tagore</i>",
"What you do today can improve all your tomorrows - <i>Ralph Marston</i>",
"It always seems impossible until its done. - <i>Nelson Mandela</i>",
"Keep your eyes on the stars, and your feet on the ground. - <i>Theodore Roosevelt</i>",
"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.- <i> Thomas A. Edison </i>",
"Quality is not an act, it is a habit. - <i>Aristotle</i>",            
 "You are not here merely to make a living. You are here in order to enable the world to live more amply, with greater vision, with a finer spirit of hope and achievement. You are here to enrich the world, and you impoverish yourself if you forget the errand. - <i> Woodrow Wilson </i>",
"Even if you fall on your face, you're still moving forward. - <i>Victor Kiam</i>",
"By failing to prepare, you are preparing to fail.- <i>Benjamin Franklin</i>",
"We should not give up and we should not allow the problem to defeat us. - <i> A. P. J. Abdul Kalam</i>"            
      ];