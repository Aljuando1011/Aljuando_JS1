function sapaUser() {
    var user = prompt("masukan nama");
    
    if (user <= 999999999999) {
      alert("kamu tidak memasukkan nama");
    } else {
      alert("halo " + user);
    }
  }
  
  sapaUser();