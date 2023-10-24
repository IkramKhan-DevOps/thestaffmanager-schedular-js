
var scheduler = new bryntum.scheduler.Scheduler();
scheduler = new Scheduler({
    // Where to render to, accepts an element or an element id
    appendTo : document.body,

    // Normally sizing would be handled by CSS, but for simplicity
    // we use fixed with and height for the tutorial
    width : 800,
    height : 600,

    // Dates that the time axis will span
    startDate : '2023-04-16',
    endDate   : '2023-05-15',
});
