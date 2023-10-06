let hokage = prompt("tulis angka dari 1 - 7, maka akan muncul nama hokage konoha");
hokage = parseInt(hokage)

switch (hokage) {
    case 1:
        alert("hashirama senju");
        break;
    case 2:
        alert("tobirama senju");
        break;
    case 3:
        alert("hiruzen sarutobi");
        break;
    case 4:
        alert("minato namikaze");
        break;
    case 5:
        alert("tsunade senju");
        break;
    case 6:
        alert("kakashi hatake");
        break;
    case 7:
        alert("naruto uzumaki");
        break;
    default:
        alert("ketikan kamu salah")
}