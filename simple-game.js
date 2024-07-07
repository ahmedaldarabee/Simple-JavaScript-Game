function startGame(){
    var btnStatus = document.getElementById('btn-status');

    btnStatus.addEventListener("click", function() {
        var arrList = ["#DC2626","#F49D0C","#22C55E","#34D399","#2DD4BF","#0891B2", "#38BDF8", "#BF27D3"];
        var index = 0;

        setInterval(function() {
            document.body.style.backgroundColor = arrList[index];
            btnStatus.style.backgroundColor = arrList[index];

            index = (index + 1) % arrList.length;
        }, 1000);
    });
}
startGame();