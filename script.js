// TODO: add code here
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
        // Access the JSON in the response
        response.json().then( function(json) {
            // console.log(json);
            let container = document.getElementById("container"); 
            let index = 0;
            // console.log(json[0]);
            let astronauts;
            for (let astronaut of json) {
                astronauts += ` 
                <div class="astronaut">
                    <div class="bio">
                    <h3>${astronaut.firstName}</h3>
                    <ul>
                        <li>Hours in space:${astronaut.hoursInSpace}</li>
                        <li>Active: ${astronaut.active}</li>
                        <li>Skills: ${astronaut.skills}</li>
                    </ul>
                    </div> 
                    <img class="avatar" src=${astronaut.picture}>
                </div> `;
            }
            container.innerHTML = astronauts;
        });
    });
})

