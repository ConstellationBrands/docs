# Worker Demographics API

This API retrieves demographic information for employees of Constellation Brands and 3<sup>rd</sup> party partners. The API supports retrieval of all employees' information, specific employees, and employees added/modified within specific date range. The API doesn't provide the entire dataset in one call, but does support pagination. Consumers can dictate how many records they need to retrieve.

###Authentication

The Worker Demographics API is not currently available for public use. We'll update this page when the request form is opened up.

## Get All Workers

Retrieves all workers that match the filtering criteria.

<em>Note: Pagination applies to the results of this API call. If workerType is not specified, employees will precede distributors.</em>

```json
{
  "workers": [
    {
      "id": "A12345",
      "type": "Employee",
      "firstName": "Jane",
      "middleName": "Margaret",
      "lastName": "Doe",
      "jobTitle": "Atom Smasher"
    },
    {
      "id": "ZZ72R2",
      "type": "Distributor",
      "firstName": "James",
      "lastName": "Bond",
      "jobTitle": "Spy"
    }
  ]
}
```

### HTTP Request

`GET https://api-workers-internal-dev.cloudhub.io/api/1.0/workers`

### Query Parameters

Parameter | Type | Description
--------- | ------- | -----------
workerType | string | Employee or distributor.
lastEventDateAfter | string | Start date for change detection. Use with lastEventDateBefore to create a date range.
lastEventDateBefore | string | End date for change detection.

## Get a Specific Worker

This endpoint retrieves a specific worker based on worker ID.

### HTTP Request

```json
{
  "id": "A1234B",
  "workerType": "Employee",
  "firstName": "John",
  "middleName": "J",
  "lastName": "Doe",
  "preferredName": "Johnny Dough-Boy",
  "dateOfBirth": "1900-01-12",
  "timezone": "EST",
  "preferredLanguage": "en_US",
  "createdOnDate": "2016-02-28T16:41:41.090Z",
  "job": {
    "code": "123AB",
    "title": "Doughnut Retriever",
    "status": "Active",
    "isManager": false,
    "organizationName": "Doughnut Research and Technology",
    "managerId": "234US",
    "managerName": "Susan B Goode",
    "company": "Constellation Brands",
    "department": "Doughnut Retrieval",
    "division": "Snacks",
    "costCenterId": "SD2SY3",
    "costCenterName": "Doughnut Retrieval - General",
    "startDate": "1994-06-03"
  },
  "workContactInfo": {
    "email": "johnnyDB@cbrands.com",
    "phoneNumber": "11234567890",
    "location": {
      "name": "High Point",
      "address1": "207 High Point Drive",
      "city": "Victor",
      "state_province": "NY",
      "postalCode": "14564",
      "country": "US"
    }
  },
  "personalContactInfo": {
    "mobilePhoneNumber": "10987654321",
    "homePhoneNumber": "20987654321",
    "email": "doeboy@gmail.com"
  }
}
```

`GET GET https://api-workers-internal-dev.cloudhub.io/api/1.0/workers/{workerID}`

### URL Parameters

Parameter | Type | Description
--------- | ------- | -----------
workerId | string | The ID of the worker to retrieve.