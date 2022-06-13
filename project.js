let dataProject = []
console.log(dataProject);

function addProject(event) {
    event.preventDefault()

    let title = document.getElementById('input-title').value
    let startDate = document.getElementById('input-startDate').value
    let endDate = document.getElementById('input-endDate').value
    let description = document.getElementById('input-description').value
    let node = document.getElementById('input-node').checked
    let react = document.getElementById('input-react').checked
    let js = document.getElementById('input-js').checked
    let html5 = document.getElementById('input-html5').checked
    let image = document.getElementById('input-image').files

    image = URL.createObjectURL(image[0])

    let project = {
        title,
        startDate,
        endDate,
        description,
        node,
        react,
        js,
        html5,
        image
    }

    dataProject.push(project)
    console.log(dataProject)

    renderProject()
}

function getTime(startDate, endDate){
    if(startDate[5] == 0){startDate = startDate[6]} else {startDate = startDate[5]+startDate[6]}
    if(endDate[5] == 0){endDate = endDate[6]}else{endDate = endDate[5]+endDate[6]}

    const startMonth = Number(startDate);
    const endMonth = Number(endDate);

    const duration = endMonth - startMonth

    if(duration === 0) return "<1 month"

    return endMonth - startMonth + " " + "month"
}

function renderProject() {
    document.getElementById('listProject').innerHTML = ``

    for(let i = 0; i < dataProject.length; i++){
        document.getElementById('listProject').innerHTML += 
        `
            <div class="project-list-item">
                <div class="project-image">
                    <img src="${dataProject[i].image}" alt="">
                </div>
                <div class="project-content" >
                    <h2>
                        <a href="project-detail.html" target="_blank">
                            ${dataProject[i].title}
                        </a>
                    </h2>
                    <div class="duration-project">
                        <p>Duration: <span>${getTime(dataProject[i].startDate,dataProject[i].endDate)}</span></p>
                    </div>
                    <div class="description-project">
                        <p>
                            ${dataProject[i].description}
                        </p>
                    </div>
                    <div class="tech-project">
                        ${dataProject[i].node?`<i class="fa-brands fa-node-js"></i>` : ""}
                        ${dataProject[i].react?`<i class="fa-brands fa-react"></i>` : ""}
                        ${dataProject[i].js?`<i class="fa-brands fa-js"></i>` : ""}
                        ${dataProject[i].html5?`<i class="fa-brands fa-html5"></i>` : ""}
                    </div>
                    <div class="btn-group">
                        <div class="btn-left">
                            <button>Edit</button>
                        </div>
                        <div class="btn-right">
                            <button class="del-btn">Delete</button>
                        </div>
                    </div>
                </div>
            </div> 
        `
    }

}


