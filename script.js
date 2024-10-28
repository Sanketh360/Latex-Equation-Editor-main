// Function to update the LaTeX code
function updateLatex(latexCode) {
  const latexCodeOutput = document.getElementById('latexOutput');
  const latexDisplayOutput = document.getElementById('codeOutput');

  // Add a backslash (\) before appending the new LaTeX code
  latexCodeOutput.value += latexCode;
  

  // Render LaTeX code in the output div
  katex.render(latexCodeOutput.value, latexCodeOutput, { throwOnError: false });

  // Display the entered LaTeX code in the display div
  latexDisplayOutput.textContent = latexCodeOutput.value;
  

  // Render LaTeX code in the display div
  katex.render(latexCodeOutput.value, latexDisplayOutput, { throwOnError: false });
}

// Add an input event listener to the latexOutput textarea
document.getElementById('latexOutput').addEventListener('input', function () {
  const latexCodeOutput = document.getElementById('latexOutput');
  const latexDisplayOutput = document.getElementById('codeOutput');

  // Render LaTeX code in the latexOutput div
  katex.render(latexCodeOutput.value, latexCodeOutput, { throwOnError: false });

  // Display the entered LaTeX code in the codeOutput div
  latexDisplayOutput.textContent = latexCodeOutput.value;

  // Render LaTeX code in the codeOutput div
  katex.render(latexCodeOutput.value, latexDisplayOutput, { throwOnError: false });
});


function downloadImage() {
  var codeOutput = document.getElementById('codeOutput');

  // Use html2canvas to capture the content of the textarea
  html2canvas(codeOutput).then(function(canvas) {
      // Convert the canvas to data URL
      var dataURL = canvas.toDataURL('image/png');

      // Create a temporary link element
      var link = document.createElement('a');
      link.href = dataURL;
      link.download = 'images.png';

      // Trigger a click event to download the image
      link.click();
  });
}

// latex icon visibllity
function display() {
  var latexEqDisplay = document.querySelector('.latex_eq_display');
  latexEqDisplay.style.display = (latexEqDisplay.style.display === 'none') ? 'block' : 'none';

  if (latexEqDisplay.style.display === 'block') {
    // If the display is set to block, add the images dynamically
    addImagesToContainer();
  }
}




// script.js













// function downloadImage() {
//     html2canvas(document.querySelector('.workspace')).then(canvas => {
//         const link = document.createElement('a');
//         link.download = 'latex_equation.png';
//         link.href = canvas.toDataURL();
//         link.click();
//     });
// }




function binaryDisplay() {
  var iconsContainer = document.getElementById('IconsContainer');
  // Create the HTML content for the images
  var BinaryHTML = `
  <img src="images/Binary ops/+.png" alt="plus" class="icon" onclick="updateLatex('+')">
  <img src="images/Binary ops/-.png" alt="minus" class="icon" onclick="updateLatex('-')">
  <img src="images/Binary ops/amalg.png" alt="amalg" class="icon" onclick="updateLatex('\\\\amalg')">
  <img src="images/Binary ops/ast.png" alt="ast" class="icon" onclick="updateLatex('\\\\ast')">
  <img src="images/Binary ops/backslash.png" alt="backslash" class="icon" onclick="updateLatex('\\\\backslash')">
  <img src="images/Binary ops/bigcirc.png" alt="bigcirc" class="icon" onclick="updateLatex('\\\\bigcirc')">
  <img src="images/Binary ops/bigtriangledown.png" alt="bigtriangledown" class="icon" onclick="updateLatex('\\\\bigtriangledown')">
  <img src="images/Binary ops/bigtriangleup.png" alt="bigtriangleup" class="icon" onclick="updateLatex('\\\\bigtriangleup')">
  <img src="images/Binary ops/cap.png" alt="cap" class="icon" onclick="updateLatex('\\\\cap')">
  <img src="images/Binary ops/cup.png" alt="cup" class="icon" onclick="updateLatex('\\\\cup')">
  <img src="images/Binary ops/div.png" alt="divide" class="icon" onclick="updateLatex('\\\\div')">
  <img src="images/Binary ops/lhd.png" alt="lhd" class="icon" onclick="updateLatex('\\\\lhd')">
  <img src="images/Binary ops/mp.png" alt="mp" class="icon" onclick="updateLatex('\\\\mp')">
  <img src="images/Binary ops/odot.png" alt="odot" class="icon" onclick="updateLatex('\\\\odot')">
  <img src="images/Binary ops/ominus.png" alt="ominus" class="icon" onclick="updateLatex('\\\\ominus')">
  <img src="images/Binary ops/oplus.png" alt="oplus" class="icon" onclick="updateLatex('\\\\oplus')">
  <img src="images/Binary ops/oslash.png" alt="oslash" class="icon" onclick="updateLatex('\\\\oslash')">
  <img src="images/Binary ops/otimes.png" alt="otimes" class="icon" onclick="updateLatex('\\\\otimes')">
  <img src="images/Binary ops/pm.png" alt="pm" class="icon" onclick="updateLatex('\\\\pm')">
  <img src="images/Binary ops/rhd.png" alt="rhd" class="icon" onclick="updateLatex('\\\\rhd')">
  <img src="images/Binary ops/sitminus.png" alt="setminus" class="icon" onclick="updateLatex('\\\\setminus')">
  <img src="images/Binary ops/slash.png" alt="slash" class="icon" onclick="updateLatex('\\\\/')">
  <img src="images/Binary ops/sqcap.png" alt="sqcap" class="icon" onclick="updateLatex('\\\\sqcap')">
  <img src="images/Binary ops/sqcup.png" alt="sqcup" class="icon" onclick="updateLatex('\\\\sqcup')">
  <img src="images/Binary ops/star.png" alt="star" class="icon" onclick="updateLatex('\\\\star')">
  <img src="images/Binary ops/times.png" alt="times" class="icon" onclick="updateLatex('\\\\times')">
  <img src="images/Binary ops/triangleleft.png" alt="triangleleft" class="icon" onclick="updateLatex('\\\\triangleleft')">
  <img src="images/Binary ops/triangleright.png" alt="triangleright" class="icon" onclick="updateLatex('\\\\triangleright')">
  <img src="images/Binary ops/unlhd.png" alt="unlhd" class="icon" onclick="updateLatex('\\\\unlhd')">
  <img src="images/Binary ops/unrhd.png" alt="unrhd" class="icon" onclick="updateLatex('\\\\unrhd')">
  <img src="images/Binary ops/uplus.png" alt="uplus" class="icon" onclick="updateLatex('\\\\uplus')">
  <img src="images/Binary ops/vee.png" alt="vee" class="icon" onclick="updateLatex('\\\\vee')">
  <img src="images/Binary ops/wedge.png" alt="wedge" class="icon" onclick="updateLatex('\\\\wedge')">
  <img src="images/Binary ops/wr.png" alt="wr" class="icon" onclick="updateLatex('\\\\wr')">
  `;
  iconsContainer.innerHTML = BinaryHTML;
}

function caseDisplay(){
  var iconsContainer = document.getElementById('IconsContainer');
  var caseHtml=`
    <img src="images/Cases/x=abc.png" alt="" class="icon" onclick="updateLatex('x =\\\\begin{cases}a, & x = 0\\\\b, & x > 0\\\\end{cases}')">
  `;
  iconsContainer.innerHTML = caseHtml;
}

function fractionDisplay(){
  var iconsContainer = document.getElementById('IconsContainer');
  var fraction=`
  <img src="images/Fractions/d2f(x).png" alt="" class="icon" onclick="updateLatex('\\\\frac{\\\\partial^2 f(x)}{\\\\partial x^2}')">
  <img src="images/Fractions/ddf(x).png" alt="" class="icon" onclick="updateLatex('\\\\frac{\\\\mathrm{d}f(x)}{\\\\mathrm{d}x}')">
  <img src="images/Fractions/df(x).png" alt="" class="icon" onclick="updateLatex('\\\\frac{\\\\partial f(x)}{\\\\partial x} ') ">
  <img src="images/Fractions/x_y.png" alt="" class="icon" onclick="updateLatex('\\\\frac{x}{y}')">
 
  `;
  iconsContainer.innerHTML = fraction;
}

function greekLettersDisplay(){
  var iconsContainer = document.getElementById('IconsContainer');
  var greek=`
    <img src="images/greek letters/alpha.png" alt="" class="icon" onclick="updateLatex('\\\\alpha')">
    <img src="images/greek letters/beta.png" alt="" class="icon" onclick="updateLatex('\\\\beta')">
    <img src="images/greek letters/gamma.png" alt="" class="icon" onclick="updateLatex('\\\\gamma')">
    <img src="images/greek letters/delta.png" alt="" class="icon" onclick="updateLatex('\\\\delta')">
    <img src="images/greek letters/chi.png" alt="" class="icon" onclick="updateLatex('\\\\chi')">
    <img src="images/greek letters/epsilon.png" alt="" class="icon" onclick="updateLatex('\\\\epsilon')">
    <img src="images/greek letters/eta.png" alt="" class="icon" onclick="updateLatex('\\\\eta')">
    <img src="images/greek letters/iota.png" alt="" class="icon" onclick="updateLatex('\\\\iota')">
    <img src="images/greek letters/kappa.png" alt="" class="icon" onclick="updateLatex('\\\\kappa')">
    <img src="images/greek letters/lambda.png" alt="" class="icon" onclick="updateLatex('\\\\lambda')">
    <img src="images/greek letters/mu.png" alt="" class="icon" onclick="updateLatex('\\\\mu')">
    <img src="images/greek letters/nu.png" alt="" class="icon" onclick="updateLatex('\\\\nu')">
    <img src="images/greek letters/omega.png" alt="" class="icon" onclick="updateLatex('\\\\omega')">
    <img src="images/greek letters/omicron.png" alt="" class="icon" onclick="updateLatex('\\\\omicron')">
    <img src="images/greek letters/phi.png" alt="" class="icon" onclick="updateLatex('\\\\phi')">
    <img src="images/greek letters/pi.png" alt="" class="icon" onclick="updateLatex('\\\\pi')">
    <img src="images/greek letters/psi.png" alt="" class="icon" onclick="updateLatex('\\\\psi')">
    <img src="images/greek letters/rho.png" alt="" class="icon" onclick="updateLatex('\\\\rho')">
    <img src="images/greek letters/sigma.png" alt="" class="icon" onclick="updateLatex('\\\\sigma')">
    <img src="images/greek letters/tau.png" alt="" class="icon" onclick="updateLatex('\\\\tau')">
    <img src="images/greek letters/theta.png" alt="" class="icon" onclick="updateLatex('\\\\theta')">
    <img src="images/greek letters/upsilon.png" alt="" class="icon" onclick="updateLatex('\\\\upsilon')">
    <img src="images/greek letters/xi.png" alt="" class="icon" onclick="updateLatex('\\\\xi')">
    <img src="images/greek letters/zeta.png" alt="" class="icon" onclick="updateLatex('\\\\zeta')">
  `;
  iconsContainer.innerHTML=greek;
}

function integralDisplay(){
  var iconsContainer = document.getElementById('IconsContainer');
  var integral=`
  <img src="images/integral/f(x).png" alt="" class="icon" onclick="updateLatex('\\\\int f(x)\\\\,dx')">
  <img src="images/integral/baf(x).png" alt="" class="icon" onclick="updateLatex('\\\\int_{a}^{b}f(x)\\\\,dx')">
  <img src="images/integral/lf(s).png" alt="" class="icon" onclick="updateLatex('\\\\oint_{L} f(s)\\\\,ds')">
  <img src="images/integral/baf(x_y).png" alt="" class="icon" onclick="updateLatex('\\\\iint_{a}^{b}f(x,y)\\\\,dxdy')">
  `;
  iconsContainer.innerHTML=integral;
}

function limitsDisplay(){
  var iconsContainer = document.getElementById('IconsContainer');
  var limits=`
  <img src="images/limits_bounds/lim_x_f.png" alt="" class="icon" onclick="updateLatex('\\\\lim_{x\to0}f(x)')">
  <img src="images/limits_bounds/inf(A).png" alt="" class="icon" onclick="updateLatex('\\\\inf{A}')">
  <img src="images/limits_bounds/sup(A).png" alt="" class="icon" onclick="updateLatex('\\\\sup{A}')">
  <img src="images/limits_bounds/liminf{A.png" alt="" class="icon" onclick="updateLatex('\\\\liminf{A}')">
  <img src="images/limits_bounds/limsup{A}.png" alt="" class="icon" onclick="updateLatex('\\\\limsup{A}')">
  <img src="images/limits_bounds/min{A}.png" alt="" class="icon" onclick="updateLatex('\\\\min{A}')">
  <img src="images/limits_bounds/max{A}.png" alt="" class="icon" onclick="updateLatex('\\\\min{A}')">
  `;
  iconsContainer.innerHTML = limits;
}

function largeOpereatorDisplay(){
  var iconsContainer = document.getElementById('IconsContainer');
  var operators=`
  
  <img src="images/large ops/sum.png" alt="" class="icon" onclick="updateLatex('\\\\sum')">
  <img src="images/large ops/sum(0_n).png" alt="" class="icon" onclick="updateLatex('\\\\sum_{n=0}^{N}')">
  <img src="images/large ops/prod.png" alt="" class="icon" onclick="updateLatex('\\\\prod')">
  <img src="images/large ops/prod(0_n).png" alt="" class="icon" onclick="updateLatex('\\\\prod_{n=0}^{N}')">
  <img src="images/large ops/coprod.png" alt="" class="icon" onclick="updateLatex('\\\\coprod')">
  <img src="images/large ops/coprod(0_n).png" alt="" class="icon" onclick="updateLatex('\\\\coprod_{n=0}^{N}')">
  <img src="images/large ops/bigcap.png" alt="" class="icon" onclick="updateLatex('\\\\bigcap')">
  <img src="images/large ops/bigcap(0_n).png" alt="" class="icon" onclick="updateLatex('\\\\bigcap_{n=0}^{N}')">
   <img src="images/large ops/bigcup.png" alt="" class="icon" onclick="updateLatex('\\\\bigcup')">
   <img src="images/large ops/bigcup(0_n).png" alt="" class="icon" onclick="updateLatex('\\\\bigcup_{n=0}^{N}')">
   <img src="images/large ops/bigwedge.png" alt="" class="icon" onclick="updateLatex('\\\\bigwedge')">
   <img src="images/large ops/bigewedge(0_n).png" alt="" class="icon" onclick="updateLatex('\\\\bigwedge_{n=0}^{N}')">
   <img src="images/large ops/bigvee.png" alt="" class="icon" onclick="updateLatex('\\\\bigvee')">
   <img src="images/large ops/bigvee(0_n).png" alt="" class="icon" onclick="updateLatex('\\\\bigvee_{n=0}^{N}')">
   <img src="images/large ops/bigotimes.png" alt="" class="icon" onclick="updateLatex('\\\\bigotimes')">
   <img src="images/large ops/bigotimes_{n=0}.png" alt="" class="icon" onclick="updateLatex('\\\\bigotimes_{n=0}^{N}')">
   <img src="images/large ops/bigoplus.png" alt="" class="icon" onclick="updateLatex('\\\\bigoplus')">
   <img src="images/large ops/bigoplus(n_0).png" alt="" class="icon" onclick="updateLatex('\\\\bigoplus_{n=0}^{N}')">
   <img src="images/large ops/biguplus.png" alt="" class="icon" onclick="updateLatex('\\\\biguplus')">
   <img src="images/large ops/biguplus(n_0).png" alt="" class="icon" onclick="updateLatex('\\\\biguplus_{n=0}^{N}')">
  `;
 iconsContainer.innerHTML = operators;
}

function subSuperDisplay(){
  var iconsContainer = document.getElementById('IconsContainer');
  var subSuper=`
  <img src="images/Sub_Super/Xn.png" alt="" class="icon" onclick="updateLatex('{x}_{n}')">
  <img src="images/Sub_Super/Xab.png" alt="" class="icon" onclick="updateLatex('{x}_{a}^{b}')">
  <img src="images/Sub_Super/Xna.png" alt="" class="icon" onclick="updateLatex('{{x}_{n}}^{a}')">
  <img src="images/Sub_Super/cab.png" alt="" class="icon" onclick="updateLatex('\\{}_{a}^{b}\\{C}')">

  `;
  iconsContainer.innerHTML = subSuper;
}

function radicals(){
  var iconsContainer = document.getElementById('IconsContainer');
  var radicals=`
  <img src="images/radicals/sqrt(x).png" alt="" class="icon" onclick="updateLatex('\\\\sqrt{x}')">
  <img src="images/radicals/sqrta_x.png" alt="" class="icon" onclick="updateLatex('\\\\sqrt[a]{x}')">
   

  `;
  iconsContainer.innerHTML = radicals;
}


function relation(){
  var iconsContainer = document.getElementById('IconsContainer');
  var relation=`
  <img src="images/relation/leq.png" alt="" class="icon" onclick="updateLatex('\\\\leq')">
  <img src="images/relation/geq.png" alt="" class="icon" onclick="updateLatex('\\\\geq')">
  <img src="images/relation/prec.png" alt="" class="icon" onclick="updateLatex('\\\\prec')">
  <img src="images/relation/succ.png" alt="" class="icon" onclick="updateLatex('\\\\succ')">
  <img src="images/relation/preceq.png" alt="" class="icon" onclick="updateLatex('\\\\preceq')">
  <img src="images/relation/succeq.png" alt="" class="icon" onclick="updateLatex('\\\\succeq')">
  <img src="images/relation/ll.png" alt="" class="icon" onclick="updateLatex('\\\\ll')">
  <img src="images/relation/gg.png" alt="" class="icon" onclick="updateLatex('\\\\gg')">
  <img src="images/relation/subset.png" alt="" class="icon" onclick="updateLatex('\\\\subset')">
  <img src="images/relation/supset.png" alt="" class="icon" onclick="updateLatex('\\\\supset')">
  <img src="images/relation/subseteq.png" alt="" class="icon" onclick="updateLatex('\\\\subseteq')">
  <img src="images/relation/supseteq.png" alt="" class="icon" onclick="updateLatex('\\\\supseteq')">
  <img src="images/relation/sqsubset.png" alt="" class="icon" onclick="updateLatex('\\\\sqsubset')">
  <img src="images/relation/sqsupset.png" alt="" class="icon" onclick="updateLatex('\\\\sqsupset')">
  <img src="images/relation/sqsubseteq.png" alt="" class="icon" onclick="updateLatex('\\\\sqsubseteq')">
  <img src="images/relation/sqsupseteq.png" alt="" class="icon" onclick="updateLatex('\\\\sqsupseteq')">
  <img src="images/relation/in.png" alt="" class="icon" onclick="updateLatex('\\\\in')">
  <img src="images/relation/ni.png" alt="" class="icon" onclick="updateLatex('\\\\ni')">
  <img src="images/relation/notin.png" alt="" class="icon" onclick="updateLatex('\\\\notin')">
  <img src="images/relation/vdash.png" alt="" class="icon" onclick="updateLatex('\\\\vdash')">
  <img src="images/relation/dashv.png" alt="" class="icon" onclick="updateLatex('\\\\dashv')">
  <img src="images/relation/lrow.png" alt="" class="icon" onclick="updateLatex('<')">
  <img src="images/relation/rrow.png" alt="" class="icon" onclick="updateLatex('>')">
  <img src="images/relation/join.png" alt="" class="icon" onclick="updateLatex('\\\\Join')">
  <img src="images/relation/bowtie.png" alt="" class="icon" onclick="updateLatex('\\\\bowtie')">
  <img src="images/relation/smile.png" alt="" class="icon" onclick="updateLatex('\\\\smile')">
  <img src="images/relation/frown.png" alt="" class="icon" onclick="updateLatex('\\\\frown')">
  <img src="images/relation/sim.png" alt="" class="icon" onclick="updateLatex('\\\\sim')">
  <img src="images/relation/simeq.png" alt="" class="icon" onclick="updateLatex('\\\\simeq')">
  <img src="images/relation/asymp.png" alt="" class="icon" onclick="updateLatex('\\\\asymp')">
  <img src="images/relation/approx.png" alt="" class="icon" onclick="updateLatex('\\\\approx')">
  <img src="images/relation/equiv.png" alt="" class="icon" onclick="updateLatex('\\\\equiv')">
  <img src="images/relation/not_quiv.png" alt="" class="icon" onclick="updateLatex('\\\\not\equiv')">
  <img src="images/relation/cong.png" alt="" class="icon" onclick="updateLatex('\\\\cong')">
  <img src="images/relation/mid.png" alt="" class="icon" onclick="updateLatex('\\\\mid')">
  <img src="images/relation/parallel.png" alt="" class="icon" onclick="updateLatex('\\\\parallel')">
  <img src="images/relation/doteq.png" alt="" class="icon" onclick="updateLatex('\\\\doteq')">
  <img src="images/relation/models.png" alt="" class="icon" onclick="updateLatex('\\\\models')">
  <img src="images/relation/colan.png" alt="" class="icon" onclick="updateLatex(':')">
  <img src="images/relation/propto.png" alt="" class="icon" onclick="updateLatex('\\\\propto')">
  <img src="images/relation/lhd.png" alt="" class="icon" onclick="updateLatex('\\\\lhd')">
  <img src="images/relation/rhd.png" alt="" class="icon" onclick="updateLatex('\\\\rhd')">
  <img src="images/relation/unlhd.png" alt="" class="icon" onclick="updateLatex('\\\\unlhd')">
  <img src="images/relation/unrhd.png" alt="" class="icon" onclick="updateLatex('\\\\unrhd')">
 
  `;
  iconsContainer.innerHTML = relation;
}
function trig(){
  var iconsContainer = document.getElementById('IconsContainer');
  var trig=`
  <img src="images/trig_fun/sinx.png" alt="" class="icon" onclick="updateLatex('\\\\sin{x}')">
  <img src="images/trig_fun/cos{x}.png" alt="" class="icon" onclick="updateLatex('\\\\cos{x}')">
  <img src="images/trig_fun/tan{x}.png" alt="" class="icon" onclick="updateLatex('\\\\tan{x}')">
  <img src="images/trig_fun/cot{x}.png" alt="" class="icon" onclick="updateLatex('\\\\cot{x}')">
  <img src="images/trig_fun/sec{x}.png" alt="" class="icon" onclick="updateLatex('\\\\sec{x}')">
  <img src="images/trig_fun/csc{x}.png" alt="" class="icon" onclick="updateLatex('\\\\csc{x}')">
  <img src="images/trig_fun/arcsin{x}.png" alt="" class="icon" onclick="updateLatex('\\\\arcsin{x}')">
  <img src="images/trig_fun/arccos{x}.png" alt="" class="icon" onclick="updateLatex('\\\\arccos{x}')">
  <img src="images/trig_fun/arctan{x}.png" alt="" class="icon" onclick="updateLatex('\\\\arctan{x}')">
  <img src="images/trig_fun/textrm{arccot}{x}.png" alt="" class="icon" onclick="updateLatex('\\\\textrm{arccot}{x}')">
  <img src="images/trig_fun/textrm{arcsec}{x}.png" alt="" class="icon" onclick="updateLatex('\\\\textrm{arcsec}{x}')">
  <img src="images/trig_fun/textrm{arccsc}{x}.png" alt="" class="icon" onclick="updateLatex('\\\\textrm{arccsc}{x}')">
   

  `;
  iconsContainer.innerHTML = trig;
}

function hyp(){
  var iconsContainer = document.getElementById('IconsContainer');
  var hyp=`
  
  <img src="images/hyp_fun/sinh{x}.png" alt="" class="icon" onclick="updateLatex('\\\\sinh{x}')">
  <img src="images/hyp_fun/cosh{x}.png" alt="" class="icon" onclick="updateLatex('\\\\cosh{x}')">
  <img src="images/hyp_fun/tanh{x}.png" alt="" class="icon" onclick="updateLatex('\\\\tanh{x}')">
  <img src="images/hyp_fun/coth{x}.png" alt="" class="icon" onclick="updateLatex('\\\\coth{x}')">
  <img src="images/hyp_fun/sinh^{-1}{x}.png" alt="" class="icon" onclick="updateLatex('\\\\sinh^{-1}{x}')">
  <img src="images/hyp_fun/cosh^{-1}{x}.png" alt="" class="icon" onclick="updateLatex('\\\\cosh^{-1}{x}')">
  <img src="images/hyp_fun/tanh^{-1}{x}.png" alt="" class="icon" onclick="updateLatex('\\\\tanh^{-1}{x}')">
  <img src="images/hyp_fun/coth^{-1}{x}.png" alt="" class="icon" onclick="updateLatex('\\\\coth^{-1}{x}')">

  `;
  iconsContainer.innerHTML = hyp;
}


function exp(){
  var iconsContainer = document.getElementById('IconsContainer');
  var exp=`
  <img src="images/exp_log/exp{x}.png" alt="" class="icon" onclick="updateLatex('\\\\exp{x}')">
  <img src="images/exp_log/lg{x}.png" alt="" class="icon" onclick="updateLatex('\\\\lg{x}')">
  <img src="images/exp_log/ln{x}.png" alt="" class="icon" onclick="updateLatex('\\\\ln{x}')">
  <img src="images/exp_log/log_{a}{x}.png" alt="" class="icon" onclick="updateLatex('\\\\log_{a}{x}')">
  `;
  iconsContainer.innerHTML = exp;
}
function other(){
  var iconsContainer = document.getElementById('IconsContainer');
  var other=`
  <img src="images/other/det(A).png" alt="" class="icon" onclick="updateLatex('\\\\det(A)')">
  <img src="images/other/dim V.png" alt="" class="icon" onclick="updateLatex('\\\\dim V')">
  <img src="images/other/gcd(x,y).png" alt="" class="icon" onclick="updateLatex('\\\\gcd(x,y)')">
  <img src="images/other/mho.png" alt="" class="icon" onclick="updateLatex('\\\\mho')">
  `;
  iconsContainer.innerHTML = other;
}

function accents(){
  var iconsContainer = document.getElementById('IconsContainer');
  var accents=`
  <img src="images/accents/acute{a}.png" alt="" class="icon" onclick="updateLatex('\\\\acute{a}')">
  <img src="images/accents/bar{a}.png" alt="" class="icon" onclick="updateLatex('\\\\bar{a}')">
  <img src="images/accents/dot{a}.png" alt="" class="icon" onclick="updateLatex('\\\\dot{a}')">
  <img src="images/accents/hat{a}.png" alt="" class="icon" onclick="updateLatex('\\\\hat{a}')">
  <img src="images/accents/vec{a}.png" alt="" class="icon" onclick="updateLatex('\\\\vec{a}')">
  <img src="images/accents/overbrace{abc}.png" alt="" class="icon" onclick="updateLatex('\\\\overbrace{abc}')">
  <img src="images/accents/overline{abc}.png" alt="" class="icon" onclick="updateLatex('\\\\overline{abc}')">
  <img src="images/accents/overrightarrow{abc}.png" alt="" class="icon" onclick="updateLatex('\\\\overrightarrow{abc}')">
  <img src="images/accents/widehat{abc}.png" alt="" class="icon" onclick="updateLatex('\\\\idehat{abc}')">
  <img src="images/accents/widetilde{abc}.png" alt="" class="icon" onclick="updateLatex('\\\\widetilde{abc}')">
  `;
  iconsContainer.innerHTML = accents;
}

function arrow(){
  var iconsContainer = document.getElementById('IconsContainer');
  var arrow=`
  <img src="images/arrow/leftarrow.png" alt="" class="icon" onclick="updateLatex('\\\\leftarrow')">
  <img src="images/arrow/rightarrow.png" alt="" class="icon" onclick="updateLatex('\\\\rightarrow')">
  <img src="images/arrow/uparrow.png" alt="" class="icon" onclick="updateLatex('\\\\uparrow')">
  <img src="images/arrow/downarrow.png" alt="" class="icon" onclick="updateLatex('\\\\downarrow')">
  <img src="images/arrow/Leftrightarrow.png" alt="" class="icon" onclick="updateLatex('\\\\Leftrightarrow')">
  <img src="images/arrow/rightleftharpoons.png" alt="" class="icon" onclick="updateLatex('\\\\rightleftharpoons')">

  `;
  iconsContainer.innerHTML = arrow;
}

function bracket() {
  var iconsContainer = document.getElementById('IconsContainer');
  var bracket = `
    <img src="images/bracket/left( a _right).png" alt="" class="icon" onclick="updateLatex('\\\(a \\\)')">
    <img src="./images/bracket/left[ a _right].png" alt="" class="icon" onclick="updateLatex('\\\[a \\\]')">
    <img src="./images/bracket/_left_{ a _right_}.png" alt="" class="icon" onclick="updateLatex('\\\\{a \\\\}')">
    <img src="./images/bracket/left_a _right.png" alt="" class="icon" onclick="updateLatex('\\\|a \\\|')">
    <img src="./images/bracket/left.png" alt="" class="icon" onclick="updateLatex('\\\\left\\\\langle a \\\\right\\\\rangle')">
  `;
  iconsContainer.innerHTML = bracket;
}


// function matrix(){
//   var iconsContainer = document.getElementById('IconsContainer');
//   var matrix=`
//   <img src="images/matrix/t2_2.png" alt="" class="icon" onclick="updateLatex('\\\\begin{matrix}
//   a&b\\
//   c&d
//   \end{matrix}')">
//   <img src="images/matrix/t2_3.png" alt="" class="icon" onclick="updateLatex('\\\\begin{matrix}
//   a&b&c\\
//   d&e&f
//   \end{matrix}')">
//   <img src="images/matrix/t3_3.png" alt="" class="icon" onclick="updateLatex('\\\\begin{matrix}
//   a&b&c\\
//   d&e&f04\\
//   g&h&i
//   \end{matrix}')">
//   <img src="images/matrix/t3_4.png" alt="" class="icon" onclick="updateLatex('\\\\begin{matrix}
//   a&b&c&d\\
//   e&f&g&h\\
//   i&j&k&l
//   \end{matrix}')">
//   `;
//   iconsContainer.innerHTML = matrix;
// }
// Function to change font size in the code output
function changeFontSize() {
  // Get the font size from the user
  var fontSize = prompt("Enter Font Size (e.g., 12px):");

  // Validate the input
  if (isValidFontSize(fontSize)) {
    // Apply font size to the code output
    document.getElementById("codeOutput").style.fontSize = fontSize;
  } else {
    alert("Invalid font size. Please enter a valid size (e.g., 12px).");
  }
}

// Function to check if the entered font size is valid
function isValidFontSize(fontSize) {
  // Use a regular expression to validate the format (e.g., 12px)
  var fontSizeRegex = /^\d+(\.\d+)?(px|em|rem|pt|%)?$/;
  return fontSizeRegex.test(fontSize);
}

// Function to change font color in the code output
function changeFontColor() {
  const fontColor = prompt("Enter font color (e.g., #000000):");

  // Change font color for codeOutput
  const codeOutput = document.getElementById("codeOutput");
  if (fontColor) {
    codeOutput.style.color = fontColor;
  }
}

// Function to change font color
function changeFontColor() {
  const fontColor = prompt("Enter Font Color (e.g., red):");
  
  if (fontColor) {
    // Set the color of the code output
    document.getElementById("codeOutput").style.color = fontColor;

    // Set the color of the LaTeX equation output
    document.getElementById("latexEquationOutput").style.color = fontColor;
  }
}

//clear
function clearLatex() {
  const latexOutput = document.getElementById('latexOutput');
  const codeOutput = document.getElementById('codeOutput');

  // Clear the content of both textareas
  latexOutput.value = '';
  codeOutput.textContent = '';

  // Optionally, trigger the rendering of the updated LaTeX
  renderMathInElement(document.body);
}

 // Event listener for changes in latexOutput
 latexOutput.addEventListener("input", updateCodeOutput);

 // Function to update latexOutput when codeOutput changes
 function updateLatexOutput() {
     const codeText = codeOutput.textContent;
     // You may want to process the codeText if needed before updating latexOutput
     latexOutput.value = codeText;
 }

 // Event listener for changes in codeOutput
 codeOutput.addEventListener("input", updateLatexOutput);

 function handleEnterKey(event) {
  if (event.key === "Enter") {
      // Prevent the default behavior of Enter key (inserting a new line)
      event.preventDefault();

      // Insert a newline character at the current cursor position
      const codeOutput = document.getElementById('codeOutput');
      const cursorPosition = window.getSelection().getRangeAt(0).startOffset;
      const textBeforeCursor = codeOutput.textContent.substring(0, cursorPosition);
      const textAfterCursor = codeOutput.textContent.substring(cursorPosition);
      codeOutput.textContent = textBeforeCursor + '\n' + textAfterCursor;

      // Optionally, adjust the cursor position
      const newCursorPosition = cursorPosition + 1;
      const range = document.createRange();
      const sel = window.getSelection();
      range.setStart(codeOutput.firstChild, newCursorPosition);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
   }
}