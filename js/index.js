const borrador = document.querySelector('.borrador');
document.getElementById('gameball').addEventListener("click", sumar);
document.getElementById('containerex').addEventListener("mouseover", showex);
const scroller = document.querySelector('.scroller');
p = 0;
x = 0;
function sumar() {
  p++;
  if (p < 4) {
    document.getElementById('puntos').innerHTML = p;
    rand = Math.round(Math.random() * 300);
    var width = document.getElementById('bgame').offsetWidth;
    rand2 = Math.round(Math.random() * width);
    document.getElementById('gameball').style.marginTop = rand + "px";
    document.getElementById('gameball').style.marginLeft = rand2 + "px";
    if (p == 3) {
      x = 1;
      document.getElementById('containerex').style.display = "block";
      document.getElementById('containerf').style.display = "block";
      document.getElementById('gameball').style.opacity = "0%";
      document.getElementById('puntos').style.opacity = "0%";
      document.getElementById('ss').style.opacity = "0%";
      document.getElementById('shows').style.opacity = "100%";
      document.body.style.backgroundColor = '#121212';
      borrador.style.backgroundColor = '#121212';
    }
  }
}

function showex() {
  document.getElementById('show').style.opacity = "100%";
  document.getElementById('show').classList.add("scaler");
}



window.onscroll = () => {
  if (window.scrollY > 200) {
    borrador.style.marginTop = "-245px";
  } else{
    document.getElementById('mar').style.opacity="0%";
  }
  if (window.scrollY > 600) {
    borrador.style.marginTop = "-209px";
    if(mediaqueryList.matches) {
    document.getElementById('mar').style.opacity="4%";
    }
  }
  if (window.scrollY < 200) {
    borrador.style.marginTop = "-265px";
    document.body.style.backgroundImage = "";
  }
  if (window.scrollY > 400) {
    borrador.style.marginTop = "-223px";
  }
  if (window.scrollY > 800) {
    borrador.style.marginTop = "-180px";
  }
  if (window.scrollY > 1000) {
    borrador.style.marginTop = "-160px";
  }
  if (window.scrollY > 1200) {
    borrador.style.marginTop = "-140px";
  }
  if (window.scrollY > 1400) {
    borrador.style.marginTop = "-120px";
  }
  if (window.scrollY > 1600) {
    borrador.style.marginTop = "-100px";

  }
  if (window.scrollY > 1800) {
    borrador.style.marginTop = "-80px";
    document.getElementById('cl').style.opacity="7%";
    document.getElementById('cl2').style.opacity="7%";
    document.getElementById('moon').style.opacity="4%";
    document.getElementById('mar').style.opacity="0%";
  } else {
    document.getElementById('cl').style.opacity="0%";
    document.getElementById('cl2').style.opacity="0%";
    document.getElementById('moon').style.opacity="0%";
  }
  if (window.scrollY > 2000) {
    borrador.style.marginTop = "-60px";

  }
  if (window.scrollY > 2200) {
    borrador.style.marginTop = "-40px";
  }

  if (window.scrollY > 2600) {
    borrador.style.marginTop = "-265px";
    scroller.style.opacity="0%";
    borrador.style.backgroundColor = '#0e0e0e';
    document.body.style.backgroundColor = '#0e0e0e';
    document.getElementById('nave').style.opacity="0%";
  }
  else {
    document.body.style.backgroundColor = '#121212';
    borrador.style.backgroundColor = '#121212';
    scroller.style.opacity="100%";
  }
  if (window.scrollY < 6100) {
    document.getElementById('show').style.opacity = "0%";
  }
};
