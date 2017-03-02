# <i class="fa fa-picture-o wide-icon" aria-hidden="true"></i>Bottle Shots API

> https://api-bottleshots-internal-dev.cloudhub.io/api/1.0/bottleShots

This API returns promotional product images ("bottle shots") from the Constellation Brands Global Brand Center. It includes some identifying information about the product as well as a variety of image formats:

* Mini image (PNG)
* Standard final JPEG (JPG)
* Web image (full-size PNG)

The API can return a specific product (based on GTIN) or all product images modified since a specific date.

###Authentication

The Bottle Shots API requires only an API key for authentication. Submit a request for a key and use it as shown in the requests below.

<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#requestKeyModal">
  <i class="fa fa-key wide-icon" aria-hidden="true"></i>Request an API Key
</button>

<div class="modal" id="requestKeyModal" tabindex="-1" role="dialog" aria-labelledby="requestKeyModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="requestKeyModalLabel">Request an API Key</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form id="requestForm" method="post">
        <div class="modal-body">
          <div class="form-group">
            <label for="apiSelect">Requested API</label>
            <select class="form-control" id="apiSelect">
              <option>Bottle Shots API</option>
              <option>Worker Demographics API</option>
            </select>
          </div>
          <div class="form-group">
            <label for="name-input">Name</label>
            <input class="form-control" type="text" id="name-input" name="name">
          </div>
          <div class="form-group">
            <label for="email-input">Email address</label>
            <input type="email" class="form-control" id="email-input" name="email">
          </div>
          <div class="form-group">
            <label for="phone-input">Phone number</label>
            <input type="tel" class="form-control" id="phone-input" name="phone">
          </div>
          <div class="form-group">
            <label for="optional-input">Additional detail (optional)</label>
            <textarea class="form-control" id="optional-input" rows="3" placeholder="Application name, estimated number of API calls, etc."></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
          <button type="submit" class="btn btn-primary" id="submit">Request Key</button>
        </div>
      </form>
    </div>
  </div>
</div>

<div class="modal fade" id="successModal" tabindex="-1" role="dialog" aria-labelledby="successModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Success!</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-2">
              <h1><i class="fa fa-check-circle-o fa-4" aria-hidden="true"></i></h1>
            </div>
            <div class="col-md-10">
              <p style="padding-top: 5px;">We received your request. We'll get back you you as soon as possible with an API key and additional instructions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="failureModal" tabindex="-1" role="dialog" aria-labelledby="failureModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Something went wrong.</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="container-fluid">
          <div class="col-md-3">
            <i class="fa fa-times-circle-o fa-4" aria-hidden="true"></i>
          </div>
          <div class="col-md-9">
            <p>Whoops! Looks like there was an error while sending your API key request.</p>
            <p>Please contact us directly at <a href="mailto:api-support@cbrands.com">api-support@cbrands.com</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

###Result Details
The following attributes are returned by the Bottle Shots API:

Attribute Name | Description | Type
--------- | ------- | -----------
id | 35-digit item ID from Global Brand Center | string
name | Product name from Global Brand Center | string
dateCreated | Date and time this bottle shot was added to Global Brand Center | string
datePublished | Lorem ipsum dolor sit amet, cu eos sumo graecis deserunt | string
dateModified | Date and time this bottle shot was last modified | string
extension | File extension of the original image | string
upc | Full UPC (barcode) value for the product | string
brandFamily | Numeric brand family code for the product | string
varietal | Numeric varietal code | string
vintage | Vintage year, if specified in Global Brand Center | string
itemSize | Lorem ipsum dolor sit amet, cu eos sumo graecis deserunt | string
webImage | URL for the full-size PNG bottle shot | string
miniImage | URL for the PNG thumbnail image | string
standardFinalJpeg | URL for the full-size JPG bottle shot | string
thul | Lorem ipsum dolor sit amet, cu eos sumo graecis deserunt | string
transparentPNG | URL for the full-size PNG bottle shot | string

## Get All Bottle Shots

> https://api-bottleshots-internal-dev.cloudhub.io/api/1.0/bottleShots will return the following JSON:

```json
[
  {
    "brandFamily": "754",
    "dateCreated": "2017-01-05T21:10:18Z",
    "dateModified": "2017-01-06T16:24:26Z",
    "datePublished": "2016-12-16T18:12:09Z",
    "extension": "psd",
    "id": "9135BEC3-CF40-4819-B7C9C16DD7E92BF1",
    "itemSize": "219",
    "miniImage": "https://d3cy9zhslanhfa.cloudfront.net/media/final/5be7df2b-2a56-417f-84fe-dec1227f9116/mini-0AA4663D-852F-4DA2-97877C3DF1AD6BA7.png",
    "name": "2014 CHS Cabernet Sauvignon 750ml Bottle Shot",
    "standardFinalJpeg": "https://d3cy9zhslanhfa.cloudfront.net/media/final/5be7df2b-2a56-417f-84fe-dec1227f9116/Standard Final JPG-CHS_Bottle_Shot.jpg",
    "thul": "https://d3cy9zhslanhfa.cloudfront.net/media/final/5be7df2b-2a56-417f-84fe-dec1227f9116/thul-7ECA50DA-3BF8-4872-9BC1D6B268CFD9F2.png",
    "upc": "184745000126",
    "varietal": "198",
    "vintage": "2014",
    "webImage": "https://d3cy9zhslanhfa.cloudfront.net/media/final/5be7df2b-2a56-417f-84fe-dec1227f9116/webimage-4D27936B-F803-4DC7-80DB39A24800A652.png"
  }
  {
    "brandFamily": "754",
    "dateCreated": "2017-01-05T21:10:18Z",
    "dateModified": "2017-01-06T16:24:26Z",
    "datePublished": "2016-12-16T18:12:09Z",
    "extension": "psd",
    "id": "9135BEC3-CF40-4819-B7C9C16DD7E92BF1",
    "itemSize": "219",
    "miniImage": "https://d3cy9zhslanhfa.cloudfront.net/media/final/5be7df2b-2a56-417f-84fe-dec1227f9116/mini-0AA4663D-852F-4DA2-97877C3DF1AD6BA7.png",
    "name": "2014 CHS Cabernet Sauvignon 750ml Bottle Shot",
    "standardFinalJpeg": "https://d3cy9zhslanhfa.cloudfront.net/media/final/5be7df2b-2a56-417f-84fe-dec1227f9116/Standard Final JPG-CHS_Bottle_Shot.jpg",
    "thul": "https://d3cy9zhslanhfa.cloudfront.net/media/final/5be7df2b-2a56-417f-84fe-dec1227f9116/thul-7ECA50DA-3BF8-4872-9BC1D6B268CFD9F2.png",
    "upc": "184745000126",
    "varietal": "198",
    "vintage": "2014",
    "webImage": "https://d3cy9zhslanhfa.cloudfront.net/media/final/5be7df2b-2a56-417f-84fe-dec1227f9116/webimage-4D27936B-F803-4DC7-80DB39A24800A652.png"
  }
]
```

Retrieves all bottle shots that have been modified since the specified date.

### HTTP Request

`https://api-bottleshots-internal-dev.cloudhub.io/api/1.0/bottleShots`

### Query Parameters

Parameter | Description | Type
--------- | ------- | -----------
dateModified | Retrieve all bottle shots modified after this time | datetime
apiKey | The API key you received upon registration | string

## Get a Specific Bottle Shot

> https://api-bottleshots-internal-dev.cloudhub.io/api/1.0/bottleShots/184745000126 will return the following JSON:

```json
{
  "brandFamily": "754",
  "dateCreated": "2017-01-05T21:10:18Z",
  "dateModified": "2017-01-06T16:24:26Z",
  "datePublished": "2016-12-16T18:12:09Z",
  "extension": "psd",
  "id": "9135BEC3-CF40-4819-B7C9C16DD7E92BF1",
  "itemSize": "219",
  "miniImage": "https://d3cy9zhslanhfa.cloudfront.net/media/final/5be7df2b-2a56-417f-84fe-dec1227f9116/mini-0AA4663D-852F-4DA2-97877C3DF1AD6BA7.png",
  "name": "2014 CHS Cabernet Sauvignon 750ml Bottle Shot",
  "standardFinalJpeg": "https://d3cy9zhslanhfa.cloudfront.net/media/final/5be7df2b-2a56-417f-84fe-dec1227f9116/Standard Final JPG-CHS_Bottle_Shot.jpg",
  "thul": "https://d3cy9zhslanhfa.cloudfront.net/media/final/5be7df2b-2a56-417f-84fe-dec1227f9116/thul-7ECA50DA-3BF8-4872-9BC1D6B268CFD9F2.png",
  "upc": "184745000126",
  "varietal": "198",
  "vintage": "2014",
  "webImage": "https://d3cy9zhslanhfa.cloudfront.net/media/final/5be7df2b-2a56-417f-84fe-dec1227f9116/webimage-4D27936B-F803-4DC7-80DB39A24800A652.png"
}
```

This endpoint retrieves a specific bottle shot based on the product's GTIN.

### HTTP Request

`https://api-bottleshots-internal-dev.cloudhub.io/api/1.0/bottleShots/{gtin}`

### URI Parameters

Parameter | Decription | Type
--------- | ------- | -----------
gtin | The GTIN of the product to retrieve | string

### Query Parameters

Parameter | Description | Type
--------- | ------- | -----------
apiKey | The API key you received upon registration | string