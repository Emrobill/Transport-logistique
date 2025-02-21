function rechercherCamion() {
    let depart = document.getElementById("depart").value;
    let destination = document.getElementById("destination").value;
    let typeCamion = document.getElementById("typeCamion").value;

    if (depart && destination) {
        document.getElementById("result").classList.remove("hidden");
        document.getElementById("truckInfo").innerHTML = 
            `Camion ${typeCamion} trouvé de ${depart} à ${destination}.`;
    } else {
        alert("Veuillez remplir tous les champs !");
    }
}

function reserverCamion() {
    alert("Camion réservé avec succès !");
    document.getElementById("tracking").classList.remove("hidden");
    initMap();
}

function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: { lat: 3.848, lng: 11.502 }, // Cameroun
    });

    let marker = new google.maps.Marker({
        position: { lat: 3.848, lng: 11.502 },
        map: map,
        title: "Camion en route",
    });

    setInterval(() => {
        let lat = marker.getPosition().lat() + 0.01;
        let lng = marker.getPosition().lng() + 0.01;
        let newPos = new google.maps.LatLng(lat, lng);
        marker.setPosition(newPos);
        map.setCenter(newPos);
    }, 3000);
}
