columsM = [
    /*
    --------------------------------------------------------------------------
    text: Name of Column
    field: Name of Person
    --------------------------------------------------------------------------
    * */

    { text : 'Name', field : 'name', width : 130 },
]

resourcesM = [
    /*
    --------------------------------------------------------------------------
    ID = person ID
    Name = person Name
    --------------------------------------------------------------------------
    * */

    {id: 1, name: 'John', cls : 'unavailable' },
    {id: 2, name: 'smith'},
    {id: 3, name: 'Jessica'},
    {id: 4, name: 'Mark'},
    {id: 5, name: 'Lisa'},
    {id: 6, name: 'Peter'},
    {id: 7, name: 'Mary'},
    {id: 8, name: 'Linda'},
    {id: 9, name: 'David'},
    {id: 10, name: 'Kevin'},
]

eventsM = [
    /*
    --------------------------------------------------------------------------
    ID = event ID
    ResourceId = from the above resourcesM (id)
    startDate and Date = from [2023-11-01 - 2023-11-30 (must be in future)]
    Name = Some Job name
    --------------------------------------------------------------------------
     */

    {id: 1, resourceId: 1, name: 'Manager', startDate: '2023-11-16', endDate: '2023-11-23', eventColor : 'red'},
    {id: 2, resourceId: 2, name: 'Flight Attendent', startDate: '2023-11-11', endDate: '2023-11-22'},
    {id: 3, resourceId: 3, name: 'Sales', startDate: '2023-11-12', endDate: '2023-11-18'},
    {id: 4, resourceId: 4, name: 'Marketing', startDate: '2023-11-14', endDate: '2023-11-20'},
    {id: 5, resourceId: 5, name: 'Security', startDate: '2023-11-16', endDate: '2023-11-27'},
    {id: 6, resourceId: 6, name: 'Chief', startDate: '2023-11-18', endDate: '2023-11-21'},
    {id: 7, resourceId: 7, name: 'Security', startDate: '2023-11-20', endDate: '2023-11-28'},
    {id: 8, resourceId: 8, name: 'Bar tender', startDate: '2023-11-22', endDate: '2023-11-27'},
    {id: 9, resourceId: 9, name: 'Sales', startDate: '2023-11-01', endDate: '2023-11-12'},
    {id: 10, resourceId: 10, name: 'Manager', startDate: '2023-11-02', endDate: '2023-11-08'},
    {id: 11, resourceId: 1, name: 'Driver', startDate: '2023-11-28', endDate: '2023-11-30'},
    {id: 12, resourceId: 2, name: 'Flight Attendent', startDate: '2023-11-23', endDate: '2023-12-26'},
    {id: 13, resourceId: 3, name: 'Sales', startDate: '2023-12-02', endDate: '2023-12-09'},
    {id: 14, resourceId: 4, name: 'Marketing', startDate: '2023-12-04', endDate: '2023-12-14'},
    {id: 15, resourceId: 5, name: 'Security', startDate: '2023-12-06', endDate: '2023-12-10'},
    {id: 16, resourceId: 6, name: 'Chief', startDate: '2023-12-08', endDate: '2023-12-19'},
]