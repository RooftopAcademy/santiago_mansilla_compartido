function comCard(com) {
    return `
    <div class="comItem">
        <h5 class="comName">${com.name}</h5>
        <h6 class="comEmail">${com.email}</h6>
        <p class="comText">${com.body}</p>
    </div>
    `
}